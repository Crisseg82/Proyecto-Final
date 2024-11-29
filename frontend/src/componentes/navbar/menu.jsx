import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = ({ user }) => {  // Recibimos el estado 'user' como prop
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const abrirMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`menu ${isMenuOpen ? 'active' : ''}`}>
            <button className="menu-toggle" onClick={abrirMenu}>
                {isMenuOpen ? 'Cerrar' : 'Menu'}
            </button>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Personajes">Personajes</Link></li>
                <li><Link to="/Nacion">Nacion</Link></li>
                <li><Link to="/Elementos">Elementos</Link></li>

                {/* Si el usuario está logueado, mostramos el link de Logout */}
                {user ? (
                    <li><Link to="/logout">Cerrar sesión</Link></li>
                ) : (
                    <>
                        {/* Si el usuario no está logueado, mostramos Login y Registro */}
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Registro</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Menu;
