import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -999, y: -999 });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollWithOffset = (el) => {
    const yCoordinate =
      el.getBoundingClientRect().top + window.pageYOffset - 90;
    if (window.lenis) {
      window.lenis.scrollTo(yCoordinate, { duration: 1.2 });
    } else {
      window.scrollTo({ top: yCoordinate, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-black text-slate-900 dark:text-white pt-16 pb-8 px-6 sm:px-10 overflow-hidden border-t border-slate-900">
      {/* 1. Giant Sheryians-Style Interactive Wordmark */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full max-w-[1350px] mx-auto flex justify-center items-center text-center pb-12 overflow-hidden select-none cursor-crosshair"
      >
        <h1
          className="font-sans font-bold leading-[0.9] tracking-[0.04em] indent-[0.04em] text-[clamp(5.5rem,18.5vw,19rem)] m-0 p-0 text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.20)] [text-stroke:1.5px_rgba(255,255,255,0.20)] [-webkit-background-clip:text] [background-clip:text] pointer-events-none transition-all duration-300"
          style={{
            backgroundImage: `radial-gradient(circle 280px at ${mousePos.x}px ${mousePos.y}px, rgba(54, 255, 230, 0.9) 0%, rgba(54, 255, 230, 0.55) 25%, rgba(54, 255, 230, 0.25) 50%, rgba(54, 255, 230, 0.08) 75%, transparent 100%)`,
          }}
        >
          Anupam
        </h1>
      </div>

      {/* 2. Main Content Frame Below */}
      <div className="relative z-10 max-w-[1350px] mx-auto flex flex-col gap-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.3fr] gap-10 pt-4">
          {/* Brand & Socials Column */}
          <div className="flex flex-col gap-4">
            <div className="font-mono text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
              <span className="text-[#36ffe6]">&lt;</span>
              <span>AY</span>
              <span className="text-[#36ffe6]">/&gt;</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs m-0">
              Software Engineer crafting high-performance, accessible, and
              aesthetically pleasing web interfaces.
            </p>
            <div className="flex items-center gap-3 text-lg mt-2">
              <a
                href="https://www.instagram.com/anupamyadav01/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-300 bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:text-[#04121d] hover:bg-[#36ffe6] hover:-translate-y-1 transition-all duration-200"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://www.linkedin.com/in/anupamyadav01/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-300 bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:text-[#04121d] hover:bg-[#36ffe6] hover:-translate-y-1 transition-all duration-200"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="https://github.com/anupamyadav01"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-300 bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:text-[#04121d] hover:bg-[#36ffe6] hover:-translate-y-1 transition-all duration-200"
              >
                <FaGithub className="text-sm" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-bold tracking-widest text-slate-900 dark:text-white uppercase">
              Navigation
            </span>
            <ul className="flex flex-col gap-3 text-sm list-none p-0 m-0">
              <li>
                <NavHashLink
                  smooth
                  to="/#home"
                  scroll={scrollWithOffset}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:translate-x-1.5 transition-all inline-block"
                >
                  Home
                </NavHashLink>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:translate-x-1.5 transition-all inline-block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <NavHashLink
                  smooth
                  to="/#about"
                  scroll={scrollWithOffset}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:translate-x-1.5 transition-all inline-block"
                >
                  About
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  smooth
                  to="/#skills"
                  scroll={scrollWithOffset}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:translate-x-1.5 transition-all inline-block"
                >
                  Skills
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  smooth
                  to="/#contact"
                  scroll={scrollWithOffset}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:translate-x-1.5 transition-all inline-block"
                >
                  Contact
                </NavHashLink>
              </li>
            </ul>
          </div>

          {/* Featured Builds Column */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-bold tracking-widest text-slate-900 dark:text-white uppercase">
              Featured Work
            </span>
            <ul className="flex flex-col gap-3 text-sm list-none p-0 m-0">
              <li>
                <Link
                  to="/projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:translate-x-1.5 transition-all inline-block"
                >
                  Amazon E-Commerce
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:translate-x-1.5 transition-all inline-block"
                >
                  Swiggy Food Engine
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:translate-x-1.5 transition-all inline-block"
                >
                  ATS Resume Builder
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:translate-x-1.5 transition-all inline-block"
                >
                  Threads Social Clone
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-bold tracking-widest text-slate-900 dark:text-white uppercase">
              Get in Touch
            </span>
            <ul className="flex flex-col gap-3 text-sm list-none p-0 m-0">
              <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
                <FaEnvelope className="text-[#36ffe6] text-xs shrink-0" />
                <a
                  href="mailto:anupamy571@gmail.com"
                  className="text-slate-900 dark:text-white hover:text-[#36ffe6] transition-colors"
                >
                  anupamy571@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
                <FaPhoneAlt className="text-[#36ffe6] text-xs shrink-0" />
                <a
                  href="tel:+919982709506"
                  className="text-slate-900 dark:text-white hover:text-[#36ffe6] transition-colors"
                >
                  +91 9982709506
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
                <FaMapMarkerAlt className="text-[#36ffe6] text-xs shrink-0" />
                <span>Jaipur, Rajasthan, India</span>
              </li>
            </ul>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 font-mono text-[11px] w-fit mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              <span>Available for Full-time Roles</span>
            </div>
          </div>
        </div>

        {/* 3. Bottom Row */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-900 text-xs text-slate-500">
          <p className="m-0">
            &copy; {new Date().getFullYear()} Anupam Yadav. Designed &amp;
            Engineered with React &amp; Tailwind.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-[#36ffe6] hover:-translate-y-0.5 transition-all cursor-pointer bg-transparent border-none p-0"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-[10px]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
