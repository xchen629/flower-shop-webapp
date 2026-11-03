import { OWNER_EMAIL, money } from "../config.js";

export default function OrderForm({ items, total }) {
  const onSubmit = (e) => {
    e.preventDefault();
    if (!items.length) {
      alert("请先把花束加入购物车。");
      return;
    }
    const f = new FormData(e.currentTarget);
    const body = [
      `姓名：${f.get("name")}`,
      `邮箱：${f.get("email")}`,
      `日期：${f.get("date")}`,
      "",
      "商品：",
      ...items.map((i) => `- ${i.name} × ${i.qty}（${money(i.price)}）`),
      `合计：$${total}`,
      "",
      `备注：${f.get("notes") || "-"}`,
    ].join("\n");
    // 打开顾客的邮件应用，并自动填好订单内容。
    window.location.href =
      `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent("鲜花订单")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="order" className="section">
      <h2>下单</h2>
      <form className="form" onSubmit={onSubmit}>
        <label>姓名 <input name="name" required /></label>
        <label>邮箱 <input name="email" type="email" required /></label>

        <div className="order-summary">
          <strong>已选商品</strong>
          <ul>
            {items.length === 0 && <li>购物车是空的，请先在上方选择花束。</li>}
            {items.map((i) => (
              <li key={i.id}>{i.name} × {i.qty} — {i.price ? `$${i.price * i.qty}` : "询价"}</li>
            ))}
          </ul>
          <div className="cart-total"><span>合计</span><strong>${total}</strong></div>
        </div>

        <label>配送 / 自取日期 <input name="date" type="date" required /></label>
        <label>备注（贺卡留言、地址、喜好等）
          <textarea name="notes" rows="4" />
        </label>
        <button className="btn" type="submit">提交订单</button>
      </form>
    </section>
  );
}
