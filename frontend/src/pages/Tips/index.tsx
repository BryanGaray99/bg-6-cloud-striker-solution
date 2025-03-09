import { useState } from "react";
import "./styles.css";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videoData = [
  { id: 1, title: "Título video #1" },
  { id: 2, title: "Título video #2" },
  { id: 3, title: "Título video #3" },
];

const articles = [
  { title: "Título artículo #1", link: "http://noticia1.com" },
  { title: "Título artículo #2", link: "http://noticia2.com" },
  { title: "Título artículo #3", link: "http://noticia3.com" },
];

function Tips() {
  const [category, setCategory] = useState("Recomendado");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videoData.length) % videoData.length);
  };

  return (
    <div className="tips-container">
      {/* Dropdown Menu */}
      <select className="dropdown" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Recomendado">Recomendado</option>
        <option value="Popular">Popular</option>
        <option value="Nuevos">Nuevos</option>
      </select>

      {/* Video Carousel with State */}
      <div className="video-carousel">
        <button className="nav-button left" onClick={handlePrev}>
          <FaChevronLeft />
        </button>

        <div className="video-card">
          <p className="video-title">{videoData[currentIndex].title}</p>
          <div className="play-button">
            <FaPlay size={24} />
          </div>
        </div>

        <button className="nav-button right" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>

      {/* Articles List */}
      <div className="articles">
        {articles.map((article, index) => (
          <div key={index} className="article-item">
            <p>{article.title}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              {article.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tips;
