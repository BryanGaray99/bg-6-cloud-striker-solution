import { useLocation } from "react-router-dom";
import "./styles.css";

interface PageIndicatorProps {
  pymeName?: string;
}

function PageIndicator({ pymeName = "Empresa S.A" }: PageIndicatorProps) {
  const location = useLocation();

  const pageTitles: { [key: string]: string } = {
    "/radiography": "Radiography",
    "/tips": "Tips",
    "/tools": "Tools",
    "/expand": "Expand",
    "/profile": "Profile",
  };

  const currentTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <div className="page-indicator">
      <p className="small-text">{pymeName}</p>
      <h2 className="page-title">{currentTitle}</h2>
    </div>
  );
}

export default PageIndicator;
