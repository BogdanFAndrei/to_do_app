/**
 * @fileoverview API configuration module for making HTTP requests to the backend
 * @module api/tracker
 */

import axios from "axios";

/**
 * Axios instance configured with base URL and interceptors
 * @type {import('axios').AxiosInstance}
 */
const instance = axios.create({
    baseURL: "http://localhost:3000"
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
