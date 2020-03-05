import React from 'react';
import './image.css';

function Image() {
  return (
    <div className="image">
        <img src={ require('./header.png') } />
    </div>
  );
}

export default Image;