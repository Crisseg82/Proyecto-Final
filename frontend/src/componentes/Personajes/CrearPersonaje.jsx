import React, { useState } from "react";
import axios from "axios";

const CrearPersonaje = () => {
    const [name, setName] = useState("");
    const [nation, setNation] = useState("");
    const [weapon, setWeapon] = useState("");
    const [element, setElement] = useState("");
    const [image, setImage] = useState(null);
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Crear un objeto FormData para enviar los datos
        const formData = new FormData();
        formData.append("name", name);
        formData.append("nation", nation);
        formData.append("weapon", weapon);
        formData.append("element", element);
        formData.append("image", image);

        try {
            // Hacer una solicitud POST al servidor
            const response = await axios.post(
                "http://localhost:5000/api/personajes",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            setMensaje("Personaje creado exitosamente");
            console.log("Personaje creado:", response.data);

            // Limpiar el formulario después de enviar
            setName("");
            setNation("");
            setWeapon("");
            setElement("");
            setImage("");
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
                <input
                    type="text"
                    id="nation"
                    value={nation}
                    onChange={(e) => setNation(e.target.value)}
                    required
                />
                <br />

                <label htmlFor="weapon">Arma:</label>
                <input
                    type="text"
                    id="weapon"
                    value={weapon}
                    onChange={(e) => setWeapon(e.target.value)}
                    required
                />
                <br />

                <label htmlFor="element">Elemento:</label>
                <input
                    type="text"
                    id="element"
                    value={element}
                    onChange={(e) => setElement(e.target.value)}
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
