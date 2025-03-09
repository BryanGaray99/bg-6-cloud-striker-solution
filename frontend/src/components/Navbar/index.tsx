import { useNavigate } from 'react-router-dom';
import './styles.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <button onClick={() => navigate('/home')}>Home</button>
      <button onClick={() => navigate('/radiography')}>Radiography</button>
      <button onClick={() => navigate('/improvements')}>Improvements</button>
    </div>
  );
}

export default Navbar;
