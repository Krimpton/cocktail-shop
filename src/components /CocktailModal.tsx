import type { Cocktail } from "../data/cocktails";
import { useShop } from "../data/shop-store";

interface Props {
  cocktail: Cocktail;
  onClose: () => void;
}

export function CocktailModal({ cocktail, onClose }: Props) {
  const { getQty, addToCart, incQty, decQty, isFavorite } = useShop();

  const id = String(cocktail.id); // на всякий: в store id строкой
  const qtyInCart = getQty(id);
  const quantity = qtyInCart > 0 ? qtyInCart : 1;

  const fav = isFavorite(id);

  // Цена: если у тебя в коктейлях price строкой "29,99 €" — посчитаем число
  const unitPrice =
    typeof cocktail.price === "string"
      ? Number(cocktail.price.replace("€", "").trim().replace(",", "."))
      : Number((cocktail as any).price ?? 0);

  const total = (Number.isFinite(unitPrice) ? unitPrice : 0) * quantity;

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} type="button">
          ✕
        </button>

        <img src={cocktail.image} alt={cocktail.name} />

        <h2>{cocktail.name}</h2>

        <p className="price">
          {typeof cocktail.price === "string" ? (
            <>
              {cocktail.price} <span style={{ opacity: 0.7 }}>·</span>{" "}
              <strong>{total.toFixed(2)} €</strong>
            </>
          ) : (
            <>
              {unitPrice.toFixed(2)} € <span style={{ opacity: 0.7 }}>·</span>{" "}
              <strong>{total.toFixed(2)} €</strong>
            </>
          )}
        </p>

        <div className="quantity">
          <button
            type="button"
            onClick={() => {
              if (qtyInCart > 0) decQty(id);
            }}
          >
            −
          </button>

          <span>{quantity}</span>

          <button
            type="button"
            onClick={() => {
              if (qtyInCart === 0) addToCart(id, 1);
              else incQty(id);
            }}
          >
            +
          </button>
        </div>

        <div className="modal-actions">
          <button className="btn-primary" type="button" onClick={() => addToCart(id, 1)}>
            Add to Cart
          </button>

          {/*<button*/}
          {/*  className={`favorite-btn ${fav ? "active" : ""}`}*/}
          {/*  type="button"*/}
          {/*  onClick={() => toggleFavorite(id)}*/}
          {/*  aria-label={fav ? "Remove from favorites" : "Add to favorites"}*/}
          {/*>*/}
          {/*  ♥*/}
          {/*</button>*/}
        </div>

        <ul className="modal-description">
          <p>One cocktail box holds:</p>

          {cocktail.description.map((line, index) => (
            <li key={index}>{line}</li>
          ))}

          <p>
            Attached is a cocktail recipe with a QR code <br />
            to view the full video with explanations.
          </p>
        </ul>
      </div>
    </div>
  );
}
