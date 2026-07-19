import { useEffect, useRef, useState } from "react";

function StatCard({ value, suffix, label }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setDisplay(Math.round(progress * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const formatNumber = (n) => (n >= 1000 ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K` : n);

  return (
    <div ref={ref} className="text-center px-2">
      <p className="text-3xl xs:text-4xl sm:text-5xl font-extrabold text-white mb-1 xs:mb-2">
        {formatNumber(display)}
        {suffix}
      </p>
      <p className="text-white/80 text-xs xs:text-sm sm:text-base font-medium tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}

const defaultStats = [
  { value: 10000, suffix: "+", label: "Happy Customers" },
  { value: 500, suffix: "+", label: "Products" },
  { value: 50, suffix: "+", label: "Brands" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

export default function StatsBanner({ stats = defaultStats }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-brand-dark to-[#1f1819] py-12 xs:py-14 sm:py-16 px-4">
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-brand-gold/10 animate-float" />
      <div
        className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-brand-gold/10 animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}
