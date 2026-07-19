import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./shared/ScrollReveal";
import SectionHeading from "./shared/SectionHeading";
import { categoryImages } from "../data/products";

const featured = ["Jackets", "Shoes", "Dresses", "Accessories"];

export default function FeaturedCategories() {
  return (
    <section className="py-16 xs:py-20 sm:py-24 px-4 xs:px-6 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Shop by Category"
        title="Featured Categories"
        subtitle="Explore the edit — from statement outerwear to everyday essentials."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
        {featured.map((cat, i) => (
          <ScrollReveal key={cat} delay={i * 90}>
            <Link
              to={`/shop?category=${encodeURIComponent(cat)}`}
              className="group relative block rounded-2xl overflow-hidden aspect-[3/4] shadow-md transition-all duration-500 !no-underline touch-manipulation hover:shadow-2xl hover:-translate-y-2"
            >
              <img
                src={categoryImages[cat]}
                alt={cat}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 xs:p-5 flex items-end justify-between">
                <h3 className="font-display text-white text-base xs:text-lg font-bold">{cat}</h3>
                <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-brand-gold">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
