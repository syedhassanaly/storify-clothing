import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "./shared/ScrollReveal";

export default function ContactCTA() {
  return (
    <section className="px-4 xs:px-6 py-4">
      <ScrollReveal className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-orange-from to-brand-gold px-6 xs:px-10 py-12 xs:py-16 text-center shadow-glow-gold">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 animate-float" />
          <div
            className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-white/10 animate-float"
            style={{ animationDelay: "1.5s" }}
          />
          <div className="relative">
            <MessageCircle className="mx-auto mb-4 text-white" size={32} />
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-3">
              Have a Question?
            </h2>
            <p className="text-white/90 text-sm xs:text-base max-w-xl mx-auto mb-8">
              Our team is one message away — orders, sizing, or just to say hi.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-brand-dark bg-white active:scale-95 transition-transform duration-300 !no-underline shadow-lg hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
