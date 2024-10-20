// ResetButton.js
import React from 'react';
import { FaRedo } from 'react-icons/fa';

const ResetButton = ({ resetGrid }) => {
  return (
    <button onClick={resetGrid}>
      <FaRedo /> Reset
    </button>
  );
};

export default ResetButton;
