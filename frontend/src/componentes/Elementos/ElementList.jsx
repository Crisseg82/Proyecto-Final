import React from 'react';
import './elementos.css';
const ElementList = ({ elements, onSelect }) => {
  return (
    <div className="element-list">
      {elements.map((element) => (
        <img
        key={element.name}
        src={`http://localhost:5000${element.image}`}
        alt={element.name}
        onClick={() => onSelect(element.name)}
        className="element-image"
      />
      
      ))}
    </div>
  );
};

export default ElementList;
