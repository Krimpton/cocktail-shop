import { useState } from "react";
import { cocktails } from "../data/cocktails";
import type { Cocktail } from "../data/cocktails";
import { CocktailCard } from "../components /CocktailCard";
import { CocktailModal } from "../components /CocktailModal";
import { NavBar } from "../components /NavBar";
import { Footer } from "../components /Footer";

export function CocktailPage() {
  const [selectedCocktail, setSelectedCocktail] = useState<Cocktail | null>(null);

  return (
    <>
      <NavBar />

      <section className="courses-page">
        <h2 className="section-title">Our Cocktail Boxes</h2>

        <div className="courses-grid">
          {cocktails.map(cocktail => (
            <CocktailCard
              key={cocktail.id}
              cocktail={cocktail}
              onClick={() => setSelectedCocktail(cocktail)}
            />
          ))}
        </div>
      </section>

      {selectedCocktail && (
        <CocktailModal
          cocktail={selectedCocktail}
          onClose={() => setSelectedCocktail(null)}
        />
      )}

      <Footer />
    </>
  );
}