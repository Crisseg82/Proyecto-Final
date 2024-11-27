import React, { useState } from 'react';
import axios from '../../api/axiosConfig';

const CrearPersonaje = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    nacion: '',
    arma: '',
    elemento: '',
    descripcion: '',
  });
  const [imagen, setImagen] = useState(null);
  const [mensaje, setMensaje] = useState('');

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar subida de imagen
  const handleFileChange = (e) => {
    setImagen(e.target.files[0]);
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('nombre', formData.nombre);
    data.append('nacion', formData.nacion);
    data.append('arma', formData.arma);
    data.append('elemento', formData.elemento);
    data.append('descripcion', formData.descripcion);
    data.append('imagen', imagen);

    try {
      const response = await axios.post('api/personajes', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMensaje('Personaje creado exitosamente');
      setFormData({
        nombre: '',
        nacion: '',
        arma: '',
        elemento: '',
        descripcion: '',
      });
      setImagen(null);
    } catch (error) {
      console.error('Error al crear personaje:', error);
      setMensaje('Hubo un error al crear el personaje');
    }
  };

  return (
    <div className="crear-personaje">
      <h2>¡Crea tu propio personaje!</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label htmlFor="nacion">Nación:</label>
        <select
          id="nacion"
          name="nacion"
          value={formData.nacion}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una nación</option>
          <option value="Mondstadt">Mondstadt</option>
          <option value="Liyue">Liyue</option>
          <option value="Inazuma">Inazuma</option>
          <option value="Sumeru">Sumeru</option>
          <option value="Fontaine">Fontaine</option>
        </select>
        <br /><br />

        <label htmlFor="arma">Arma:</label>
        <select
          id="arma"
          name="arma"
          value={formData.arma}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un arma</option>
          <option value="Espada ligera">Espada ligera</option>
          <option value="Arco">Arco</option>
          <option value="Catalizador">Catalizador</option>
          <option value="Mandoble">Mandoble</option>
          <option value="Lanza">Lanza</option>
        </select>
        <br /><br />

        <label htmlFor="elemento">Elemento:</label>
        <select
          id="elemento"
          name="elemento"
          value={formData.elemento}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un elemento</option>
          <option value="Anemo">Anemo</option>
          <option value="Cryo">Cryo</option>
          <option value="Dendro">Dendro</option>
          <option value="Electro">Electro</option>
          <option value="Geo">Geo</option>
          <option value="Hydro">Hydro</option>
          <option value="Pyro">Pyro</option>
        </select>
        <br /><br />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          rows="4"
          cols="50"
          placeholder="Escribe una breve descripción del personaje..."
          value={formData.descripcion}
          onChange={handleChange}
          required
        ></textarea>
        <br /><br />

        <label htmlFor="imagen">Imagen:</label>
        <input
          type="file"
          id="imagen"
          name="imagen"
          accept=".jpg, .jpeg, .png"
          onChange={handleFileChange}
          required
        />
        <br /><br />

        <button type="submit">Crear Personaje</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default CrearPersonaje;
