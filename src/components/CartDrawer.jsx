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
      <aside className={`cart ${open ? "open" : ""}`} aria-label="购物车" aria-hidden={!open}>
        <div className="cart-head">
          <h2>购物车</h2>
          <button className="icon-btn" onClick={onClose} aria-label="关闭购物车">✕</button>
        </div>

        {items.length === 0 ? (
          <p className="cart-empty">购物车是空的。</p>
        ) : (
          <ul className="cart-items">
            {items.map((i) => (
              <li className="cart-item" key={i.id}>
                {i.image ? (
                  <img className="ci-photo" src={i.image} alt="" />
                ) : (
                  <span className="ci-emoji">{i.emoji}</span>
                )}
                <div className="ci-info"><strong>{i.name}</strong><span>{money(i.price)}</span></div>
                <div className="qty">
                  <button onClick={() => change(i.id, -1)} aria-label={`减少一份${i.name}`}>−</button>
                  <span>{i.qty}</span>
                  <button onClick={() => change(i.id, 1)} aria-label={`增加一份${i.name}`}>+</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-foot">
          <div className="cart-total"><span>合计</span><strong>${total}</strong></div>
          {items.length > 0 && <a href="#order" className="btn" onClick={onClose}>去结算</a>}
        </div>
      </aside>
    </>
  );
}
