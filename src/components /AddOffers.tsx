import { Link } from "react-router-dom";

export function AddOffers() {
  return (
    <section id="courses" className="additional-products">
      <h2 className="section-title">Additional Offers</h2>

      <div className="products-grid">
        {/* Cocktail Courses */}
        <Link to="/courses" className="product-card">
          Cocktail Courses
        </Link>

        {/* Cocktail Equipment */}
        <div className="product-card">
          Cocktail Equipment
        </div>

        {/* Gift Certificates */}
        <div className="product-card">
          Gift Certificates
        </div>
      </div>
    </section>
  );
}