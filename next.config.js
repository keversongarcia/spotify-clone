module.exports = {
  reactStrictMode: true,
  env: {
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    REDIRECT_URI: process.env.REDIRECT_URI,
  },
};
