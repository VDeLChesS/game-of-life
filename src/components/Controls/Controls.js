// Controls.js
import React from 'react';
import PlayPauseButton from './PlayPauseButton';
import ZoomInButton from './ZoomInButton';
import ZoomOutButton from './ZoomOutButton';
import ResetButton from './ResetButton';
import PatternsButton from './PatternsButton';
import InfoButton from './InfoButton';
import SaveButton from './SaveButton';

const Controls = ({
  running,
  setRunning,
  zoomIn,
  zoomOut,
  resetGrid,
  commonPatterns,
  openInfoModal,
  saveVideo
}) => {
  return (
    <div className="controls">
      <PlayPauseButton running={running} setRunning={setRunning} />
      <ZoomInButton zoomIn={zoomIn} />
      <ZoomOutButton zoomOut={zoomOut} />
      <ResetButton resetGrid={resetGrid} />
      <PatternsButton commonPatterns={commonPatterns} />
      <InfoButton openInfoModal={openInfoModal} />
      <SaveButton saveVideo={saveVideo} />
    </div>
  );
};

export default Controls;
