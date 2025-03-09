import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaLightbulb, FaHandshake, FaUser, FaCircleNotch } from "react-icons/fa";
import "./styles.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const handleClick = (path: string) => {
    setActive(path);
    navigate(path);
  };

  return (
    <div className="navbar">
      <button
        onClick={() => handleClick("/tips")}
        className={`nav-button ${active === "/tips" ? "active" : ""}`}
      >
        <FaLightbulb size={24} />
      </button>
      <button
        onClick={() => handleClick("/tools")}
        className={`nav-button ${active === "/tools" ? "active" : ""}`}
      >
        <FaHandshake size={24} />
      </button>

      {/* Center Floating Icon with Animation */}
      <button
        onClick={() => handleClick("/radiography")}
        className={`nav-button center-icon ${active === "/radiography" ? "active" : ""}`}
      >
        <FaCircleNotch size={36} />
      </button>

      <button
        onClick={() => handleClick("/profile")}
        className={`nav-button ${active === "/profile" ? "active" : ""}`}
      >
        <FaUser size={24} />
      </button>
      <button
        onClick={() => handleClick("/expand")}
        className={`nav-button ${active === "/expand" ? "active" : ""}`}
      >
        <FaUser size={24} />
      </button>
    </div>
  );
}

export default Navbar;
