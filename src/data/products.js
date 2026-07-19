// Central product catalog. Kept in one place so the homepage sections
// (Hero floating cards, Trending Products) and the Shop page always show
// the same data instead of three separately hand-maintained lists.

export const categories = [
  "All",
  "Shirts",
  "Shoes",
  "Accessories",
  "Pants",
  "Jackets",
  "Dresses",
];

export const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 1200,
    category: "Shirts",
    rating: 4.5,
    reviews: 128,
    badge: null,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Premium Shoes",
    price: 3500,
    category: "Shoes",
    rating: 4.8,
    reviews: 95,
    badge: "bestseller",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Elegant Watch",
    price: 2500,
    category: "Accessories",
    rating: 4.7,
    reviews: 210,
    badge: null,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Stylish Backpack",
    price: 2000,
    category: "Accessories",
    rating: 4.6,
    reviews: 156,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Casual Jeans",
    price: 2800,
    category: "Pants",
    rating: 4.4,
    reviews: 89,
    badge: null,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Leather Jacket",
    price: 5500,
    category: "Jackets",
    rating: 4.9,
    reviews: 243,
    badge: "bestseller",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    name: "Summer Dress",
    price: 3200,
    category: "Dresses",
    rating: 4.7,
    reviews: 178,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    name: "Sports Sneakers",
    price: 4200,
    category: "Shoes",
    rating: 4.8,
    reviews: 312,
    badge: "trending",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60",
  },
];

export const badgeMeta = {
  trending: { label: "Trending", icon: "🔥" },
  bestseller: { label: "Best Seller", icon: "⭐" },
  new: { label: "New Arrival", icon: "🆕" },
};

export const categoryImages = {
  Shirts:
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60",
  Shoes:
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60",
  Accessories:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
  Pants:
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60",
  Jackets:
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60",
  Dresses:
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60",
};
