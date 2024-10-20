// PatternModal.js
import React from 'react';
import ReactModal from 'react-modal';

const PatternModal = ({ isOpen, closeModal }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Game Info"
      ariaHideApp={false}
    >
      <h2>Conway's Game of Life</h2>
      <p>Rules of the Game:</p>
      <ul>
        <li>Any live cell with fewer than two live neighbors dies.</li>
        <li>Any live cell with two or three live neighbors survives.</li>
        <li>Any live cell with more than three live neighbors dies.</li>
        <li>Any dead cell with exactly three live neighbors becomes a live cell.</li>
      </ul>
      <p>For more details, check these YouTube videos:</p>
      <ul>
        <li><a href="https://youtu.be/HeQX2HjkcNo" target="_blank" rel="noopener noreferrer">Conway's Game of Life - Computerphile</a></li>
        <li><a href="https://youtu.be/DvlyzDZDEq4" target="_blank" rel="noopener noreferrer">John Conway - Life without death</a></li>
      </ul>
      <button onClick={closeModal}>Close</button>
    </ReactModal>
  );
};

export default PatternModal;
