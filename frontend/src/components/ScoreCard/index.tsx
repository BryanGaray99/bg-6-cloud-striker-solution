import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./styles.css";

interface ScoreCardProps {
  score: number;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ score }) => {
  const percentage = (score / 1000) * 100;

  const getColor = (score: number) => {
    if (score <= 300) return "#ff3b30";
    if (score <= 700) return "#ffcc00";
    return "#34c759";
  };

  return (
    <div className="score-card">
      <div className="score-circle">
        <CircularProgressbar
          value={percentage}
          text={`${score}`}
          styles={buildStyles({
            textColor: getColor(score),
            pathColor: getColor(score),
            trailColor: "#E0E0E0",
            textSize: "14px",
          })}
        />
      </div>
      <p className="status" style={{ color: getColor(score) }}>
        {score >= 701 ? "Excelente" : score >= 301 ? "Aceptable" : "Bajo"}
      </p>
      <p className="source">Obtenido de Equifax</p>
    </div>
  );
};

export default ScoreCard;
