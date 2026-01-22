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
    if (!location.hash) return;

    const id = location.hash.slice(1);
    const el = document.getElementById(id);

    // Если элемент уже есть — скроллим сразу
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Если элемента ещё нет — пробуем после рендера
    const t = window.setTimeout(() => {
      const el2 = document.getElementById(id);
      if (el2) el2.scrollIntoView({ behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(t);
  }, [location.hash]);

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
