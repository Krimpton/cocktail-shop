import { Link, useNavigate, useLocation } from "react-router-dom";
import { Heart, ShoppingCart, User } from "lucide-react";

export function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (hash: string) => {
    // Якщо вже на головній сторінці
    if (location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Перехід на HomePage з hash
      navigate(`/#${hash}`);
    }
  };

  return (
    <nav className="main-nav">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">Cocktail <span>Box.</span></Link>
        </div>

        {/* Menu NUV */}
        <ul className="nav-links">
          <li>
            <button className="nav-link" onClick={() => handleNavClick("cocktails")}>
              Cocktails
            </button>
          </li>
          <li>
            <button className="nav-link" onClick={() => handleNavClick("sets")}>
              Additional Offers
            </button>
          </li>
          <li>
            <button className="nav-link" onClick={() => handleNavClick("contact")}>
              Contact
            </button>
          </li>
        </ul>

        {/* Icons */}
        <div className="nav-actions">
          <button className="nav-icon" title="Favorites">
            <Heart size={20} />
          </button>

          <button className="nav-icon" title="Cart">
            <ShoppingCart size={20} />
          </button>

          {/* <button className="nav-icon" title="Profile">
            <User size={20} />
          </button> */}

          {/* <button className="nav-icon" title="Change language">
            EN
          </button> */}
        </div>
      </div>
    </nav>
  );
}