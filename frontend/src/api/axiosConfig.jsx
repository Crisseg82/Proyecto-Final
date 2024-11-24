import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api', // Cambia según la URL de tu backend
});

export default axiosInstance;
