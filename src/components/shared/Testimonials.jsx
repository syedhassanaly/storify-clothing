import { Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials({
  testimonials,
  title = "What Our Customers Say",
  eyebrow = "Testimonials",
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 xs:px-6">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xs:gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 100}>
            <div className="relative h-full bg-white p-6 xs:p-7 rounded-2xl shadow-sm border border-gray-100 transition-all duration-400 hover:shadow-2xl hover:-translate-y-2">
              <Quote className="text-brand-gold/25 mb-2" size={32} fill="currentColor" />
              <div className="flex text-amber-500 mb-3 gap-0.5">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className={idx < (t.rating || 5) ? "fill-amber-500 stroke-amber-500" : "stroke-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm xs:text-base mb-5 leading-relaxed">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-orange-from to-brand-gold flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm">{t.name}</p>
                  {t.role && <p className="text-gray-500 text-xs">{t.role}</p>}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
