import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://justchat-39q3.onrender.com/api" : "/api",
  withCredentials: true,
});