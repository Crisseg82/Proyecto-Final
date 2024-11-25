import React, { useState, useEffect } from 'react';
import axios from '../../api/axiosConfig';
import ElementList from './ElementList';
import ReactionDisplay from './ReactionDisplay';
import './elementos.css';

const MezclaElement = () => {
  const [elements, setElements] = useState([]);
  const [reactions, setReactions] = useState([]);
  const [selectedElements, setSelectedElements] = useState([]);
  const [reaction, setReaction] = useState(null);

  useEffect(() => {
    const fetchElements = async () => {
      try {
        const response = await axios.get('/elementos');
        setElements(response.data);
      } catch (error) {
        console.error('Error al obtener elementos:', error);
      }
    };

    const fetchReactions = async () => {
      try {
        const response = await axios.get('/reacciones');
        setReactions(response.data);
      } catch (error) {
        console.error('Error al obtener reacciones:', error);
      }
    };

    fetchElements();
    fetchReactions();
  }, []);

  const handleSelect = (element) => {
    if (selectedElements.length < 2) {
      setSelectedElements([...selectedElements, element]);
    }
  };

  useEffect(() => {
    const fetchReaction = async (e1, e2) => {
      try {
        const response = await axios.get(`/reacciones/${e1}/${e2}`);
        setReaction(response.data || null);
      } catch (error) {
        console.error('Error al buscar la reacción:', error);
      }
    };

    if (selectedElements.length === 2) {
      const [e1, e2] = selectedElements;
      fetchReaction(e1, e2);
    }
  }, [selectedElements]);

  const handleReset = () => {
    setSelectedElements([]);
    setReaction(null);
  };

  return (
    <div className="app">
      <h1>Reacciones Elementales</h1>
      <ElementList elements={elements} onSelect={handleSelect} />
      <ReactionDisplay reaction={reaction} />
      <button onClick={handleReset} className="reset-button">Resetear Selección</button>
    </div>
  );
};

export default MezclaElement;
