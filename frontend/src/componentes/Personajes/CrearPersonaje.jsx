import React, { useState } from "react";
import axios from "axios";
import './Personajes.css';

const CrearPersonaje = () => {
    const [name, setName] = useState("");
    const [nation, setNation] = useState("");
    const [weapon, setWeapon] = useState("");
    const [element, setElement] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("nation", nation);
        formData.append("weapon", weapon);
        formData.append("element", element);
        formData.append("description", description);
        formData.append("image", image);

        try {
            const response = await axios.post(
                "http://localhost:5000/api/personajes",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            setMensaje("Personaje creado exitosamente");
            console.log("Personaje creado:", response.data);

            // Limpiar los campos del formulario
            setName("");
            setNation("");
            setWeapon("");
            setElement("");
            setDescription("");
            setImage(null);

            // Recargar la página
            window.location.reload(); // Esto recargará la página
        } catch (error) {
            console.error("Error al crear personaje:", error);
            setMensaje("Hubo un error al crear el personaje");
        }
    };

    return (
        <div className="crear-personaje">
            <h2>¡Crea tu propio personaje!</h2>
            {mensaje && <p>{mensaje}</p>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br />

                <label htmlFor="nation">Nación:</label>
                <select
                    id="nation"
                    value={nation}
                    onChange={(e) => setNation(e.target.value)}
                    required
                >
                    <option value="">Seleccionar Nación</option>
                    <option value="Mondstadt">Mondstadt</option>
                    <option value="Liyue">Liyue</option>
                    <option value="Sumeru">Sumeru</option>
                    <option value="Inazuma">Inazuma</option>
                    <option value="Fontaine">Fontaine</option>
                </select>
                <br />

                <label htmlFor="weapon">Arma:</label>
                <select
                    id="weapon"
                    value={weapon}
                    onChange={(e) => setWeapon(e.target.value)}
                    required
                >
                    <option value="">Seleccionar Arma</option>
                    <option value="Espada ligera">Espada ligera</option>
                    <option value="Arco">Arco</option>
                    <option value="Catalizador">Catalizador</option>
                    <option value="Mandoble">Mandoble</option>
                    <option value="Lanza">Lanza</option>
                </select>
                <br />

                <label htmlFor="element">Elemento:</label>
                <select
                    id="element"
                    value={element}
                    onChange={(e) => setElement(e.target.value)}
                    required
                >
                    <option value="">Seleccionar Elemento</option>
                    <option value="Anemo">Anemo</option>
                    <option value="Cryo">Cryo</option>
                    <option value="Dendro">Dendro</option>
                    <option value="Electro">Electro</option>
                    <option value="Geo">Geo</option>
                    <option value="Hydro">Hydro</option>
                    <option value="Pyro">Pyro</option>
                </select>
                <br />

                <label htmlFor="description">Descripción:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <br />

                <label htmlFor="image">Imagen:</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
                <br />

                <button type="submit">Crear Personaje</button>
            </form>
        </div>
    );
};

export default CrearPersonaje;
