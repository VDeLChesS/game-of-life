// PatternSelectionModal.js
import React from 'react';

const patterns = [
    {
        name: "Block",
        pattern: [
            [1, 1],
            [1, 1]
        ],
    },
    {
        name: "Glider",
        pattern: [
            [1, 0, 0],
            [0, 1, 1],
            [1, 1, 0]
        ],
    },
    {
        name: "Beehive",
        pattern: [
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [0, 1, 1, 0]
        ],
    },
    {
        name: "Loaf",
        pattern: [
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [0, 1, 0, 1],
            [0, 0, 1, 0]
        ],
    },
    {
        name: "Boat",
        pattern: [
            [1, 1, 0],
            [1, 0, 1],
            [0, 1, 0]
        ],
    },
    {
        name: "Lightweight Spaceship",
        pattern: [
            [0, 1, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0]
        ],
    },
    {
        name: "Blinker",
        pattern: [
            [1, 1, 1]
        ],
    },
    {
        name: "Toad",
        pattern: [
            [0, 1, 1, 1],
            [1, 1, 1, 0]
        ],
    },
    {
        name: "Beacon",
        pattern: [
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 1, 1],
            [0, 0, 1, 1]
        ],
    },
    {
        name: "Pulsar",
        pattern: [
            [0, 0, 1, 1, 1, 0, 0],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [0, 0, 1, 1, 1, 0, 0],
        ],
    },
    {
        name: "Big Pulsar",
        pattern: [
            [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
            [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
            [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1]
        ],
    },
    {
        name: "Pentadecathlon",
        pattern: [
            [0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 1, 0]
        ],
    },
    {
        name: "Gosper Glider Gun",
        pattern: [
            [0, 0, 0, 0, 0, 0, 1, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 1, 1],
        ],
    },
    {
        name: "Diehard",
        pattern: [
            [0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1, 0]
        ],
    },
    {
        name: "Acorn",
        pattern: [
            [0, 1, 0],
            [0, 0, 1],
            [1, 1, 1, 0, 0, 0, 1]
        ],
    },
    {
        name: "R-pentomino",
        pattern: [
            [0, 1, 1],
            [1, 1, 0],
            [0, 1, 0]
        ],
    },
    {
        name: "Pentamino",
        pattern: [
            [0, 1, 1],
            [1, 1, 0],
            [0, 1, 0],
            [0, 0, 1]
        ],
    },
    {
        name: "Twin Bees (Oscillator)",
        pattern: [
            [0, 1, 0, 0, 0],
            [1, 0, 0, 1, 0],
            [0, 0, 0, 0, 1]
        ],
    },
    {
        name: "Pulsar Quadrant (Oscillator)",
        pattern: [
            [1, 1, 1, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 0, 1, 1, 1]
        ],
    },
    {
        name: "Glider Gun (Spaceship)",
        pattern: [
            [0, 1, 1, 1],
            [1, 1, 1, 0]
        ],
    },
    {
        name: "Beacon",
        pattern: [
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 1, 1],
            [0, 0, 1, 1]
        ],
    },
    {
        name: "Penta-decathlon",
        pattern: [
            [0, 1, 1, 0],
            [0, 1, 0, 1],
            [1, 1, 1, 0],
        ],
    },
    {
        name: "B-Heptomino",
        pattern: [
            [1, 1, 1],
            [0, 1, 0],
            [1, 0, 1]
        ],
    },
    {
        name: "Pi-Heptomino",
        pattern: [
            [1, 1, 0],
            [0, 1, 0],
            [1, 0, 0]
        ],
    },
    {
        name: "Figure Eight",
        pattern: [
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1]
        ],
    },
    {
        name: "Clock",
        pattern: [
            [0, 1, 1],
            [1, 0, 0]
        ],
    },
    {
        name: "Snake",
        pattern: [
            [1, 1, 0],
            [0, 1, 1]
        ],
    }
];

const PatternSelectionModal = ({ isOpen, closeModal, setGrid, numRows, numCols }) => {
  if (!isOpen) return null;

  const handlePatternClick = (pattern) => {
    const newGrid = Array.from({ length: numRows }, () =>
      Array.from({ length: numCols }, () => 0)
    );

    const startRow = Math.floor((numRows - pattern.length) / 2);
    const startCol = Math.floor((numCols - pattern[0].length) / 2);

    // Place the selected pattern in the middle of the grid
    for (let i = 0; i < pattern.length; i++) {
      for (let j = 0; j < pattern[i].length; j++) {
        newGrid[startRow + i][startCol + j] = pattern[i][j];
      }
    }

    setGrid(newGrid);
    closeModal(); // Close the modal after pattern selection
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select a Pattern</h2>
        <ul>
          {patterns.map((patternObj, index) => (
            <li key={index}>
              <button onClick={() => handlePatternClick(patternObj.pattern)}>
                {patternObj.name}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default PatternSelectionModal;
