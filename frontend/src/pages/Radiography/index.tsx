import React, { useEffect, useState } from "react";
import ScoreCard from "../../components/ScoreCard";
import ProgressBar from "../../components/ProgressBar";

const Radiography: React.FC = () => {
  const [name, setName] = useState("Guest");
  const [business, setBusiness] = useState("Not set");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedBusiness = localStorage.getItem("business");

    if (savedName) setName(savedName);
    if (savedBusiness) setBusiness(savedBusiness);
  }, []);

  return (
    <div className="radiography-container">
      <h2>Welcome, {name}!</h2>
      <h3>Your Business: {business}</h3>
      <ScoreCard score={100} />
      <ProgressBar name={'Indice de estabilidad crediticia'} score={80} />
      <ProgressBar name={'Velocidad de crecimiento'} score={60} />
    </div>
  );
};

export default Radiography;
