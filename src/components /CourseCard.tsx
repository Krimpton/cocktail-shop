import type { Course } from "../data/courses";
import {useShop} from "../data/shop-store.tsx";

interface Props {
  course: Course;
  onClick: () => void;
}

export function CourseCard({ course, onClick }: Props) {
  const { toggleFavorite, isFavorite, addToCart, getQty } = useShop();

  const id = String(course.id); // ✅ ключевой фикс
  const fav = isFavorite(id);
  const qty = getQty(id);

  return (
    <div className="course-card" onClick={onClick} role="button" tabIndex={0}>
      <img src={course.image} alt={course.title} />

      <button
        className={`favorite-btn ${fav ? "active" : ""}`}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(id);
        }}
      >
        {fav ? "♥" : "♡"}
      </button>

      <div className="course-card__content">
        <hr />
        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <div className="course-card__footer">
          <span className="price">${course.price}</span>

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
