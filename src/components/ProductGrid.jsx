import { PRODUCTS, money } from "../config.js";

export default function ProductGrid({ onAdd }) {
  return (
    <section id="shop" className="section">
      <h2>Our Bouquets</h2>
      <div className="grid">
        {PRODUCTS.map((p) => (
          <article className="card" key={p.id}>
            <div className="emoji">{p.emoji}</div>
            <div className="body">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <span className="price">{money(p.price)}</span>
              <button className="btn" onClick={() => onAdd(p.id)}>
                {p.price ? "Add to cart" : "Request quote"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
