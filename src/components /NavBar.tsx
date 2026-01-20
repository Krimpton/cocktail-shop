import { Heart, ShoppingCart, User } from "lucide-react";

export function NavBar() {
  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home">Cocktail <span>Box.</span></a>
        </div>

        <ul className="nav-links">
          <li><a href="#cocktails">Cocktails</a></li>
          <li><a href="#sets">Sets</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button className="nav-icon" title="Favorites">
            <Heart size={20} />
          </button>

          <button className="nav-icon" title="Cart">
            <ShoppingCart size={20} />
          </button>

          <button className="nav-icon" title="Profile">
            <User size={20} />
          </button>

          {/* <button className="nav-icon" title="Change language">
            EN
          </button> */}
          
        </div>
      </div>
    </nav>
  );
}
