import React from 'react';

const ProgressBarPEList = ({ progress }) => {
  
  const filledRectangles = Math.floor(progress / (100 / 12));
  const rectangles = Array.from({ length: 12 }, (_, index) => {
    const isFilled = index < filledRectangles;

    return (
      <div
        key={index}
        className={`rectangle-pe-list ${isFilled ? 'filled-pe-list' : 'empty-pe-list'}`}
      ></div>
    );
  });

  return (
    <div className="progress-bar-pe-list">
      {rectangles}
    </div>
  );
};

export default ProgressBarPEList;
