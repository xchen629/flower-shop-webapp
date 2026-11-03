import { SHOP_NAME } from "../config.js";

export default function Header({ count, onOpenCart }) {
  return (
    <header className="site-header">
      <a href="#top" className="logo">🌸 {SHOP_NAME}</a>
      <nav>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#order">Order</a>
        <a href="#contact">Contact</a>
        <button className="cart-toggle" onClick={onOpenCart} aria-label="Open cart">
          🛒 <span>{count}</span>
        </button>
      </nav>
    </header>
  );
}
