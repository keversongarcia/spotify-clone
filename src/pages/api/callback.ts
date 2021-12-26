import { NextApiRequest, NextApiResponse } from "next";
import request from "request";
import { setCookies } from "cookies-next";

const redirect_uri = "http://localhost:3000/api/callback";

export default function callback(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (state === null) {
    res.redirect(
      "/#" +
        new URLSearchParams({
          error: "state_mismatch",
        }).toString()
    );
  } else {
    const config = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer(
            process.env.SPOTIFY_CLIENT_ID +
              ":" +
              process.env.SPOTIFY_CLIENT_SECRET
          ).toString("base64"),
      },
      json: true,
    };

    request.post(config, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        console.log(body);
        const token_type = body.token_type;
        const access_token = body.access_token;

        // const options = {
        //   url: "https://api.spotify.com/v1/me",
        //   headers: { Authorization: "Bearer " + access_token },
        //   json: true,
        // };

        // request.get(options, (error, response, body) => {
        //   console.log("legal", body);
        // });

        setCookies("token", `${token_type + " " + access_token}`, {
          req,
          res,
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 1000 * 3600 * 24 * 30 * 1,
          sameSite: "strict",
          path: "/",
        });

        res.redirect("http://localhost:3000");
      } else {
        res.redirect(
          "/#" +
            new URLSearchParams({
              error: "invalid_token",
            }).toString()
        );
      }
    });
  }
}
