import React from 'react';
import axios from 'axios';

const LogoutForm = ({ setUser }) => {
  const handleLogout = async () => {
    try {
      // Petición POST para cerrar sesión
      const response = await axios.post('https://proyecto-final-ejj7.onrender.com/api/auth/logout');
      alert(response.data.message);
      setUser(null); 
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      alert('Hubo un error al cerrar sesión');
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default LogoutForm;
