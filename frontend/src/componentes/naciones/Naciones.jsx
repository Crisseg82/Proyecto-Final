import React, { useState, useEffect } from 'react';
import axios from '../../api/axiosConfig'; 
import './naciones.css';

const Nacion = () => {
    const [nations, setNations] = useState([]);
    const [showDescription, setShowDescription] = useState({});

    useEffect(() => {
        const fetchNations = async () => {
            try {
                const response = await axios.get('/naciones');
                setNations(response.data);
            } catch (error) {
                console.error('Error al obtener las naciones:', error);
            }
        };

        fetchNations();
    }, []);

    const toggleDescription = (index) => {
        setShowDescription((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div className="nations-section">
            {nations.map((nation, index) => (
                <div key={nation.nation} className="nation-card">
                    <img
                        src={`http://localhost:5000${nation.image}`}
                        alt={nation.nation}
                        className="nation-image"
                        onClick={() => toggleDescription(index)}
                    />
                    <div className="nation-info">
                        <h2>{nation.nation}</h2>
                    </div>
                    {showDescription[index] && (
                        <div className="description show-description">
                            <p>{nation.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Nacion;
