const reviews = [
  { text: "“A very stylish and delicious experience”", author: "Anna" },
  { text: "“A very stylish and delicious experience”", author: "Anna" },
  { text: "“A very stylish and delicious experience”", author: "Anna" },
  { text: "“A very stylish and delicious experience”", author: "Anna" },
];

export function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <h2 className="section-title">Reviews</h2>

      {reviews.map((r, i) => (
        <div className="reviews-container" key={i}>
          <div className="review-card">
            <p>{r.text}</p>
            <span>— {r.author}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
