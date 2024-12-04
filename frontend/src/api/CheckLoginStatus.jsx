import React, { useEffect } from 'react';
import axios from 'axios';

const CheckLoginStatus = ({ setUser }) => {
    useEffect(() => {
        const checkStatus = async () => {
            try {
                const response = await axios.get('https://proyecto-final-ejj7.onrender.com/api/auth/status');
                if (response.data.loggedIn) {
                    setUser(response.data.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Error al verificar estado de sesión:', error);
                setUser(null);
            }
        };

        checkStatus();
    }, [setUser]);

    return null;
};

export default CheckLoginStatus;
