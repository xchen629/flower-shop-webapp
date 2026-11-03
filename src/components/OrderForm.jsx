import { OWNER_EMAIL, money } from "../config.js";

export default function OrderForm({ items, total }) {
  const onSubmit = (e) => {
    e.preventDefault();
    if (!items.length) {
      alert("Please add at least one item to your cart first.");
      return;
    }
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Date: ${f.get("date")}`,
      "",
      "Items:",
      ...items.map((i) => `- ${i.qty} x ${i.name} (${money(i.price)})`),
      `Total: $${total}`,
      "",
      `Notes: ${f.get("notes") || "-"}`,
    ].join("\n");
    // Opens the customer's email app with the order filled in.
    window.location.href =
      `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent("Flower order request")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="order" className="section">
      <h2>Place an Order</h2>
      <form className="form" onSubmit={onSubmit}>
        <label>Name <input name="name" required /></label>
        <label>Email <input name="email" type="email" required /></label>

        <div className="order-summary">
          <strong>Your items</strong>
          <ul>
            {items.length === 0 && <li>Your cart is empty — add a bouquet above.</li>}
            {items.map((i) => (
              <li key={i.id}>{i.qty} × {i.name} — {i.price ? `$${i.price * i.qty}` : "Quote"}</li>
            ))}
          </ul>
          <div className="cart-total"><span>Total</span><strong>${total}</strong></div>
        </div>

        <label>Delivery / pickup date <input name="date" type="date" required /></label>
        <label>Notes (card message, address, preferences)
          <textarea name="notes" rows="4" />
        </label>
        <button className="btn" type="submit">Send order request</button>
      </form>
    </section>
  );
}
