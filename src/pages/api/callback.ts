import { NextApiRequest, NextApiResponse } from "next";
import request from "request";
import { setCookies } from "cookies-next";

const redirectUri = "http://localhost:3000/api/callback";

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
        redirect_uri: redirectUri,
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
        const accessToken = body.access_token;
        const refreshToken = body.refresh_token;

        setCookies("access_token", accessToken, {
          req,
          res,
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60,
          sameSite: "strict",
          path: "/",
        });

        setCookies("refresh_token", refreshToken, {
          req,
          res,
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60,
          sameSite: "strict",
          path: "/",
        });

        res.redirect("http://localhost:3000/");
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
