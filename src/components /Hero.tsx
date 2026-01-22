import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  const goToCocktails = () => {
    navigate("/cocktails"); // шлях до CocktailPage
  };

  return (
    <header className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/assets/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <h1>Cocktail Box Experience</h1>
        <h3>S w e e t. y u m m y. d e l i c i o u s.</h3>
        <p>Professional cocktails at your home</p>

        <button className="btn-primary" onClick={goToCocktails}>
          Choose a box
        </button>
      </div>
    </header>
  );
}