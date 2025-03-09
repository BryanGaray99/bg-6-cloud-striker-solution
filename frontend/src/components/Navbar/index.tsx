import { useNavigate } from 'react-router-dom';
import './styles.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <button onClick={() => navigate('/radiography')}>Radiography</button>
      <button onClick={() => navigate('/tips')}>Tips</button>
      <button onClick={() => navigate('/tools')}>Tools</button>
      <button onClick={() => navigate('/expand')}>Expand</button>
      <button onClick={() => navigate('/profile')}>Profile</button>
    </div>
  );
}

export default Navbar;
