import { NavBar } from "../components /NavBar.tsx";
import { Hero } from "../components /Hero";
import { CocktailCarousel } from "../components /Carousel.tsx";
import { AddOffers } from "../components /AddOffers.tsx";
import { Contact } from "../components /Contact.tsx";
import { Footer } from "../components /Footer";

export function HomePage() {
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
