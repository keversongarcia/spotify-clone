import { tokenStorage } from "@/context/Auth.context";
import axios from "axios";

const http = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem(tokenStorage);
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default http;
