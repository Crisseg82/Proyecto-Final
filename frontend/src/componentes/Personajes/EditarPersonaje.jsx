import React, { useEffect, useState } from 'react';
import axios from '../../api/axiosConfig'; // Ajusta esta ruta según tu configuración
import { useParams, useNavigate } from 'react-router-dom';
import './Personajes.css'

const EditarPersonaje = () => {
  const { id } = useParams(); // Obtener el ID del personaje desde la URL
  const [personaje, setPersonaje] = useState({
    name: '',
    nation: '',
    weapon: '',
    element: '',
    description: '',
    image: null,
  });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  // Cargar los datos del personaje para editar
  useEffect(() => {
    const fetchPersonaje = async () => {
      try {
        const response = await axios.get(`/personajes/${id}`);
        setPersonaje(response.data);
      } catch (error) {
        console.error('Error al cargar el personaje:', error);
      }
    };
    fetchPersonaje();
  }, [id]);

  // Manejar el cambio de los campos de texto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonaje({ ...personaje, [name]: value });
  };

  // Manejar el cambio de la imagen
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Enviar los datos editados
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', personaje.name);
    formData.append('nation', personaje.nation);
    formData.append('weapon', personaje.weapon);
    formData.append('element', personaje.element);
    formData.append('description', personaje.description);
    if (file) {
      formData.append('image', file);
    }

    try {
      const response = await axios.put(`/personajes/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Personaje actualizado:', response.data);
      navigate('/personajes');
    } catch (error) {
      console.error('Error al actualizar el personaje:', error);
    }
  };

  return (
    <div id="editar-personaje">
      <h1>Editar Personaje</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={personaje.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Descripción:
          <textarea
            name="description"
            value={personaje.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Nación:
          <select
            name="nation"
            value={personaje.nation}
            onChange={handleChange}
          >
            <option value="Mondstadt">Mondstadt</option>
            <option value="Liyue">Liyue</option>
            <option value="Inazuma">Inazuma</option>
            <option value="Sumeru">Sumeru</option>
            <option value="Fontaine">Fontaine</option>
            {/* Agrega más naciones si es necesario */}
          </select>
        </label>

        <label>
          Arma:
          <select
            name="weapon"
            value={personaje.weapon}
            onChange={handleChange}
          >
            <option value="Espada ligera">Espada ligera</option>
            <option value="Espada pesada">Espada pesada</option>
            <option value="Arco">Arco</option>
            <option value="Lanza">Lanza</option>
            <option value="Catalizador">Catalizador</option>
          </select>
        </label>

        <label>
          Elemento:
          <select
            name="element"
            value={personaje.element}
            onChange={handleChange}
          >
            <option value="Pyro">Pyro</option>
            <option value="Hydro">Hydro</option>
            <option value="Anemo">Anemo</option>
            <option value="Geo">Geo</option>
            <option value="Electro">Electro</option>
            <option value="Dendro">Dendro</option>
          </select>
        </label>

        <label>
          Imagen:
          <input type="file" name="image" onChange={handleFileChange} />
        </label>

        <button type="submit">Actualizar Personaje</button>
      </form>
    </div>
  );
};

export default EditarPersonaje;
