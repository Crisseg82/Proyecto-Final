import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RegisterForm from './RegisterForm';
import './login.css';

const LoginForm = ({ setUser }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://proyecto-final-ejj7.onrender.com/api/auth/login', formData);
      alert('Login exitoso');
      setUser(response.data);
      navigate('/');
    } catch (error) {
      console.error("Error en el login:", error);
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Iniciar sesión</button>
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmJ5dnRlaXY4NG54bGN4a3QwdGx1aDg4em15aHdzYzhoYTRocGhkOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uOAyXaREzn6Noz5yrZ/giphy.gif" alt="bailecito" width={100} />

        <div className='register-container'>
          <p>¿No tienes cuenta?</p>
          <button
            type="button"
            className="register-toggle"
            onClick={() => setShowRegister(!showRegister)}
          >
            {showRegister ? "Cerrar registro" : "Registrarme"}
          </button>
        </div>
      </form>

      {showRegister && <RegisterForm setShowRegister={setShowRegister} />}
    </div>
  );
};

export default LoginForm;
