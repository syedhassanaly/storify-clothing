import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Music2, Image as ImageIcon, ArrowRight, Mail, Phone } from "lucide-react";
import logo from "../images/logo.png";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Collections" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const customerService = ["Shipping Info", "Returns", "Size Guide", "FAQ"];

const socials = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "TikTok", icon: Music2, href: "#" },
  { label: "Pinterest", icon: ImageIcon, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // No email service is wired up yet — this just gives real UI feedback
    // instead of pretending to submit somewhere.
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative bg-brand-dark text-gray-400 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 pt-14 xs:pt-16 sm:pt-20 pb-8 xs:pb-10">
        {/* Newsletter */}
        <div className="glass rounded-3xl px-6 xs:px-8 sm:px-10 py-8 xs:py-10 mb-12 xs:mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-display text-white text-xl xs:text-2xl font-bold mb-1.5">
              Stay In The Loop
            </h4>
            <p className="text-gray-400 text-xs xs:text-sm">
              Subscribe for early access to new drops and members-only offers.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 text-sm rounded-full bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold w-full sm:min-w-[240px] touch-manipulation"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-brand-orange-from to-brand-gold text-white px-5 py-3 rounded-full transition-all duration-300 font-semibold text-sm whitespace-nowrap touch-manipulation active:scale-95 hover:shadow-glow-gold"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
              {!subscribed && <ArrowRight size={15} />}
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 xs:gap-9 sm:gap-10 mb-10 xs:mb-12">
          <div className="xs:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 !no-underline">
              <img src={logo} alt="Storify Clothes logo" width={32} height={28} className="rounded-lg" />
              <span className="font-display text-white text-lg font-bold">Storify</span>
            </Link>
            <p className="text-gray-400 text-xs xs:text-sm leading-relaxed max-w-xs">
              Fashion that defines you. Premium pieces, curated collections,
              made for modern lifestyles.
            </p>
          </div>

          <div>
            <h4 className="text-white font-display text-sm xs:text-base font-semibold mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks
                .filter((l, i, arr) => arr.findIndex((x) => x.label === l.label) === i)
                .map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="!text-gray-400 transition-colors duration-300 text-xs xs:text-sm !no-underline block py-1 touch-manipulation hover:!text-brand-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-sm xs:text-base font-semibold mb-4 tracking-wide">
              Customer Service
            </h4>
            <ul className="space-y-2">
              {customerService.map((item) => (
                <li key={item}>
                  <p className="text-xs xs:text-sm transition-colors duration-300 py-1 touch-manipulation cursor-pointer hover:text-brand-gold">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-sm xs:text-base font-semibold mb-4 tracking-wide">
              Get In Touch
            </h4>
            <a
              href="mailto:support@storifyclothes.com"
              className="!text-gray-400 flex items-center gap-2 text-xs xs:text-sm mb-2.5 !no-underline touch-manipulation hover:!text-brand-gold"
            >
              <Mail size={14} /> support@storifyclothes.com
            </a>
            <a
              href="tel:+923001234567"
              className="!text-gray-400 flex items-center gap-2 text-xs xs:text-sm mb-5 !no-underline touch-manipulation hover:!text-brand-gold"
            >
              <Phone size={14} /> +92 300 1234567
            </a>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center !text-gray-300 transition-all duration-300 touch-manipulation active:scale-90 hover:!text-white hover:bg-brand-gold/20"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 xs:pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-gray-500 text-xs xs:text-sm">
            © 2026 Storify Clothes. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 text-xs text-gray-500">
            <p className="hover:text-brand-gold transition-colors duration-300 cursor-pointer touch-manipulation py-1">
              Privacy Policy
            </p>
            <p className="hover:text-brand-gold transition-colors duration-300 cursor-pointer touch-manipulation py-1">
              Terms of Service
            </p>
            <p className="hover:text-brand-gold transition-colors duration-300 cursor-pointer touch-manipulation py-1">
              Cookie Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
