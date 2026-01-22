import type { Cocktail } from "../data/cocktails.tsx";

interface Props {
  cocktail: Cocktail;
  onClick: () => void;
}

export function CocktailCard({ cocktail, onClick }: Props) {
  return (
    <div className="course-card" onClick={onClick}>
      <img src={cocktail.image} alt={cocktail.name} />

      {/* <button className="favorite-btn">♡</button> */}

      <div className="course-card__content">
        <hr />
        <h3>{cocktail.name}</h3>
        <p>{cocktail.description.join(", ").slice(0, 60)}...</p> {/* короткий опис */}
        <div className="course-card__footer">
          <span className="price">{cocktail.price}</span>
          <button className="btn-primary">Order</button>
        </div>
      </div>
    </div>
  );
}