import React from 'react';
import axios from 'axios';

const LogoutForm = ({ setUser }) => {
  const handleLogout = async () => {
    try {
      // Petición POST para cerrar sesión
      const response = await axios.post('https://proyecto-final-ejj7.onrender.com/api/auth/logout');
      alert(response.data.message);  // Mostrar mensaje de éxito
      setUser(null);  // Restablecer el estado del usuario
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
