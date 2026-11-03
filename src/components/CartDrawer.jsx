import { useEffect } from "react";
import { money } from "../config.js";

export default function CartDrawer({ open, onClose, items, total, change }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      {open && <div className="overlay" onClick={onClose} />}
      <aside className={`cart ${open ? "open" : ""}`} aria-label="Shopping cart" aria-hidden={!open}>
        <div className="cart-head">
          <h2>Your Cart</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {items.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <ul className="cart-items">
            {items.map((i) => (
              <li className="cart-item" key={i.id}>
                <span className="ci-emoji">{i.emoji}</span>
                <div className="ci-info"><strong>{i.name}</strong><span>{money(i.price)}</span></div>
                <div className="qty">
                  <button onClick={() => change(i.id, -1)} aria-label={`Remove one ${i.name}`}>−</button>
                  <span>{i.qty}</span>
                  <button onClick={() => change(i.id, 1)} aria-label={`Add one ${i.name}`}>+</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-foot">
          <div className="cart-total"><span>Total</span><strong>${total}</strong></div>
          {items.length > 0 && <a href="#order" className="btn" onClick={onClose}>Checkout</a>}
        </div>
      </aside>
    </>
  );
}
