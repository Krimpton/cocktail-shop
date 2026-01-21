import type { Course } from "../data/courses.tsx";   //"verbatimModuleSyntax": true -> type {}
import { useState } from "react";

interface Props {
  course: Course;
  onClose: () => void;
}

export function CourseModal({ course, onClose }: Props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <img src={course.image} alt={course.title} />

        <h2>{course.title}</h2>
        <p className="price">${course.price}</p>

        <div className="quantity">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>

        <div className="modal-actions">
          <button className="btn-primary">Add to Cart</button>
          <button className="favorite-btn active">♥</button>
        </div>

        <p className="modal-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}