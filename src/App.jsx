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
          <h1>Fresh flowers, made with care</h1>
          <p>Handcrafted bouquets for birthdays, weddings, and everyday moments.</p>
          <a className="btn" href="#order">Place an order</a>
        </section>

        <ProductGrid onAdd={add} />

        <section id="about" className="section alt">
          <h2>About</h2>
          <p className="narrow">
            Hi, I'm the florist behind {SHOP_NAME}. Every arrangement is made to order
            using seasonal flowers sourced from local growers. Tell me about the occasion and
            I'll put together something special.
          </p>
        </section>

        <OrderForm items={items} total={total} />

        <section id="contact" className="section alt">
          <h2>Contact</h2>
          <p>Email: <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a></p>
          <p>Instagram: <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer">{INSTAGRAM.handle}</a></p>
        </section>
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} {SHOP_NAME}</footer>
    </>
  );
}
