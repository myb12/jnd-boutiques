import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});


/*
apiClient.interceptors.request.use(
  (config) => {
    // const token = getAuthToken(); // e.g., from localStorage or a state management system
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
*/

export default apiClient;