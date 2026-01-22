import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";
import { ContactPage } from "./pages/ContactPage";
import { CocktailPage } from "./pages/CocktailPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cocktails" element={<CocktailPage />} />
    </Routes>
  );
}