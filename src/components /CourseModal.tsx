import type { Course } from "../data/courses";
import {useShop} from "../data/shop-store.tsx"; // лучше без .tsx в импорте

interface Props {
  course: Course;
  onClose: () => void;
}

export function CourseModal({ course, onClose }: Props) {
  const { getQty, addToCart, incQty, decQty, toggleFavorite, isFavorite } = useShop();

  // qty в глобальном store (если ещё нет в корзине — показываем 1)
  const qtyInCart = getQty(course.id);
  const quantity = qtyInCart > 0 ? qtyInCart : 1;

  const fav = isFavorite(course.id);

  // Цена: у тебя сейчас "$${course.price}" — предполагаю number
  const total = Number(course.price) * quantity;

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} type="button">
          ✕
        </button>

        <img src={course.image} alt={course.title} />

        <h2>{course.title}</h2>

        <p className="price">
          ${course.price} <span style={{ opacity: 0.7 }}>·</span>{" "}
          <strong>${total.toFixed(2)}</strong>
        </p>

        <div className="quantity">
          <button
            type="button"
            onClick={() => {
              // уменьшаем глобально; если товара ещё нет — просто держим 1
              if (qtyInCart > 0) decQty(course.id);
            }}
          >
            −
          </button>

          <span>{quantity}</span>

          <button
            type="button"
            onClick={() => {
              // если товара ещё нет в корзине — добавляем 1, иначе увеличиваем
              if (qtyInCart === 0) addToCart(course.id, 1);
              else incQty(course.id);
            }}
          >
            +
          </button>
        </div>

        <div className="modal-actions">
          <button
            className="btn-primary"
            type="button"
            onClick={() => addToCart(course.id, 1)}
          >
            Add to Cart
          </button>

          <button
            className={`favorite-btn ${fav ? "active" : ""}`}
            type="button"
            onClick={() => toggleFavorite(course.id)}
            aria-label={fav ? "Remove from favorites" : "Add to favorites"}
          >
            ♥
          </button>
        </div>

        <p className="modal-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
