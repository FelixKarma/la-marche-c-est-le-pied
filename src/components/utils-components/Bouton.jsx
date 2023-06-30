import React from 'react';

const Bouton = ({ className, text, disabled }) => {
  console.log(className);
  console.log(disabled);
    return (
        <button className={`btn ${className}`} disabled={disabled ? true : false}>
            {text}
        </button>
    );
};

export default Bouton;
