import type { Course } from "../data/courses.tsx";

interface Props {
  course: Course;
  onClick: () => void;
}

export function CourseCard({ course, onClick }: Props) {
  return (
    <div className="course-card" onClick={onClick}>
      <img src={course.image} alt={course.title} />

      <button className="favorite-btn">♡</button>

      <div className="course-card__content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <div className="course-card__footer">
          <span className="price">${course.price}</span>
          <button className="btn-primary">Order</button>
        </div>
      </div>
    </div>
  );
}