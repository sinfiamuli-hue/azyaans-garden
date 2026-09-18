import { createContext, useContext, useEffect, useMemo, useState } from "react";

const BasketContext = createContext(null);
const STORAGE_KEY = "azyaans-garden-basket";

function readStoredBasket() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Only keep the minimal, non-sensitive shape we expect.
    return parsed.filter(
      (item) =>
        item &&
        typeof item.id === "string" &&
        typeof item.quantity === "number"
    );
  } catch {
    return [];
  }
}

export function BasketProvider({ children }) {
  const [items, setItems] = useState(() => readStoredBasket());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage unavailable (private browsing, etc). Basket still
      // works for the current session via React state.
    }
  }, [items]);

  function addItem(plant, quantity = 1) {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === plant.id);
      if (existing) {
        return prev.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: plant.id,
          name: plant.name,
          slug: plant.slug,
          price: plant.price,
          image: plant.image,
          quantity,
        },
      ];
    });
    setIsOpen(true);
  }

  function updateQuantity(id, quantity) {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function clearBasket() {
    setItems([]);
  }

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [items]
  );

  const value = {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clearBasket,
    itemCount,
    total,
    isOpen,
    setIsOpen,
  };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
}

export function useBasket() {
  const ctx = useContext(BasketContext);
  if (!ctx) throw new Error("useBasket must be used within a BasketProvider");
  return ctx;
}
