import React from 'react';
import './elementos.css';
const ElementList = ({ elements, onSelect }) => {
  return (
    <div className="element-list">
      {elements.map((element) => (
        <img
        key={element.name}
        src={`https://proyecto-final-ejj7.onrender.com${element.image}`}
        alt={element.name}
        onClick={() => onSelect(element.name)}
        className="element-image"
      />
      
      ))}
    </div>
  );
};

export default ElementList;
