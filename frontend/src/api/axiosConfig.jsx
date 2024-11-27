import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://proyecto-final-ejj7.onrender.com/api'
});

export default axiosInstance;
