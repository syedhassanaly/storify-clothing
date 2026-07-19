import { Link } from "react-router-dom";
import ScrollReveal from "./shared/ScrollReveal";
import SectionHeading from "./shared/SectionHeading";

const collections = [
  { title: "Essentials", desc: "Timeless pieces that form the foundation of any wardrobe." },
  { title: "Work Ready", desc: "Professional attire that commands confidence." },
  { title: "Weekend Vibes", desc: "Casual comfort without compromising style." },
  { title: "Accessories", desc: "The finishing touches that complete your look." },
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 xs:py-20 sm:py-24 px-4 xs:px-6 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Curated Edits"
        title="Featured Collections"
        subtitle="Four ways to build a wardrobe that actually works for you."
      />

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
        {collections.map((c, i) => (
          <ScrollReveal key={c.title} delay={i * 90}>
            <Link
              to="/shop"
              className="group block h-full p-5 xs:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-400 !no-underline touch-manipulation relative overflow-hidden hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-brand-gold/10 transition-colors duration-400 group-hover:bg-brand-gold/20" />
              <h3 className="relative font-display text-lg font-bold text-brand-dark mb-2 transition-colors duration-300 group-hover:text-brand-gold">
                {c.title}
              </h3>
              <p className="relative text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
