import type { Cocktail } from "../data/cocktails";
import { useShop } from "../data/shop-store";

interface Props {
  cocktail: Cocktail;
  onClick: () => void;
}

export function CocktailCard({ cocktail, onClick }: Props) {
  const { toggleFavorite, isFavorite, addToCart, getQty } = useShop();

  const id = String(cocktail.id); // ключ для store
  const fav = isFavorite(id);
  const qty = getQty(id);

  // Короткое описание (из массива строк)
  const shortDescription =
    cocktail.description.length > 0
      ? cocktail.description.join(", ").slice(0, 60) + "…"
      : "";

  return (
    <div
      className="course-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <img src={cocktail.image} alt={cocktail.name} />

      {/* Favorite */}
      <button
        className={`favorite-btn ${fav ? "active" : ""}`}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(id);
        }}
        aria-label={fav ? "Remove from favorites" : "Add to favorites"}
      >
        {fav ? "♥" : "♡"}
      </button>

      <div className="course-card__content">
        <hr />
        <h3>{cocktail.name}</h3>
        <p>{shortDescription}</p>

        <div className="course-card__footer">
          <span className="price">{cocktail.price}</span>

          <button
            className="btn-primary"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(id, 1);
            }}
          >
            {qty > 0 ? `In cart: ${qty}` : "Order"}
          </button>
        </div>
      </div>
    </div>
  );
}
