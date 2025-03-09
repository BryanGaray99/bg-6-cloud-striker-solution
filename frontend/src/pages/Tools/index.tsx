import "./styles.css";

const providers = [
  { name: "Contabilidad" },
  { name: "Marketing" },
  { name: "Digitalización" },
  { name: "Legal" },
];

function Tools() {
  return (
    <div className="tools-container">
      {/* Large Buttons */}
      <div className="large-buttons">
        <button className="large-button">Créditos</button>
        <button className="large-button">Peigo</button>
      </div>

      {/* Providers Section */}
      <div className="providers-section">
        <p className="providers-title">Providers</p>
        <div className="providers-grid">
          {providers.map((provider, index) => (
            <div key={index} className="provider-card">
              {provider.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tools;
