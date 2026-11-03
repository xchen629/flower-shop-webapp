// 在这里修改店铺信息和商品。
export const SHOP_NAME = "花漾小铺";
export const OWNER_EMAIL = "hello@example.com";
export const INSTAGRAM = { handle: "@bloomandpetal", url: "https://instagram.com/" };

// 图片放在 /public/images。BASE_URL 保证在 GitHub Pages 上路径正确。
export const img = (file) => `${import.meta.env.BASE_URL}images/${file}`;

// 注意：下面的价格只是占位，请改成你的真实价格。
// 价格为 0 时显示“询价”，且不计入总价。
export const PRODUCTS = [
  { id: "blue-wrap",   name: "天空蓝花园", price: 38, image: img("blue-wrap-roses-chamomile.jpg"),
    desc: "浅蓝韩素纸 ｜ 白玫瑰 + 洋甘菊 + 文竹" },
  { id: "cream-hand",  name: "奶白手捧花", price: 55, image: img("cream-ribbon-roses-hydrangea.jpg"),
    desc: "奶白丝带手捧 ｜ 白玫瑰 + 浅绣球" },
  { id: "greyblue",    name: "雾蓝百合",   price: 58, image: img("greyblue-lily-peony-rose.jpg"),
    desc: "灰蓝韩素纸 ｜ 重瓣百合 + 粉芍药 + 白玫瑰" },
  { id: "pink-print",  name: "粉色心事",   price: 48, image: img("pink-print-roses-stock.jpg"),
    desc: "粉色印花纸 ｜ 白玫瑰 + 粉玫瑰 + 紫罗兰" },
  { id: "lace",        name: "复古蕾丝",   price: 52, image: img("lace-vintage-roses-carnation.jpg"),
    desc: "蕾丝复古包装 ｜ 白玫瑰 + 紫罗兰 + 黄康乃馨" },
  { id: "clear-tote",  name: "透明手提花袋", price: 50, image: img("clear-tote-rose-tulip-alstroemeria.jpg"),
    desc: "透明手提袋 ｜ 白玫瑰 + 粉郁金香 + 六出花" },
  { id: "pink-wrap",   name: "粉色六出花", price: 42, image: img("pink-wrap-roses-alstroemeria.jpg"),
    desc: "粉色韩素纸 ｜ 白玫瑰 + 粉六出花" },
  { id: "blue-hydr",   name: "蓝绣球",     price: 45, image: img("clear-wrap-roses-blue-hydrangea.jpg"),
    desc: "透白玻璃纸 ｜ 白玫瑰 + 蓝绣球 + 洋甘菊" },
  { id: "custom",      name: "定制 & 婚礼", price: 0, emoji: "💍",
    desc: "告诉我你喜欢的颜色和场合，为你专属设计。" },
];

export const money = (p) => (p > 0 ? `$${p}` : "询价");
