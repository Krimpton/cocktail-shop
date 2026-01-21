import { NavBar } from "../components /NavBar.tsx";
import { Contact } from "../components /Contact";
import { Footer } from "../components /Footer";

export function ContactPage() {
  return (
    <>
      <NavBar />

      <section id="contact-page">
        <Contact />
      </section>

      <Footer />
    </>
  );
}