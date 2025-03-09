import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface OnboardingProps {
  setUserData: (userData: { name: string; business: string; dni: string }) => void;
}

function Onboarding({ setUserData }: OnboardingProps) {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [dni, setDni] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && business && dni) {
      setUserData({ name, business, dni });
      navigate('/home');
    }
  };

  return (
    <div className="onboarding">
      <h2>Welcome! Please enter your details</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Business" value={business} onChange={(e) => setBusiness(e.target.value)} />
      <input type="text" placeholder="DNI" value={dni} onChange={(e) => setDni(e.target.value)} />
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
}

export default Onboarding;
