import React from 'react';

const ProgressBarMC = ({ progress }) => {
  
  const filledRectangles = Math.floor(progress / (100 / 12));
  const rectangles = Array.from({ length: 12 }, (_, index) => {
    const isFilled = index < filledRectangles;

    return (
      <div
        key={index}
        className={`rectangle-mc-list ${isFilled ? 'filled-mc-list' : 'empty-mc-list'}`}
      ></div>
    );
  });

  return (
    <div className="progress-bar-mc-list">
      {rectangles}
    </div>
  );
};

export default ProgressBarMC;
