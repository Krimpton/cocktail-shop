import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { NavBar } from "../components /NavBar.tsx";
import { Hero } from "../components /Hero";
import { CocktailCarousel } from "../components /Carousel.tsx";
import { AddOffers } from "../components /AddOffers.tsx";
import { Contact } from "../components /Contact.tsx";
import { Footer } from "../components /Footer";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return; //Skip scrolling if URL doesn’t contain a #anchor

    const id = location.hash.substring(1);

    // Check for element every 20ms until it exists, then scroll smoothly
    const interval = setInterval(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" }); //Scroll the page to this element with a smooth animation
        clearInterval(interval);
      }
    }, 20); //20ms

    return () => clearInterval(interval);
  }, [location]);

  return (
    <>
      <NavBar />
      <Hero />

      <section id="cocktails">
        <CocktailCarousel />
      </section>

      <section id="sets">
        <AddOffers />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}