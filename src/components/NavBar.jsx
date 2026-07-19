import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import logo from "../images/logo.png";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";
  // Only the home page has a full-bleed hero for the navbar to float
  // transparently over. Everywhere else it should read as solid glass
  // immediately, since there's page content right underneath it.
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleLogout = async () => {
    closeMobileMenu();
    await logout();
    navigate("/");
  };

  const linkTextClass = isTransparent
    ? "text-white/90 hover:text-white"
    : "text-brand-dark/70 hover:text-brand-dark";

  return (
    <>
      <nav className="fixed top-3 xs:top-4 sm:top-5 left-0 right-0 z-50 px-3 xs:px-4 sm:px-6">
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between gap-2 rounded-full px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 transition-all duration-500 ${
            isTransparent ? "bg-transparent" : "shadow-premium border border-white/60"
          }`}
          style={isTransparent ? {} : { background: "rgba(255,255,255,0.75)", backdropFilter: "blur(20px)" }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 !no-underline shrink-0" onClick={closeMobileMenu}>
            <img src={logo} alt="Storify Clothes logo" width={34} height={30} className="rounded-lg" />
            <span
              className={`font-display text-base xs:text-lg font-bold tracking-tight hidden xs:inline ${
                isTransparent ? "text-white" : "text-brand-dark"
              }`}
            >
              Storify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-300 !no-underline ${
                    isActive
                      ? isTransparent
                        ? "text-white bg-white/15"
                        : "text-brand-dark bg-brand-gold/15"
                      : linkTextClass
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-2">
            {isAuthenticated ? (
              <NavLink
                to="/account"
                className={`flex items-center gap-1.5 text-sm font-medium !no-underline ${linkTextClass}`}
              >
                <User size={16} />
                {user?.displayName?.split(" ")[0] || "Account"}
              </NavLink>
            ) : (
              <NavLink to="/login" className={`text-sm font-medium !no-underline ${linkTextClass}`}>
                Login
              </NavLink>
            )}

            <Link
              to="/shop"
              aria-label="View cart"
              className={`relative p-2 rounded-full transition-colors duration-300 ${linkTextClass}`}
            >
              <ShoppingBag size={18} />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-4.5 w-4.5 flex items-center justify-center font-bold">
                  {totalCount > 99 ? "99+" : totalCount}
                </span>
              )}
            </Link>

            <Link
              to="/shop"
              className="ml-1 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-orange-from to-brand-gold shadow-glow-gold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 !no-underline"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
            className={`md:hidden relative p-2 rounded-full transition-colors duration-300 ${linkTextClass}`}
          >
            <span className="relative block w-5 h-5">
              <Menu
                size={20}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={20}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile slide-out drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
        />
        <div
          id="mobile-menu"
          className={`absolute top-0 right-0 h-full w-[80%] max-w-xs shadow-premium transition-transform duration-400 ease-out flex flex-col pt-24 px-6 pb-8 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(20px)" }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-4 py-3.5 rounded-xl text-base font-medium !no-underline transition-colors touch-manipulation ${
                    isActive ? "text-brand-dark bg-brand-gold/15" : "text-brand-dark/70 hover:bg-gray-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {isAuthenticated ? (
              <>
                <NavLink
                  to="/account"
                  onClick={closeMobileMenu}
                  className="px-4 py-3.5 rounded-xl text-base font-medium text-brand-dark/70 !no-underline touch-manipulation hover:bg-gray-100"
                >
                  My Account
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="text-left px-4 py-3.5 rounded-xl text-base font-medium text-brand-dark/70 touch-manipulation hover:bg-gray-100"
                >
                  Log out
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                onClick={closeMobileMenu}
                className="px-4 py-3.5 rounded-xl text-base font-medium text-brand-dark/70 !no-underline touch-manipulation hover:bg-gray-100"
              >
                Login
              </NavLink>
            )}
          </div>

          <Link
            to="/shop"
            onClick={closeMobileMenu}
            className="mt-6 flex items-center justify-center gap-2 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-brand-orange-from to-brand-gold shadow-glow-gold !no-underline touch-manipulation"
          >
            <ShoppingBag size={16} />
            Shop Now {totalCount > 0 && `(${totalCount})`}
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
