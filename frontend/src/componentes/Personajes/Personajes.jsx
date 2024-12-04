import React, { useEffect, useState } from 'react';
import axios from '../../api/axiosConfig';
import './Personajes.css';
import CrearPersonaje from './CrearPersonaje';

const Personajes = () => {
    const [characters, setCharacters] = useState([]); // Lista de personajes
    const [visibleCharacterId, setVisibleCharacterId] = useState(null); // ID del personaje con detalles visibles
    const [favorites, setFavorites] = useState([]); // IDs de personajes favoritos
    const [mensaje, setMensaje] = useState(""); // Mensaje de feedback

    // Carga de personajes desde el backend
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('/personajes'); // Ruta del backend
                setCharacters(response.data);
            } catch (error) {
                console.error('Error al obtener los personajes:', error);
            }
        };

        fetchCharacters();
    }, []);

    // Alternar detalles visibles
    const handleShowDetails = (_id) => {
        setVisibleCharacterId(visibleCharacterId === _id ? null : _id);
    };

    // Alternar favoritos
    const handleToggleFavorite = (_id) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(_id)
                ? prevFavorites.filter((favId) => favId !== _id)
                : [...prevFavorites, _id]
        );
    };

    // Eliminar un personaje
    const handleDelete = async (_id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este personaje?")) {
            try {
                await axios.delete(`/personajes/${_id}`);
                setMensaje("Personaje eliminado exitosamente");
                setCharacters((prevCharacters) =>
                    prevCharacters.filter((character) => character._id !== _id)
                );
            } catch (error) {
                console.error('Error al eliminar personaje:', error);
                setMensaje("Hubo un error al eliminar el personaje");
            }
        }
    };

    // Redirigir a la página de edición
    const handleEdit = (_id) => {
        window.location.href = `/editar-personaje/${_id}`;
    };

    return (
        <div id="container-personajes">
            <h1>Personajes</h1>

            {mensaje && <p className="mensaje-feedback">{mensaje}</p>}

            {/* Formulario para crear personajes */}
            <CrearPersonaje />

            {/* Lista de personajes */}
            <div className="characters-list">
                {characters.map((character) => (
                    <div key={character._id} className="character-card">
                        <button
                            className={`favorite-button ${favorites.includes(character._id) ? 'active' : ''}`}
                            onClick={() => handleToggleFavorite(character._id)}
                        >
                            {favorites.includes(character._id)
                                ? 'Quitar de Favoritos'
                                : 'Añadir a Favoritos'}
                        </button>
                        <img
                            src={`http://localhost:5000${character.image.replace('/images/personajes/images/personajes', '/images/personajes')}`}
                            alt={character.name}
                            className="character-image"
                        />

                        <div className="descripcionp">
                            <strong>{character.name}</strong>
                            <hr />
                            <p>{character.description}</p>
                            <button onClick={() => handleShowDetails(character._id)}>
                                {visibleCharacterId === character._id
                                    ? 'Ocultar Detalles'
                                    : 'Mostrar Detalles'}
                            </button>
                        </div>

                        {/* Detalles del personaje */}
                        {visibleCharacterId === character._id && (
                            <div className="character-details">
                                <p>
                                    <strong>Nación:</strong> {character.nation}
                                </p>
                                <p>
                                    <strong>Arma:</strong> {character.weapon}
                                </p>
                                <p>
                                    <strong>Elemento:</strong> {character.element}
                                </p>
                                <button onClick={() => handleEdit(character._id)}>Editar</button>
                                <button onClick={() => handleDelete(character._id)}>Eliminar</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Sección de favoritos */}
            <div id="favorites-section">
                <h2>Favoritos</h2>
                {characters
                    .filter((character) => favorites.includes(character._id))
                    .map((favCharacter) => (
                        <div key={favCharacter._id} className="favorite-card">
                            <img
                                src={`http://localhost:5000${favCharacter.image.replace('/images/personajes/images/personajes', '/images/personajes')}`}
                                alt={favCharacter.name}
                                className="favorite-image"
                            />
                            <strong>{favCharacter.name}</strong>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Personajes;
