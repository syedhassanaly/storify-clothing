import { useState } from "react";
import { Heart, Eye, Star, X } from "lucide-react";
import { badgeMeta } from "../../data/products";

function Stars({ rating }) {
  return (
    <div className="flex text-amber-500 text-xs xs:text-sm">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < Math.round(rating) ? "fill-amber-500 stroke-amber-500" : "stroke-gray-300"}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product, onAddToCart }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [quickView, setQuickView] = useState(false);
  const badge = product.badge ? badgeMeta[product.badge] : null;

  return (
    <>
      <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md transition-all duration-500 touch-manipulation active:scale-[0.98] hover:shadow-2xl hover:-translate-y-2">
        <div className="relative overflow-hidden bg-gray-100 aspect-[4/5]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

          {badge && (
            <span className="absolute top-3 left-3 flex items-center gap-1 bg-brand-dark/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
              <span>{badge.icon}</span>
              {badge.label}
            </span>
          )}

          <button
            type="button"
            onClick={() => setWishlisted((w) => !w)}
            aria-label="Toggle wishlist"
            aria-pressed={wishlisted}
            className="absolute top-3 right-3 w-8 h-8 xs:w-9 xs:h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm active:scale-95 transition-transform duration-200 hover:scale-110"
          >
            <Heart
              size={16}
              className={wishlisted ? "fill-red-500 stroke-red-500" : "stroke-gray-600"}
            />
          </button>

          <button
            type="button"
            onClick={() => setQuickView(true)}
            className="absolute left-1/2 -translate-x-1/2 bottom-3 flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/95 text-brand-dark text-xs font-semibold shadow-lg opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-3 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 touch-manipulation"
          >
            <Eye size={14} /> Quick View
          </button>
        </div>

        <div className="p-4 xs:p-5">
          <p className="text-[11px] uppercase tracking-wider text-brand-gold font-semibold mb-1">
            {product.category}
          </p>
          <h3 className="text-sm xs:text-base font-semibold text-brand-dark mb-1.5 truncate font-display">
            {product.name}
          </h3>
          <div className="flex items-center gap-1.5 mb-2.5">
            <Stars rating={product.rating} />
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg xs:text-xl font-bold text-brand-dark">
              Rs. {product.price.toLocaleString()}
            </p>
            <button
              onClick={() => onAddToCart(product)}
              className="text-xs xs:text-sm font-semibold px-3.5 py-2 rounded-full bg-gradient-to-r from-brand-orange-from to-brand-gold text-white shadow-glow-gold active:scale-95 transition-all duration-200 touch-manipulation hover:shadow-lg hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Quick view modal */}
      {quickView && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setQuickView(false)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-lg w-full grid grid-cols-1 sm:grid-cols-2 shadow-premium relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setQuickView(false)}
              aria-label="Close quick view"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm active:scale-95 transition-transform hover:scale-110"
            >
              <X size={16} />
            </button>

            <div className="p-5 xs:p-6 flex flex-col">
              {badge && (
                <span className="inline-flex w-fit items-center gap-1 bg-brand-dark text-white text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3">
                  <span>{badge.icon}</span> {badge.label}
                </span>
              )}
              <p className="text-[11px] uppercase tracking-wider text-brand-gold font-semibold mb-1">
                {product.category}
              </p>
              <h3 className="text-lg font-bold text-brand-dark mb-2 font-display">{product.name}</h3>
              <div className="flex items-center gap-1.5 mb-3">
                <Stars rating={product.rating} />
                <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
              </div>
              <p className="text-2xl font-bold text-brand-dark mb-5">
                Rs. {product.price.toLocaleString()}
              </p>
              <button
                onClick={() => {
                  onAddToCart(product);
                  setQuickView(false);
                }}
                className="mt-auto w-full py-3 rounded-full bg-gradient-to-r from-brand-orange-from to-brand-gold text-white font-semibold shadow-glow-gold active:scale-95 transition-transform hover:scale-[1.02]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </> 
  );
}
