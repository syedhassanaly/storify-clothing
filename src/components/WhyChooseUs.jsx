import { Sparkles, Leaf, ShieldCheck, Repeat } from "lucide-react";
import ScrollReveal from "./shared/ScrollReveal";
import SectionHeading from "./shared/SectionHeading";

const features = [
  {
    icon: Sparkles,
    title: "Quality Craftsmanship",
    desc: "Excellence in every stitch — pieces built to last, not just trend.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Trusted",
    desc: "Encrypted checkout and a track record thousands of customers rely on.",
  },
  {
    icon: Leaf,
    title: "Sustainable Materials",
    desc: "Ethically sourced fabrics and responsible production, always.",
  },
  {
    icon: Repeat,
    title: "Easy 14-Day Returns",
    desc: "Not the right fit? Send it back, no questions asked.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 xs:py-20 sm:py-24 px-4 xs:px-6 bg-brand-dark overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Why Storify"
          title={<span className="text-white">Why Choose Us</span>}
          subtitle={<span className="text-white/60">Everything about the experience is designed to feel effortless.</span>}
        />

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 100}>
              <div className="group h-full glass rounded-2xl p-5 xs:p-6 transition-all duration-400 hover:bg-white/[0.12] hover:-translate-y-2">
                <div className="w-11 h-11 xs:w-12 xs:h-12 rounded-xl bg-gradient-to-br from-brand-orange-from to-brand-gold flex items-center justify-center mb-4 shadow-glow-gold transition-transform duration-300 group-hover:scale-110">
                  <f.icon size={20} className="text-white" />
                </div>
                <h3 className="font-display text-white font-semibold text-base xs:text-lg mb-1.5">
                  {f.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
