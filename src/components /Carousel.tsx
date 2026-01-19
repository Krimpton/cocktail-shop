import { useState } from "react";
import { cocktails } from "../data/cocktails";

type PosClass =
  | "pos-center"
  | "pos-left-1"
  | "pos-right-1"
  | "pos-left-2"
  | "pos-right-2"
  | "hidden";

function getPosClass(idx: number, active: number, total: number): PosClass {
  // diff in range [-(total-1) .. +(total-1)]
  let diff = idx - active;

  // normalize to shortest direction (circular)
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  if (diff === 0) return "pos-center";
  if (diff === -1) return "pos-left-1";
  if (diff === 1) return "pos-right-1";
  if (diff === -2) return "pos-left-2";
  if (diff === 2) return "pos-right-2";
  return "hidden";
}

export function CocktailCarousel() {
  const [active, setActive] = useState(0);
  const total = cocktails.length;

  const prev = () => setActive((v) => (v - 1 + total) % total);
  const next = () => setActive((v) => (v + 1) % total);

  if (total === 0) return null;

  return (
    <section className="carousel-section" id="cocktails">
      <h2 className="section-title">Our Cocktails</h2>

      <div className="carousel-wrapper">
        <button className="nav-btn" onClick={prev} type="button" aria-label="Previous">
          ‹
        </button>

        <div className="carousel">
          {cocktails.map((c, idx) => (
            <div
              key={c.id}
              className={`carousel-item ${getPosClass(idx, active, total)}`}
              onClick={() => setActive(idx)}
              role="button"
              tabIndex={0}
            >
              <img src={c.image} alt={c.name} />
              <h3>{c.name}</h3>
            </div>
          ))}
        </div>

        <button className="nav-btn" onClick={next} type="button" aria-label="Next">
          ›
        </button>
      </div>
    </section>
  );
}
