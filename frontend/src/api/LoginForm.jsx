import React, { useState } from 'react';
import axios from 'axios';
import RegisterForm from './RegisterForm';

const LoginForm = ({ setUser }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      alert('Login exitoso');
      // Aquí puedes manejar lo que haces después de hacer login (como guardar el usuario en el estado)
      setUser(response.data); // Asumiendo que guardas la información del usuario en el estado
    } catch (error) {
      console.error("Error en el login:", error);
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div></div>
      <h2>Login</h2>
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
      <button type="submit">Iniciar sesión</button>
      <RegisterForm />
    </form>
  );
};

export default LoginForm;
