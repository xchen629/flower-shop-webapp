// Edit these for your shop.
export const SHOP_NAME = "Bloom & Petal";
export const OWNER_EMAIL = "hello@example.com";
export const INSTAGRAM = { handle: "@bloomandpetal", url: "https://instagram.com/" };

export const PRODUCTS = [
  { id: "roses",    name: "Classic Roses",   emoji: "🌹", price: 45, desc: "A dozen long-stem roses, hand-wrapped." },
  { id: "spring",   name: "Spring Mix",      emoji: "🌷", price: 38, desc: "Tulips, ranunculus, and seasonal greens." },
  { id: "sunshine", name: "Sunshine Bundle", emoji: "🌻", price: 35, desc: "Bright sunflowers and daisies." },
  { id: "pastels",  name: "Soft Pastels",    emoji: "💐", price: 55, desc: "Peonies and garden roses in blush tones." },
  { id: "wild",     name: "Wildflower Jar",  emoji: "🌼", price: 28, desc: "Loose, natural arrangement in a mason jar." },
  { id: "wedding",  name: "Wedding Consult", emoji: "💍", price: 0,  desc: "Custom florals for your big day. Get a quote." },
];

export const money = (p) => (p > 0 ? `$${p}` : "Quote");
