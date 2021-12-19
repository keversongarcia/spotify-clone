import axios from "axios";

const http = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

http.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${process.env.SPOTIFY_TOKEN}`;

  return config;
});

export default http;