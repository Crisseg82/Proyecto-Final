import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import './elementos.css';
import MezclaElement from './Reacciones';


function Elementos() {
    return (
        <div className='containerElements'>
            <h1>Elementos</h1>
            <i>Son los componentes básicos de este mundo y la fuente de muchos fenómenos milagrosos.
                <br />
                Todo tipo de cosas suceden cuando los elementos interactúan. Los aventureros, los viajeros y los guerreros usan las Reacciones Elementales para hacer proezas que serían imposibles de conseguir de otro modo.</i>
            <br />

            <h2>Tipos de elementos</h2>
            <div className='element-tipo'>
                <ul>
                    <li>Anemo: Viento</li>
                    <li>Cryo: Hielo</li>
                    <li>Dendro: Naturaleza</li>
                    <li>Electro: Rayo</li>
                    <li>Geo: Tierra</li>
                    <li>Hydro: Agua</li>
                    <li>Pyro: Fuego</li>
                </ul>
            </div>
            <br />
            <div className='mezcla'>
            <MezclaElement />
            </div>

        </div>
    )
}

export default Elementos;