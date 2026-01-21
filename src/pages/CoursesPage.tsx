import { useState } from "react";
import { courses } from "../data/courses";
import type { Course } from "../data/courses";
import { CourseCard } from "../components /CourseCard";
import { CourseModal } from "../components /CourseModal";
import { NavBar } from "../components /NavBar";
import { Footer } from "../components /Footer";

export function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <>
      <NavBar />

      <section className="courses-page">
        <h2 className="section-title">Our Courses</h2>

        <div className="courses-grid">
          {courses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => setSelectedCourse(course)}
            />
          ))}
        </div>
      </section>

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}

      <Footer />
    </>
  );
}