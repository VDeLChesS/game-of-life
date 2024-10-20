// PatternsButton.js
import React from 'react';
import { FaShapes } from 'react-icons/fa';

const PatternsButton = ({ commonPatterns }) => {
  return (
    <button onClick={commonPatterns}>
      <FaShapes /> Patterns
    </button>
  );
};

export default PatternsButton;