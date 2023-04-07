import axios, {AxiosHeaders, AxiosInstance} from "axios";

const axiosInstance: AxiosInstance = axios.create({
    //baseURL: "http://127.0.0.1:3000",
    baseURL: "https://chaturange-api.vercel.app/",
   
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
});

 axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            //config.headers["Authorization"] = `Bearer ${accessToken}`;
            config.headers.Authorization = `Bearer ${accessToken}`;
            console.log('Request headers:', config.headers);
            (config.headers as AxiosHeaders).set("Authorization", `Bearer ${accessToken}`);
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    });

let isRefreshing = false;
let failedQueue: (() => void)[] = [];

const myInterceptor = axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve) => {
                    failedQueue.push(() => {
                        resolve(axiosInstance(originalRequest));
                    });
                })
                    .catch((err) => Promise.reject(err));
            }
            originalRequest._retry = true;
            isRefreshing = true;
            return new Promise((resolve, reject) => {
                axiosInstance
                    .post("/auth/refresh", {
                        refresh_token: localStorage.getItem("refresh_token"),
                    })
                    .then((res) => {
                        if (res.status === 200) {
                            localStorage.setItem("token", res.data.token);
                            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
                            originalRequest.headers["Authorization"] = `Bearer ${res.data.token}`;
                            failedQueue.forEach((cb) => cb());
                            failedQueue = [];
                            resolve(axiosInstance(originalRequest));
                        }
                    })
                    .catch((err) => {
                        reject(err);
                    })
                    .finally(() => {
                        isRefreshing = false;
                    });
            });
        }
        return Promise.reject(error);
    });


axios.interceptors.request.eject(myInterceptor);
export default axiosInstance;
