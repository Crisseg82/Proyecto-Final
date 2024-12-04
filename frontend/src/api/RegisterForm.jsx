import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const RegisterForm = ({ setShowRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://proyecto-final-ejj7.onrender.com/api/auth/register', formData);
      alert(response.data.message || 'Registro exitoso');
      
      // Limpia el formulario después de un registro exitoso
      setFormData({
        username: '',
        password: '',
        nombre: '',
        apellido: '',
        email: '',
      });

      // Cierra el formulario de registro
      setShowRegister(false);

    } catch (error) {
      console.error("Error en el registro:", error);

      // Muestra un mensaje de error claro
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert('Hubo un error al registrar al usuario');
      }
    }
  };

  return (
    <div className='fomulario-registro'>
      <form className='register-form' onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
