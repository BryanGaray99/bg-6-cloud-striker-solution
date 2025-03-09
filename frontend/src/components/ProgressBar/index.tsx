import React from "react";
import "./styles.css";

interface ProgressBarProps {
    name: string;
  score: number;    
}

const ProgressBar: React.FC<ProgressBarProps> = ({ score, name }) => {
  return (
    <div className="progress-container">
      <p className="progress-title">{name}</p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
