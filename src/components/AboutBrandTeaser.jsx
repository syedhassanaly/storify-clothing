import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./shared/ScrollReveal";

export default function AboutBrandTeaser() {
  return (
    <section className="py-16 xs:py-20 sm:py-24 px-4 xs:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="inline-block text-xs xs:text-sm font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
            Our Philosophy
          </span>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl font-bold text-brand-dark mb-5">
            Where Style Meets Story
          </h2>
          <p className="text-gray-600 text-sm xs:text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            At Storify Clothes, we believe fashion is more than what you
            wear — it's how you express yourself. Our carefully selected
            collection brings together quality craftsmanship and modern
            design to help you create your unique narrative, one outfit at
            a time.
          </p>
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 font-semibold text-brand-dark border-b-2 border-brand-gold pb-1 !no-underline transition-all duration-300 hover:gap-3"
          >
            Read Our Story
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
