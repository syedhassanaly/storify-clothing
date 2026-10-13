import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import Testimonials from "./shared/Testimonials";
import ProductCard from "./shared/ProductCard";
import { products as allProducts, categories } from "../data/products";
import { testimonials } from "../data/testimonials";

function ShopPage() {
  const { cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam && categories.includes(categoryParam) ? categoryParam : "All"
  );
  const [sortBy, setSortBy] = useState("featured");
  const [toast, setToast] = useState(null); // { message, type }

  // Keep the filter in sync if someone lands here via a category link
  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Handle hash scrolling to the cart section (e.g. /shop#cart)
  useEffect(() => {
    if (window.location.hash === "#cart") {
      const cartElement = document.getElementById("cart");
      if (cartElement) {
        setTimeout(() => {
          cartElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const filteredProducts = allProducts.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    addToCart(product);
    showToast(
      existing ? `Increased quantity of ${product.name} in cart!` : `${product.name} added to cart successfully! 🛒`
    );
  };

  const handleRemove = (productId) => {
    const item = cartItems.find((i) => i.id === productId);
    removeFromCart(productId);
    if (item) showToast(`${item.name} removed from cart`, "error");
  };

  const shipping = totalPrice > 5000 ? 0 : totalPrice > 0 ? 200 : 0;

  const handleCheckout = () => {
    if (!isAuthenticated) {
      showToast("Please log in to check out", "error");
      navigate("/login");
      return;
    }
    showToast("Checkout isn't wired up to a payment provider yet — coming soon!");
  };

  return (
    <div className="pt-28 xs:pt-32 pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16 px-3 xs:px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Toast */}
      {toast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
          <div
            className={`flex items-center gap-3 px-4 xs:px-5 py-3 xs:py-4 rounded-xl shadow-lg border min-w-72 xs:min-w-80 ${
              toast.type === "error"
                ? "bg-red-50 border-red-200 text-red-800"
                : "bg-green-50 border-green-200 text-green-800"
            }`}
          >
            <span className="text-lg">{toast.type === "error" ? "⚠️" : "✅"}</span>
            <span className="text-sm font-medium">{toast.message}</span>
          </div>
        </div>
      )}

      {/* Hero */}
      <div className="text-center mb-8 xs:mb-10 sm:mb-12">
        <span className="inline-block text-xs xs:text-sm font-semibold tracking-[0.2em] uppercase text-brand-gold mb-2 xs:mb-3">
          The Full Collection
        </span>
        <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-brand-dark mb-2 xs:mb-3">Shop</h1>
        <p className="text-gray-600 text-sm xs:text-base max-w-xl mx-auto">
          Browse every category, filter by what matters, and build your cart.
        </p>
      </div>

      {/* Benefit badges */}
      <h2 className="text-center text-lg xs:text-xl font-semibold text-brand-dark mb-4 xs:mb-5">
        Why Shop With Us
      </h2>
      <div className="grid grid-cols-2 xs:grid-cols-4 gap-3 xs:gap-4 mb-8 xs:mb-10 sm:mb-12">
        {[
          { icon: "🚚", label: "Free shipping over Rs.5000" },
          { icon: "↩️", label: "14-day easy returns" },
          { icon: "🔒", label: "Secure checkout" },
          { icon: "⭐", label: "Trusted by thousands" },
        ].map((b) => (
          <div key={b.label} className="bg-white border border-gray-200 rounded-xl p-3 xs:p-4 text-center transition-colors hover:border-brand-gold">
            <div className="text-xl xs:text-2xl mb-1">{b.icon}</div>
            <p className="text-[11px] xs:text-xs text-gray-600">{b.label}</p>
          </div>
        ))}
      </div>

      {/* Filter + sort bar */}
      <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-between items-start sm:items-center mb-6 xs:mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium transition-colors duration-300 touch-manipulation ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-brand-orange-from to-brand-gold text-white shadow-glow-gold"
                  : "bg-white border border-gray-300 text-gray-700 hover:border-brand-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-xs xs:text-sm bg-white focus:outline-none focus:border-brand-gold"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 mb-12 xs:mb-14 sm:mb-16">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>

      {/* Shopping Cart (with id="cart" added for anchor scrolling) */}
      <div id="cart" className="bg-white border-2 border-brand-gold rounded-2xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 shadow-lg mb-14 xs:mb-16 sm:mb-20 scroll-mt-32">
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-brand-dark mb-4 xs:mb-5 sm:mb-6">
          Shopping Cart
          {cartItems.length > 0 && (
            <span className="ml-2 xs:ml-3 text-sm xs:text-lg text-amber-600">
              ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
            </span>
          )}
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-8 xs:py-10 sm:py-12">
            <svg className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 mx-auto text-gray-300 mb-3 xs:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p className="text-gray-500 text-base xs:text-lg">Your cart is empty</p>
            <p className="text-gray-400 text-xs xs:text-sm mt-1 xs:mt-2">Add some products to get started!</p>
          </div>
        ) : (
          <div>
            <div className="space-y-3 xs:space-y-4 mb-4 xs:mb-5 sm:mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col xs:flex-row xs:items-center justify-between bg-gray-50 p-3 xs:p-4 rounded-xl border border-gray-200 transition-colors duration-300 touch-manipulation hover:border-brand-gold"
                >
                  <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 mb-3 xs:mb-0">
                    <img src={item.image} alt={item.name} className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-brand-dark text-sm xs:text-base sm:text-lg">{item.name}</h3>
                      <p className="text-xs text-gray-600">Category: {item.category}</p>
                      <p className="text-brand-gold font-bold mt-1 text-sm xs:text-base">
                        Rs. {item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between xs:justify-end space-x-2 xs:space-x-3 sm:space-x-4">
                    <div className="flex items-center space-x-1 xs:space-x-2 bg-white border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 xs:px-3 py-1 text-brand-dark font-bold rounded-l-lg transition-colors text-xs xs:text-sm touch-manipulation hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-2 xs:px-3 py-1 font-semibold text-brand-dark text-xs xs:text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 xs:px-3 py-1 text-brand-dark font-bold rounded-r-lg transition-colors text-xs xs:text-sm touch-manipulation hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right min-w-16 xs:min-w-20 sm:min-w-24">
                      <p className="font-bold text-brand-dark text-sm xs:text-base">
                        Rs. {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 p-1 xs:p-2 rounded-lg transition-colors touch-manipulation hover:text-red-700 hover:bg-red-50"
                      aria-label={`Remove ${item.name}`}
                    >
                      <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-brand-gold pt-4 xs:pt-5 sm:pt-6">
              <div className="space-y-2 xs:space-y-3 mb-4 xs:mb-5 sm:mb-6">
                <div className="flex justify-between text-gray-600 text-sm xs:text-base">
                  <span>Subtotal:</span>
                  <span className="font-semibold">Rs. {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm xs:text-base">
                  <span>Shipping:</span>
                  <span className="font-semibold text-green-600">{shipping === 0 ? "Free" : "Rs. 200"}</span>
                </div>
                <div className="flex justify-between items-center border-t pt-2 xs:pt-3">
                  <span className="text-lg xs:text-xl font-semibold text-brand-dark">Total Amount:</span>
                  <span className="text-xl xs:text-2xl sm:text-3xl font-bold text-brand-gold">
                    Rs. {(totalPrice + shipping).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex flex-col xs:flex-row space-y-3 xs:space-y-0 xs:space-x-3 sm:space-x-4">
                <button
                  onClick={clearCart}
                  className="flex-1 bg-gray-200 text-brand-dark font-bold py-2 xs:py-3 px-4 xs:px-6 rounded-lg transition-colors duration-300 text-sm xs:text-base touch-manipulation hover:bg-gray-300"
                >
                  Clear Cart Section
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-1 bg-gradient-to-r from-brand-orange-from to-brand-gold text-white font-bold py-2 xs:py-3 px-4 xs:px-6 rounded-full transition-all duration-300 text-sm xs:text-base touch-manipulation hover:shadow-glow-gold"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Why Shop With Us + testimonials */}
      <Testimonials testimonials={testimonials} title="What Shoppers Are Saying" />
    </div>
  );
}

export default ShopPage;
