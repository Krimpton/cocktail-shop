import type { Cocktail } from "../data/cocktails.tsx"; // type-only import
import { useState } from "react";

interface Props {
  cocktail: Cocktail;
  onClose: () => void;
}

export function CocktailModal({ cocktail, onClose }: Props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close" onClick={onClose}>✕</button>

        <img src={cocktail.image} alt={cocktail.name} />

        
        <h2>{cocktail.name}</h2>
        <p className="price">{cocktail.price}</p>

        <div className="quantity">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>

        <div className="modal-actions">
          <button className="btn-primary">Add to Cart</button>
          <button className="favorite-btn active">♥</button>
        </div>

        <ul className="modal-description">
          <p>One cocktail box holds:</p>
          {cocktail.description.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
          <p>Attached is a cocktail recipe with a QR code <br></br>to view the full video with explanations.</p>
        </ul>
      </div>
    </div>
  );
}