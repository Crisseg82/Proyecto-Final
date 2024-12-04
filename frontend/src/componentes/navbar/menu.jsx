import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './menu.css';

const Menu = ({ user, setUser }) => { 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const abrirMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = async () => {
        try {
            await axios.post('https://proyecto-final-ejj7.onrender.com/api/auth/logout');
            setUser(null); // Limpia el estado del usuario
            alert('Sesión cerrada correctamente');
            navigate('/'); // Redirige a la página principal
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            alert('Hubo un problema al cerrar sesión');
        }
    };

    return (
        <nav className={`menu ${isMenuOpen ? 'active' : ''}`}>
            <button className="menu-toggle" onClick={abrirMenu}>
                {isMenuOpen ? 'Cerrar' : 'Menú'}
            </button>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Personajes">Personajes</Link></li>
                <li><Link to="/Nacion">Nación</Link></li>
                <li><Link to="/Elementos">Elementos</Link></li>
                <div className="login-nav">
                    {user ? (
                        <li>
                            <button className="logout-button" onClick={handleLogout}>
                                Cerrar sesión
                            </button>
                        </li>
                    ) : (
                        <div className="log-icon">
                            <li><Link to="/login">Iniciar Sesión</Link></li>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    )}
                </div>
            </ul>
        </nav>
    );
};

export default Menu;
