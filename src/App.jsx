import { useState } from "react";
import { SHOP_NAME, OWNER_EMAIL, INSTAGRAM } from "./config.js";
import { useCart } from "./useCart.js";
import Header from "./components/Header.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import OrderForm from "./components/OrderForm.jsx";

export default function App() {
  const { items, count, total, change } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const add = (id) => { change(id, 1); setCartOpen(true); };

  return (
    <>
      <Header count={count} onOpenCart={() => setCartOpen(true)} />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        total={total}
        change={change}
      />

      <main id="top">
        <section className="hero">
          <h1>用心包好每一束花</h1>
          <p>生日、婚礼、日常小确幸，都有手工花束陪你。</p>
          <a className="btn" href="#order">立即下单</a>
        </section>

        <ProductGrid onAdd={add} />

        <section id="about" className="section alt">
          <h2>关于我们</h2>
          <p className="narrow">
            你好，我是{SHOP_NAME}的花艺师。每一束花都是按订单现做，
            选用当季的本地鲜花。告诉我你的场合和喜好，我来为你搭配一束特别的花。
          </p>
        </section>

        <OrderForm items={items} total={total} />

        <section id="contact" className="section alt">
          <h2>联系我们</h2>
          <p>邮箱：<a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a></p>
          <p>Instagram：<a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer">{INSTAGRAM.handle}</a></p>
        </section>
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} {SHOP_NAME}</footer>
    </>
  );
}
