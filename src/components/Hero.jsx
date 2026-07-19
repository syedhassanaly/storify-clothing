import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { products } from "../data/products";

const floatCards = [products[5], products[1], products[6]]; // Jacket, Shoes, Dress

export default function Hero() {
  const heroRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] xs:min-h-screen w-full overflow-hidden bg-brand-dark flex items-center pt-28 pb-16 xs:pt-32"
    >
      {/* Background gradient + glow orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1a1512] to-[#241611]" />
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-brand-orange/20 blur-3xl animate-glow" />
      <div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-brand-gold/20 blur-3xl animate-glow"
        style={{ animationDelay: "1.2s" }}
      />

      <div className="relative max-w-6xl mx-auto w-full px-4 xs:px-6 sm:px-8 grid lg:grid-cols-2 gap-12 xs:gap-16 items-center">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs xs:text-sm font-medium text-amber-200 mb-6 animate-fade-in-up opacity-0">
            <Sparkles size={14} className="text-amber-300" />
            New Collection 2026
          </span>

          <h1
            className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-6xl font-bold leading-[1.08] mb-5 xs:mb-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: "100ms" }}
          >
            <span className="text-white">Elevate Your Style.</span>
            <br />
            <span className="text-gradient">Define Your Story.</span>
          </h1>

          <p
            className="text-white/70 text-base xs:text-lg max-w-md mx-auto lg:mx-0 mb-8 xs:mb-10 leading-relaxed animate-fade-in-up opacity-0"
            style={{ animationDelay: "200ms" }}
          >
            Premium fashion pieces crafted for modern lifestyles — curated
            quality, timeless design, delivered to your door.
          </p>

          <div
            className="flex flex-col xs:flex-row items-center gap-3 xs:gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              to="/shop"
              className="group w-full xs:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-brand-orange-from to-brand-gold shadow-glow-gold active:scale-95 transition-all duration-300 !no-underline touch-manipulation hover:shadow-xl hover:scale-105"
            >
              Shop Collection
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/shop"
              className="w-full xs:w-auto flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-white glass transition-all duration-300 !no-underline touch-manipulation hover:bg-white/15"
            >
              Explore Products
            </Link>
          </div>

          <div
            className="mt-10 xs:mt-12 flex items-center justify-center lg:justify-start gap-6 xs:gap-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: "400ms" }}
          >
            <div>
              <p className="text-white font-display font-bold text-xl xs:text-2xl">10K+</p>
              <p className="text-white/50 text-xs">Happy Customers</p>
            </div>
            <div className="w-px h-8 bg-white/15" />
            <div>
              <p className="text-white font-display font-bold text-xl xs:text-2xl">4.9</p>
              <p className="text-white/50 text-xs flex items-center gap-1">
                <Star size={11} className="fill-amber-400 stroke-amber-400" /> Avg Rating
              </p>
            </div>
            <div className="w-px h-8 bg-white/15" />
            <div>
              <p className="text-white font-display font-bold text-xl xs:text-2xl">500+</p>
              <p className="text-white/50 text-xs">Premium Products</p>
            </div>
          </div>
        </div>

        {/* Right: floating product cards */}
        <div className="relative hidden lg:block h-[26rem]">
          {floatCards.map((product, i) => {
            const positions = [
              { top: "0%", left: "8%", w: "12rem", z: 3 },
              { top: "18%", left: "48%", w: "13.5rem", z: 2 },
              { top: "52%", left: "18%", w: "11rem", z: 1 },
            ];
            const pos = positions[i];
            return (
              <div
                key={product.id}
                className="absolute rounded-2xl overflow-hidden shadow-premium border border-white/10 animate-float"
                style={{
                  top: pos.top,
                  left: pos.left,
                  width: pos.w,
                  zIndex: pos.z,
                  animationDelay: `${i * 0.6}s`,
                  transform: `translate(${tilt.x * 18 * (i + 1)}px, ${tilt.y * 14 * (i + 1)}px)`,
                  transition: "transform 0.4s ease-out",
                }}
              >
                <img src={product.image} alt={product.name} className="w-full h-44 object-cover" />
                <div className="glass p-3">
                  <p className="text-white text-sm font-semibold truncate">{product.name}</p>
                  <p className="text-amber-300 text-sm font-bold">Rs. {product.price.toLocaleString()}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/25 flex justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
