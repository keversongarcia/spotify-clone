import { generateRandomString } from "@/lib";
import { NextApiRequest, NextApiResponse } from "next";

const scope = "user-read-private user-read-email";

const state = generateRandomString(16);

const params = {
  response_type: "code",
  client_id: process.env.SPOTIFY_CLIENT_ID,
  scope,
  redirect_uri: "http://localhost:3000/api/callback",
  state,
};

export default function auth(req: NextApiRequest, res: NextApiResponse) {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      new URLSearchParams(params).toString()
  );
}
