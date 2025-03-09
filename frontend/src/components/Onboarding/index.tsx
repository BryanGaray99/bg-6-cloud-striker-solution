import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

interface OnboardingProps {
  setUserData: (userData: { name: string; business: string; dni: string }) => void;
}

function Onboarding({ setUserData }: OnboardingProps) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [dni, setDni] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 0 && name) setStep(1);
    else if (step === 1 && business) setStep(2);
    else if (step === 2 && dni) {
      setUserData({ name, business, dni });
      navigate("/radiography");
    }
  };

  return (
    <div className="onboarding">
      {step === 0 && (
        <div className="onboarding-step">
          <h2>Bienvenido</h2>
          <p>¿Cuál es tu nombre?</p>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleNext} disabled={!name}>
            Siguiente
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="onboarding-step">
          <h2>¡Genial, {name}!</h2>
          <p>¿Cuál es el nombre de tu empresa?</p>
          <input
            type="text"
            placeholder="Empresa"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          />
          <button onClick={handleNext} disabled={!business}>
            Siguiente
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="onboarding-step">
          <h2>Casi listo, {name}!</h2>
          <p>Introduce tu DNI</p>
          <input
            type="text"
            placeholder="DNI"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          <button onClick={handleNext} disabled={!dni}>
            Continuar
          </button>
        </div>
      )}
    </div>
  );
}

export default Onboarding;
