// ProgressBarPEList.js
import React from 'react';
import "./Progess.css" // Import CSS for styling

const ProgressBar = ({ progress }) => {
  const totalBars = 12; // Number of bars in the progress bar
  const filledBars = Math.round((progress / 120) * totalBars);

  return (
    <div className="progress-bar-fc-hm">
      {Array.from({ length: totalBars }).map((_, index) => (
        <div
          key={index}
          className={`rectangle-fc-hm ${index < filledBars ? 'filled-fc-hm' : 'empty-fc-hm'}`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
