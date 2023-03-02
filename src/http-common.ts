import axios, { AxiosHeaders, AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "axiosInstance://127.0.0.1:8000/api", // A modifier en fonction de l'adresse de l'API
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

const myInterceptor = axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    // config.headers["Authorization"] = `Bearer ${token}`;
    (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
  }
  return config;
});
axios.interceptors.request.eject(myInterceptor);
export default axiosInstance;
