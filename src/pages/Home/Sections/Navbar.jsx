import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import {
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

// Navigation links config
const NAV_LINKS = [
  { name: "Projects", path: "/projects", isRoute: true },
  { name: "About", path: "/#about" },
  { name: "Skills", path: "/#skills" },
  { name: "Contact", path: "/#contact" },
];

// External social links config
const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    href: "https://github.com/anupamyadav01",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/anupamyadav01/",
    label: "LinkedIn",
  },
];

// Small Brand Icon Component
function BrandLogoIcon({ className = "w-8 h-8" }) {
  return (
    <div
      className={`${className} shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(231,96,46,0.4)]"
      >
        <defs>
          <linearGradient id="ayGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E7602E" />
            <stop offset="50%" stopColor="#ff7a45" />
            <stop offset="100%" stopColor="#ff9c6e" />
          </linearGradient>
        </defs>
        <polygon
          points="20,2 36,10 36,30 20,38 4,30 4,10"
          stroke="url(#ayGlow)"
          strokeWidth="1.8"
          className="fill-slate-900/90"
        />
        <path
          d="M12 28L20 12L28 28M15.5 22H24.5M20 20V29"
          stroke="url(#ayGlow)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Navbar() {
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll listener: handles hiding/showing navbar on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at top (within 50px); otherwise hide on scroll down, show on scroll up
      if (currentScrollY <= 50) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY && !menuOpen) {
        // Scrolling down -> hide navbar
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> show navbar
        setShowHeader(true);
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // Smooth scroll handler with offset for navigation targets
  const scrollWithOffset = (el) => {
    const yCoordinate =
      el.getBoundingClientRect().top + window.pageYOffset - 80;
    if (window.lenis) {
      window.lenis.scrollTo(yCoordinate, { duration: 1.2 });
    } else {
      window.scrollTo({ top: yCoordinate, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full border-b border-white/10 bg-[#060a12]/80 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <NavHashLink
            smooth
            to="/#home"
            scroll={scrollWithOffset}
            onClick={closeMenu}
            className="flex items-center gap-3 no-underline group"
          >
            <BrandLogoIcon className="w-9 h-9" />
            <div className="flex items-baseline gap-1 select-none">
              <span className="text-white font-extrabold text-lg tracking-tight group-hover:text-[#E7602E] transition-colors">
                Anupam<span className="text-[#E7602E] animate-pulse">.</span>
              </span>
              <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
                DEV
              </span>
            </div>
          </NavHashLink>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`text-sm font-medium transition-colors hover:text-[#E7602E] ${
                    location.pathname === link.path
                      ? "text-[#E7602E] font-semibold"
                      : "text-slate-300"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <NavHashLink
                  key={link.name}
                  smooth
                  to={link.path}
                  scroll={scrollWithOffset}
                  onClick={closeMenu}
                  className="text-sm font-medium text-slate-300 hover:text-[#E7602E] transition-colors"
                >
                  {link.name}
                </NavHashLink>
              ),
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-slate-900/80 text-slate-300 hover:text-white hover:border-[#E7602E]/60 hover:bg-[#E7602E]/15 transition-all text-sm"
              >
                <Icon />
              </a>
            ))}

            <a
              href="https://www.linkedin.com/in/anupamyadav01/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs bg-[#E7602E] hover:bg-[#ff723b] text-white shadow-md shadow-[#E7602E]/30 hover:shadow-[#E7602E]/50 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Hire Me</span>
              <FaArrowRight className="text-[10px]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation"
              className="p-2.5 rounded-xl border border-white/10 bg-slate-900/60 text-slate-200 hover:text-[#E7602E] transition-colors"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu for Top Bar */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 bg-[#060a12] border-b border-white/10 flex flex-col gap-4">
            {NAV_LINKS.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className="text-sm font-medium text-slate-200 hover:text-[#E7602E] transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <NavHashLink
                  key={link.name}
                  smooth
                  to={link.path}
                  scroll={scrollWithOffset}
                  onClick={closeMenu}
                  className="text-sm font-medium text-slate-200 hover:text-[#E7602E] transition-colors"
                >
                  {link.name}
                </NavHashLink>
              ),
            )}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-[#E7602E]"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
              <a
                href="https://www.linkedin.com/in/anupamyadav01/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg font-bold text-xs bg-[#E7602E] hover:bg-[#ff723b] text-white transition-all shadow-md shadow-[#E7602E]/20"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
