// App.js
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Grid from './components/Grid';
import Controls from './components/Controls/Controls';
import PatternModal from './components/PatternModal';
import PatternSelectionModal from './components/PatternSelectionModal';
import RecordRTC from 'recordrtc';

const numRows = 70;
const numCols = 70;

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
  const [cellSize, setCellSize] = useState(25);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [patternsModalIsOpen, setPatternsModalIsOpen] = useState(false); // State for patterns modal


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

  const [speed, setSpeed] = useState(1000);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(runGame, speed);
    return () => clearInterval(interval);
  }, [running, runGame, speed]);

  const zoomIn = () => setCellSize(size => Math.min(size + 5, 60));
  const zoomOut = () => setCellSize(size => Math.max(size - 5, 10));

  const resetGrid = () => {
    setGrid(generateEmptyGrid());
    setRunning(false);
  };

  const openPatternsModal = () => {
    setPatternsModalIsOpen(true); // Open patterns modal when "Patterns" button is clicked
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
      <Controls
        running={running}
        setRunning={setRunning}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        resetGrid={resetGrid}
        commonPatterns={openPatternsModal}
        openInfoModal={() => setModalIsOpen(true)}
        saveVideo={saveVideo}
      />
      <div className="speed">
        <input type="range" min="100" max="2000" value={speed} onChange={(e) => setSpeed(e.target.value)} />
        <p>Speed: {speed}ms</p>
      </div>
      <Grid grid={grid} setGrid={setGrid} cellSize={cellSize} numCols={numCols} />
      <PatternModal isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} />
      <PatternSelectionModal
        isOpen={patternsModalIsOpen}
        closeModal={() => setPatternsModalIsOpen(false)}
        setGrid={setGrid}
        numRows={numRows}
        numCols={numCols}
      />
      <canvas id="gameCanvas" style={{ display: 'none' }} />
    </div>
  );
};

export default App;

