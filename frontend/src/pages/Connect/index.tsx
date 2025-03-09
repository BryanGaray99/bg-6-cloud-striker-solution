import "./styles.css";
import { FaSearch } from "react-icons/fa";

const featuredBusinesses = ["Nombre Pyme A", "Nombre Pyme B", "Nombre Pyme C", "Nombre Pyme D"];

function Connect() {
  return (
    <div className="connect-container pages-container">
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <FaSearch className="search-icon" />
      </div>

      <div className="section">
        <p className="section-title">Destacado</p>
        <div className="business-grid">
          {featuredBusinesses.map((name, index) => (
            <div key={index} className="business-card">
              {name}
            </div>
          ))}
        </div>

        {/* "Quiero Estar Aquí" Button */}
        <button className="cta-button">QUIERO ESTAR AQUÍ</button>
      </div>

      {/* Categorías Section */}
      <div className="section">
        <p className="section-title">Categorías</p>
        <p className="category-name">Categoría A</p>
      </div>
    </div>
  );
}

export default Connect;
