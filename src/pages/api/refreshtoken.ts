import request from "request";

export default function refreshtoken({ req, res }) {
  const refreshToken = req.query.refresh_token;
  const config = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(
          process.env.SPOTIFY_CLIENT_ID +
            ":" +
            process.env.SPOTIFY_CLIENT_SECRET
        ).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    },
    json: true,
  };

  request.post(config, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const acccesToken = body.access_token;
      res.send({
        access_token: acccesToken,
      });
    }
  });
}
