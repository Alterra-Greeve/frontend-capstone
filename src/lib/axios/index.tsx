import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";

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


/**
 * 
 * Axios response interceptor 
 * fungsi:
 * setiap response yang dilakukan akan dicek apakah status code nya 401
 * kalau iya, maka akan dihapus cookie token dan redirect ke halaman login
 * 
 */
GreeveApi.interceptors.response.use(
  (response) => { return response },
  (error) => {
    if (error.response?.status === 401) {
      deleteCookie("greeve-token");
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);