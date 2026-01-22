import { Link, useNavigate, useLocation } from "react-router-dom";
import { Heart, ShoppingCart, Plus, Minus, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { cocktails } from "../data/cocktails";
import { courses } from "../data/courses";
import {useShop} from "../data/shop-store.tsx";

export function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    cart,
    favorites,
    cartCount,
    favCount,
    incQty,
    decQty,
    addToCart,
    removeFromCart,
    toggleFavorite,
  } = useShop();

  const [openCart, setOpenCart] = useState(false);
  const [openFav, setOpenFav] = useState(false);

  const cartRef = useRef<HTMLDivElement | null>(null);
  const favRef = useRef<HTMLDivElement | null>(null);

  // close dropdowns on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;

      if (openCart && cartRef.current && !cartRef.current.contains(target)) {
        setOpenCart(false);
      }

      if (openFav && favRef.current && !favRef.current.contains(target)) {
        setOpenFav(false);
      }
    }

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [openCart, openFav]);

  const handleNavClick = (hash: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${hash}`);
    }
  };

  // catalog: key MUST be string
  const catalog = useMemo(() => {
    const map = new Map<string, { title: string; image: string; price: number }>();

    // cocktails already have string ids
    cocktails.forEach((c) => {
      const priceNum =
        typeof c.price === "string"
          ? Number(c.price.replace("€", "").trim().replace(",", "."))
          : Number((c as any).price ?? 0);

      map.set(String(c.id), {
        title: c.name,
        image: c.image,
        price: Number.isFinite(priceNum) ? priceNum : 0,
      });
    });

    // courses have number ids -> convert to string
    courses.forEach((p) => {
      map.set(String(p.id), {
        title: p.title,
        image: p.image,
        price: Number(p.price ?? 0),
      });
    });

    return map;
  }, []);

  // cart
  const cartItems = Object.values(cart);
  const subtotal = cartItems.reduce((sum, it) => {
    const product = catalog.get(it.id);
    return sum + (product?.price ?? 0) * it.qty;
  }, 0);

  // favorites
  const favoriteIds = Object.keys(favorites);
  const favoriteItems = favoriteIds
    .map((id) => ({ id, p: catalog.get(id) }))
    .filter((x): x is { id: string; p: { title: string; image: string; price: number } } => Boolean(x.p));

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            Cocktail <span>Box.</span>
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <button className="nav-link" onClick={() => handleNavClick("cocktails")} type="button">
              Cocktails
            </button>
          </li>
          <li>
            <button className="nav-link" onClick={() => handleNavClick("sets")} type="button">
              Additional Offers
            </button>
          </li>
          <li>
            <button className="nav-link" onClick={() => handleNavClick("contact")} type="button">
              Contact
            </button>
          </li>
        </ul>

        <div className="nav-actions">
          {/* Favorites */}
          <div className="nav-dd" ref={favRef}>
            <button
              className="nav-icon"
              title="Favorites"
              type="button"
              onClick={() => setOpenFav((v) => !v)}
              aria-expanded={openFav}
              aria-haspopup="menu"
            >
              <Heart size={20} />
              {favCount > 0 && <span className="badge">{favCount}</span>}
            </button>

            {openFav && (
              <div className="fav-dropdown" role="menu">
                <div className="fav-dropdown__header">
                  <strong>Favorites</strong>
                  <button className="icon-btn" type="button" onClick={() => setOpenFav(false)} aria-label="Close favorites">
                    <X size={18} />
                  </button>
                </div>

                {favoriteItems.length === 0 ? (
                  <div className="fav-empty">No favorites yet</div>
                ) : (
                  <div className="fav-list">
                    {favoriteItems.map(({ id, p }) => (
                      <div className="fav-item" key={id}>
                        <div className="fav-item__title">{p.title}</div>

                        <div className="fav-item__actions">
                          <button className="fav-remove" type="button" onClick={() => toggleFavorite(id)}>
                            Remove
                          </button>

                          <button className="fav-add" type="button" onClick={() => addToCart(id, 1)}>
                            Add
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cart */}
          <div className="nav-dd" ref={cartRef}>
            <button
              className="nav-icon"
              title="Cart"
              type="button"
              onClick={() => setOpenCart((v) => !v)}
              aria-expanded={openCart}
              aria-haspopup="menu"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </button>

            {openCart && (
              <div className="cart-dropdown" role="menu">
                <div className="cart-dropdown__header">
                  <strong>Cart</strong>
                  <button className="icon-btn" type="button" onClick={() => setOpenCart(false)} aria-label="Close cart">
                    <X size={18} />
                  </button>
                </div>

                {cartItems.length === 0 ? (
                  <div className="cart-empty">Cart is empty</div>
                ) : (
                  <>
                    <div className="cart-list">
                      {cartItems.map((it) => {
                        const p = catalog.get(it.id);
                        if (!p) return null;

                        const line = p.price * it.qty;

                        return (
                          <div className="cart-item" key={it.id}>
                            <img className="cart-item__img" src={p.image} alt={p.title} />

                            <div className="cart-item__info">
                              <div className="cart-item__title">{p.title}</div>

                              <div className="cart-item__meta">
                                <span>{p.price.toFixed(2)} €</span>
                                <span>·</span>
                                <strong>{line.toFixed(2)} €</strong>
                              </div>

                              <div className="cart-item__qty">
                                <button className="qty-btn" type="button" onClick={() => decQty(it.id)} aria-label="Decrease">
                                  <Minus size={16} />
                                </button>

                                <span className="qty-value">{it.qty}</span>

                                <button className="qty-btn" type="button" onClick={() => incQty(it.id)} aria-label="Increase">
                                  <Plus size={16} />
                                </button>

                                <button className="remove-btn" type="button" onClick={() => removeFromCart(it.id)} aria-label="Remove item">
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="cart-dropdown__footer">
                      <div className="cart-subtotal">
                        <span>Subtotal</span>
                        <strong>{subtotal.toFixed(2)} €</strong>
                      </div>

                      <button className="btn-primary cart-checkout" type="button" onClick={() => setOpenCart(false)}>
                        Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
