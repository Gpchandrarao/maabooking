import axios from "axios";

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add headers or tokens if needed
    // console.log("Request:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error Response:", error.response);
    return Promise.reject(error);
  }
);

export default axiosInstance;
