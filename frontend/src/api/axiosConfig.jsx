import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://proyecto-final-ejj7.onrender.com/api'
});

// Agregar encabezados o lógica adicional para cada solicitud
axiosInstance.interceptors.request.use(
    (config) => {
        // Ejemplo: incluir un token de autenticación
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Manejo global de errores de respuesta (opcional)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Manejar errores, como redireccionar al login si el usuario no está autenticado
        if (error.response?.status === 401) {
            // Redirigir al login, por ejemplo
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);


export default axiosInstance;
