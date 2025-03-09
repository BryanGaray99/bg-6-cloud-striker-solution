import React, { useEffect, useState } from "react";
import ScoreCard from "../../components/ScoreCard";

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
      <ScoreCard score={300} />
      <ScoreCard score={800} />
      <ScoreCard score={500} />
      <ScoreCard score={700} />
      <ScoreCard score={200} />
      <ScoreCard score={400} />
    </div>
  );
};

export default Radiography;
