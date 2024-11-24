// src/App.js
import React, { useState, useEffect } from 'react';
import ElementList from './ElementList';
import ReactionDisplay from './ReactionDisplay';
import './elementos.css'

const MezclaElement = () => {
  const [elements, setElements] = useState([]);
  const [reactions, setReactions] = useState([]);
  const [selectedElements, setSelectedElements] = useState([]);
  const [reaction, setReaction] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Elementos/elementos.json');
        const data = await response.json();
        setElements(data.elements);
        setReactions(data.reactions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelect = (element) => {
    if (selectedElements.length < 2) {
      setSelectedElements([...selectedElements, element]);
    }
  };

  useEffect(() => {
    if (selectedElements.length === 2) {
      const [e1, e2] = selectedElements;
      const foundReaction = reactions.find(
        (r) => (r.elements.includes(e1) && r.elements.includes(e2)) || (r.elements.includes(e2) && r.elements.includes(e1))
      );
      setReaction(foundReaction || null);
    }
  }, [selectedElements, reactions]);
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
