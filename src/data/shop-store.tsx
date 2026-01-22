import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";

type CartItem = { id: string; qty: number };

type ShopState = {
  favorites: Record<string, boolean>;
  cart: Record<string, CartItem>;
};

type Action =
  | { type: "TOGGLE_FAVORITE"; id: string }
  | { type: "ADD_TO_CART"; id: string; qty?: number }
  | { type: "REMOVE_FROM_CART"; id: string }
  | { type: "INC_QTY"; id: string }
  | { type: "DEC_QTY"; id: string }
  | { type: "HYDRATE"; state: ShopState };

const STORAGE_KEY = "cocktail-shop-state-v1";

const initialState: ShopState = {
  favorites: {},
  cart: {},
};

function reducer(state: ShopState, action: Action): ShopState {
  switch (action.type) {
    case "HYDRATE":
      return action.state;

    case "TOGGLE_FAVORITE": {
      const next = { ...state.favorites, [action.id]: !state.favorites[action.id] };
      if (!next[action.id]) delete next[action.id];
      return { ...state, favorites: next };
    }

    case "ADD_TO_CART": {
      const existing = state.cart[action.id];
      const add = action.qty ?? 1;
      const qty = (existing?.qty ?? 0) + add;

      return {
        ...state,
        cart: { ...state.cart, [action.id]: { id: action.id, qty } },
      };
    }

    case "REMOVE_FROM_CART": {
      const next = { ...state.cart };
      delete next[action.id];
      return { ...state, cart: next };
    }

    case "INC_QTY": {
      const existing = state.cart[action.id] ?? { id: action.id, qty: 0 };
      return {
        ...state,
        cart: { ...state.cart, [action.id]: { id: action.id, qty: existing.qty + 1 } },
      };
    }

    case "DEC_QTY": {
      const existing = state.cart[action.id];
      if (!existing) return state;

      const nextQty = existing.qty - 1;
      if (nextQty <= 0) {
        const next = { ...state.cart };
        delete next[action.id];
        return { ...state, cart: next };
      }

      return {
        ...state,
        cart: { ...state.cart, [action.id]: { id: action.id, qty: nextQty } },
      };
    }

    default:
      return state;
  }
}

type ShopContextValue = {
  favorites: ShopState["favorites"];
  cart: ShopState["cart"];

  toggleFavorite: (id: number) => void;
  isFavorite: (id: string) => boolean;

  addToCart: (id: number, qty?: number) => void;
  removeFromCart: (id: string) => void;

  incQty: (id: number) => void;
  decQty: (id: number) => void;

  getQty: (id: string) => number;
  cartCount: number;
  favCount: number;
};

const ShopContext = createContext<ShopContextValue | null>(null);

function safeParse(raw: string | null): ShopState | null {
  if (!raw) return null;
  try {
    const s = JSON.parse(raw) as ShopState;
    if (!s || typeof s !== "object") return null;
    if (!s.cart || !s.favorites) return null;
    return s;
  } catch {
    return null;
  }
}

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const saved = safeParse(localStorage.getItem(STORAGE_KEY));
    if (saved) dispatch({ type: "HYDRATE", state: saved });
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo<ShopContextValue>(() => {
    const cartCount = Object.values(state.cart).reduce((sum, i) => sum + i.qty, 0);
    const favCount = Object.keys(state.favorites).length;

    return {
      favorites: state.favorites,
      cart: state.cart,

      toggleFavorite: (id) => dispatch({ type: "TOGGLE_FAVORITE", id }),
      isFavorite: (id) => Boolean(state.favorites[id]),

      addToCart: (id, qty) => dispatch({ type: "ADD_TO_CART", id, qty }),
      removeFromCart: (id) => dispatch({ type: "REMOVE_FROM_CART", id }),

      incQty: (id) => dispatch({ type: "INC_QTY", id }),
      decQty: (id) => dispatch({ type: "DEC_QTY", id }),

      getQty: (id) => state.cart[id]?.qty ?? 0,

      cartCount,
      favCount,
    };
  }, [state]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside <ShopProvider>");
  return ctx;
}
