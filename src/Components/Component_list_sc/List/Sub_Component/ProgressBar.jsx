import React from 'react';

const ProgressBar = ({ progress }) => {
  
  const filledRectangles = Math.floor(progress / (100 / 12));
  const rectangles = Array.from({ length: 12 }, (_, index) => {
    const isFilled = index < filledRectangles;

    return (
      <div
        key={index}
        className={`rectangle-sc ${isFilled ? 'filled-sc' : 'empty-sc'}`}
      ></div>
    );
  });

  return (
    <div className="progress-bar-sc">
      {rectangles}
    </div>
  );
};

export default ProgressBar;
