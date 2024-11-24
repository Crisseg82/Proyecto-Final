import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
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
            </ul>
        </nav>
    );
};

export default Menu;
