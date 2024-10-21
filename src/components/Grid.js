// Grid.js
import React from 'react';

const Grid = ({ grid, setGrid, cellSize, numCols }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${numCols}, ${cellSize}px)` }}>
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
              border: 'solid 1.2px white'
            }}
          />
        ))
      )}
    </div>
  );
};

export default Grid;