import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const handleUnauthorized = (
    toastWarning: (msg: string) => void,
    logout: () => void
) => {
    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                toastWarning("Session หมดอายุแล้ว กรุณาเข้าสู่ระบบใหม่");
                setTimeout(() => {
                    logout();
                }, 1000);
            }
            return Promise.reject(error);
        }
    );
};

export default api;
