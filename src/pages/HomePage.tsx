import { useState } from "react";

/**
 * HomePage — это React-компонент (страница)
 * Он:
 * 1) хранит данные (state)
 * 2) реагирует на действия пользователя
 * 3) возвращает HTML (JSX)
 */
export function HomePage() {
  // STATE — данные, которые могут меняться
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Cocktail Shop</h1>

      {/* INPUT — управляемый компонент */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type something..."
      />

      <p>You typed: <b>{search}</b></p>

      {/* BUTTON — меняет state */}
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}
