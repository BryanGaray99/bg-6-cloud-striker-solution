import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Radiography from './pages/Radiography';
import Improvements from './pages/Improvements';

function App() {
  const [userData, setUserData] = useState<{ name: string; business: string; dni: string } | null>(null);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {!userData ? (
            <Route path="/*" element={<Onboarding setUserData={setUserData} />} />
          ) : (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/radiography" element={<Radiography />} />
              <Route path="/improvements" element={<Improvements />} />
            </>
          )}
        </Routes>
        {userData && <Navbar />}
      </div>
    </Router>
  );
}

export default App;
