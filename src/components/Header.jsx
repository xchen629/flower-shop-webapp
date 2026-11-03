import { SHOP_NAME } from "../config.js";

export default function Header({ count, onOpenCart }) {
  return (
    <header className="site-header">
      <a href="#top" className="logo">🌸 {SHOP_NAME}</a>
      <nav>
        <a href="#shop">花束</a>
        <a href="#about">关于</a>
        <a href="#order">下单</a>
        <a href="#contact">联系</a>
        <button className="cart-toggle" onClick={onOpenCart} aria-label="打开购物车">
          🛒 <span>{count}</span>
        </button>
      </nav>
    </header>
  );
}
