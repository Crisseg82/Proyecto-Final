import React, { useState, useEffect } from 'react';
import './naciones.css';

const Nacion = () => {
    const [nations, setNations] = useState([]);
    const [showDescription, setShowDescription] = useState({});

    useEffect(() => {
        fetch('/naciones/nacion.json')
            .then(response => response.json())
            .then(data => setNations(data))
            .catch(error => console.error('Error fetching the nations data:', error));
    }, []);

    const toggleDescription = (index) => {
        setShowDescription(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className="nations-section">
            {nations.map((nation, index) => (
                <div key={index} className="nation-card">
                    <img
                        src={nation.image}
                        alt={nation.nation}
                        className="nation-image"
                        onClick={() => toggleDescription(index)}
                    />
                    <div className="nation-info">
                        <h2>{nation.nation}</h2>
                    </div>
                    <div className={`description ${showDescription[index] ? 'show-description' : ''}`}>
                        <p>{nation.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Nacion;
