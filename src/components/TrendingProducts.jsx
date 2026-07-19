import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./shared/ScrollReveal";
import SectionHeading from "./shared/SectionHeading";
import ProductCard from "./shared/ProductCard";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

export default function TrendingProducts() {
  const { addToCart } = useCart();
  const trending = products.filter((p) => p.badge).slice(0, 4);

  return (
    <section className="py-16 xs:py-20 sm:py-24 px-4 xs:px-6 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Handpicked For You"
        title="Trending Products"
        subtitle="The pieces everyone's adding to their cart right now."
      />

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
        {trending.map((product, i) => (
          <ScrollReveal key={product.id} delay={i * 90}>
            <ProductCard product={product} onAddToCart={addToCart} />
          </ScrollReveal>
        ))}
      </div>

      <div className="text-center mt-10 xs:mt-12">
        <Link
          to="/shop"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-brand-dark border-2 border-brand-dark/10 transition-all duration-300 !no-underline hover:border-brand-gold hover:bg-brand-gold/5"
        >
          View Full Collection
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
