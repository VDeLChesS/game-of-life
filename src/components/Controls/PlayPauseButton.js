// PlayPauseButton.js
import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const PlayPauseButton = ({ running, setRunning }) => {
  return (
    <button onClick={() => setRunning(!running)}>
      {running ? <FaPause /> : <FaPlay />}
    </button>
  );
};

export default PlayPauseButton;
