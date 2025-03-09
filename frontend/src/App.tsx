import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import Navbar from "./components/Navbar";
import PageIndicator from "./components/PageIndicator";
import Expand from "./pages/Expand";
import Radiography from "./pages/Radiography";
import Profile from "./pages/Profile";
import Tips from "./pages/Tips";
import Tools from "./pages/Tools";

function App() {
  const [userData, setUserData] = useState<{ name: string; business: string; dni: string } | null>(null);

  return (
    <Router>
      <div className="app-container">
        {userData && <PageIndicator pymeName={userData.business || "Empresa S.A"} />}
        <Routes>
          {!userData ? (
            <Route path="/*" element={<Onboarding setUserData={setUserData} />} />
          ) : (
            <>
              <Route path="/radiography" element={<Radiography />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/expand" element={<Expand />} />
              <Route path="/profile" element={<Profile />} />
            </>
          )}
        </Routes>
        {userData && <Navbar />}
      </div>
    </Router>
  );
}

export default App;
