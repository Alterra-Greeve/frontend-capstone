import axios from "axios";
import { getCookie } from "cookies-next";

export const GreeveApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 
 * Axios interceptor 
 * fungsi:
 * setiap request yang dilakukan akan dicek apakah ada token di localstorage
 * kalau ada nanti langsung dimasukin ke headers authorization
 * 
 */

GreeveApi.interceptors.request.use((config) => {
  const token = getCookie("greeve-token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});