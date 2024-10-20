import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { FaPlay, FaPause, FaSearchPlus, FaSearchMinus, FaInfoCircle, FaShapes, FaRedo } from 'react-icons/fa'; // Import FaRedo for reset icon
import ReactModal from 'react-modal';
import RecordRTC from 'recordrtc';

const numRows = 50;
const numCols = 50;

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

const operations = [
  [0, 1], [0, -1], [1, -1], [1, 1], [1, 0], [-1, 0], [-1, 1], [-1, -1]
];

const countNeighbors = (grid, x, y) => {
  let neighbors = 0;
  operations.forEach(([dx, dy]) => {
    const newI = x + dx;
    const newJ = y + dy;
    if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
      neighbors += grid[newI][newJ];
    }
  });
  return neighbors;
};

const App = () => {
  const [grid, setGrid] = useState(() => generateEmptyGrid());
  const [running, setRunning] = useState(false);
  const [cellSize, setCellSize] = useState(20);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const runGame = useCallback(() => {
    setGrid(g => {
      return g.map((row, i) =>
        row.map((col, j) => {
          const neighbors = countNeighbors(g, i, j);
          if (col === 1 && (neighbors < 2 || neighbors > 3)) return 0;
          if (col === 0 && neighbors === 3) return 1;
          return col;
        })
      );
    });
  }, []);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(runGame, 100);
    return () => clearInterval(interval);
  }, [running, runGame]);

  const zoomIn = () => setCellSize(size => Math.min(size + 5, 50));
  const zoomOut = () => setCellSize(size => Math.max(size - 5, 10));

  // Reset function
  const resetGrid = () => {
    setGrid(generateEmptyGrid()); // Reset grid to an empty state
    setRunning(false);            // Stop the simulation if running
  };

  const commonPatterns = () => {
    const glider = [
      [1, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ];

    const newGrid = generateEmptyGrid();
    for (let i = 0; i < glider.length; i++) {
      for (let j = 0; j < glider[i].length; j++) {
        newGrid[Math.floor(numRows / 2) + i][Math.floor(numCols / 2) + j] = glider[i][j];
      }
    }
    setGrid(newGrid);
  };

  const saveVideo = () => {
    const canvas = document.getElementById('gameCanvas');
    const stream = canvas.captureStream();
    const recorder = new RecordRTC(stream, { type: 'video' });
    
    recorder.startRecording();
    setTimeout(() => {
      recorder.stopRecording(() => {
        let blob = recorder.getBlob();
        let url = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'game-of-life.mp4';
        a.click();
      });
    }, 5000);
  };

  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <button onClick={() => setRunning(!running)}>
        {running ? <FaPause /> : <FaPlay />}
      </button>
      <button onClick={zoomIn}>
        <FaSearchPlus />
      </button>
      <button onClick={zoomOut}>
        <FaSearchMinus />
      </button>
      <button onClick={resetGrid}>
        <FaRedo /> Reset
      </button>
      <button onClick={commonPatterns}>
        <FaShapes /> Patterns
      </button>
      <button onClick={() => setModalIsOpen(true)}>
        <FaInfoCircle /> Info
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
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
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </ReactModal>
      <button onClick={saveVideo}>Save Video</button>
      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, ${cellSize}px)`
      }}>
        {grid.map((rows, i) =>
          rows.map((col, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => {
                const newGrid = [...grid];
                newGrid[i][j] = grid[i][j] ? 0 : 1;
                setGrid(newGrid);
              }}
              style={{
                width: cellSize,
                height: cellSize,
                backgroundColor: grid[i][j] ? 'black' : undefined,
                border: 'solid 1px lightgray'
              }}
            />
          ))
        )}
      </div>
      <canvas id="gameCanvas" style={{ display: 'none' }} />
    </div>
  );
};

export default App;
