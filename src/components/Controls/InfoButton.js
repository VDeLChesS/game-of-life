// InfoButton.js
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const InfoButton = ({ openInfoModal }) => {
  return (
    <button onClick={openInfoModal}>
      <FaInfoCircle /> Info
    </button>
  );
};

export default InfoButton;
