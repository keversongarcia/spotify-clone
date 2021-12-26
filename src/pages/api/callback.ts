import { NextApiRequest, NextApiResponse } from "next";
import request from "request";

const redirect_uri = "http://localhost:3000/api/callback";
const stateKey = "spotify_auth_state";

export default function callback(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code || null;
  const state = req.query.state || null;

  const error = {
    error: "state_mismatch",
  };

  if (state === null) {
    res.redirect("/#" + new URLSearchParams(error).toString());
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
        const access_token = body.access_token,
          refresh_token = body.refresh_token;

        // const options = {
        //   url: "https://api.spotify.com/v1/me",
        //   headers: { Authorization: "Bearer " + access_token },
        //   json: true,
        // };

        // request.get(options, (error, response, body) => {
        //   console.log("legal", body);
        // });

        const resParams = {
          access_token: access_token,
          refresh_token: refresh_token,
        };

        res.redirect(
          "http://localhost:3000/#" + new URLSearchParams(resParams).toString()
        );
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
