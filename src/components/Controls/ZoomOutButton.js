// ZoomOutButton.js
import React from 'react';
import { FaSearchMinus } from 'react-icons/fa';

const ZoomOutButton = ({ zoomOut }) => {
  return (
    <button onClick={zoomOut}>
      <FaSearchMinus />
    </button>
  );
};

export default ZoomOutButton;
