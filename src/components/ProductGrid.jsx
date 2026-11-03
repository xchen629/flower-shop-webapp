import { PRODUCTS, money } from "../config.js";

export default function ProductGrid({ onAdd }) {
  return (
    <section id="shop" className="section">
      <h2>我们的花束</h2>
      <div className="grid">
        {PRODUCTS.map((p) => (
          <article className="card" key={p.id}>
            {p.image ? (
              <img className="photo" src={p.image} alt={p.name} loading="lazy" />
            ) : (
              <div className="emoji">{p.emoji}</div>
            )}
            <div className="body">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <span className="price">{money(p.price)}</span>
              <button className="btn" onClick={() => onAdd(p.id)}>
                {p.price ? "加入购物车" : "咨询报价"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
