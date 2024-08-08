// ProgressBarPEList.js
import React from 'react';
import "./Progess_upstream.css" // Import CSS for styling

const ProgressBarupstream = ({ progress }) => {
  const totalBars = 12; // Number of bars in the progress bar
  const filledBars = Math.round((progress / 120) * totalBars);

  return (
    <div className="progress-bar-up-hm">
      {Array.from({ length: totalBars }).map((_, index) => (
        <div
          key={index}
          className={`rectangle-up-hm ${index < filledBars ? 'filled-up-hm' : 'empty-up-hm'}`}
        />
      ))}
    </div>
  );
};

export default ProgressBarupstream;
