import React from 'react';
import './elementos.css';
const ReactionDisplay = ({ reaction }) => {
  return (
    <div className="reaction-display">
      {reaction ? <p>{reaction.description}</p> : <p>Selecciona dos elementos para ver la reacción.</p>}
    </div>
  );
};

export default ReactionDisplay;
