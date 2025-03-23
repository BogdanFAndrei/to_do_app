import axios from "axios";

const instance = axios.create({
    baseURL: "https://a939-2a01-4b00-d013-b000-3c8d-321e-a9c8-78f5.ngrok-free.app"
});

// Add request interceptor
instance.interceptors.request.use(
    (config) => {
        console.log('API: Making request to:', config.url);
        console.log('API: Request data:', config.data);
        return config;
    },
    (error) => {
        console.error('API: Request error:', error);
        return Promise.reject(error);
    }
);

// Add response interceptor
instance.interceptors.response.use(
    (response) => {
        console.log('API: Response received:', response.data);
        return response;
    },
    (error) => {
        console.error('API: Response error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default instance;
