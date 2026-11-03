import { useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "./config.js";

// Cart state is { productId: qty }, persisted to localStorage.
export function useCart() {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("cart")) || {}; } catch { return {}; }
  });

  useEffect(() => {
    try { localStorage.setItem("cart", JSON.stringify(cart)); } catch { /* ignore */ }
  }, [cart]);

  const change = (id, delta) =>
    setCart((c) => {
      const qty = Math.max(0, (c[id] || 0) + delta);
      const next = { ...c };
      if (qty) next[id] = qty; else delete next[id];
      return next;
    });

  const items = useMemo(
    () => PRODUCTS.filter((p) => cart[p.id] > 0).map((p) => ({ ...p, qty: cart[p.id] })),
    [cart]
  );
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return { items, count, total, change };
}
