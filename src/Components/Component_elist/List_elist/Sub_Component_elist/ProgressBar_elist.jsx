import React from 'react';

const ProgressBar_elist = ({ progress }) => {
  
  const filledRectangles = Math.floor(progress / (100 / 12));
  const rectangles = Array.from({ length: 12 }, (_, index) => {
    const isFilled = index < filledRectangles;

    return (
      <div
        key={index}
        className={`rectangle-elist ${isFilled ? 'filled-elist' : 'empty-elist'}`}
      ></div>
    );
  });

  return (
    <div className="progress-bar-elist">
      {rectangles}
    </div>
  );
};

export default ProgressBar_elist;
