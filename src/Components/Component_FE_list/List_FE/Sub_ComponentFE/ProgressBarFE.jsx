import React from 'react';

const ProgressBarFE = ({ progress }) => {
  
  const filledRectangles = Math.floor(progress / (100 / 12));
  const rectangles = Array.from({ length: 12 }, (_, index) => {
    const isFilled = index < filledRectangles;

    return (
      <div
        key={index}
        className={`rectangle-fe-list ${isFilled ? 'filled-fe-list' : 'empty-fe-list'}`}
      ></div>
    );
  });

  return (
    <div className="progress-bar-fe-list">
      {rectangles}
    </div>
  );
};

export default ProgressBarFE;
