// ZoomInButton.js
import React from 'react';
import { FaSearchPlus } from 'react-icons/fa';

const ZoomInButton = ({ zoomIn }) => {
  return (
    <button onClick={zoomIn}>
      <FaSearchPlus />
    </button>
  );
};

export default ZoomInButton;
