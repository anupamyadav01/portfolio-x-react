import { useRef, useEffect } from "react";
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
  const watermarkRef = useRef(null);

  // Smooth zero-re-render interpolation state
  const pointer = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    targetAlpha: 0,
    currentAlpha: 0,
  });

  const handleMouseMove = (e) => {
    const el = watermarkRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    pointer.current.targetX = e.clientX - rect.left;
    pointer.current.targetY = e.clientY - rect.top;
    pointer.current.targetAlpha = 1;
  };

  const handleMouseEnter = (e) => {
    const el = watermarkRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Snap on initial entry if faded out so light doesn't travel from (0,0)
    if (pointer.current.currentAlpha < 0.05) {
      pointer.current.currentX = x;
      pointer.current.currentY = y;
    }

    pointer.current.targetX = x;
    pointer.current.targetY = y;
    pointer.current.targetAlpha = 1;
  };

  const handleMouseLeave = () => {
    pointer.current.targetAlpha = 0;
  };

  useEffect(() => {
    let rafId;
    const p = pointer.current;

    const update = () => {
      // Buttery smooth ease
      p.currentX += (p.targetX - p.currentX) * 0.08;
      p.currentY += (p.targetY - p.currentY) * 0.08;
      p.currentAlpha += (p.targetAlpha - p.currentAlpha) * 0.07;

      const el = watermarkRef.current;
      if (el) {
        el.style.setProperty("--mx", `${p.currentX.toFixed(1)}px`);
        el.style.setProperty("--my", `${p.currentY.toFixed(1)}px`);
        el.style.setProperty("--alpha", p.currentAlpha.toFixed(3));
      }

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollWithOffset = (el) => {
    const yCoord = el.getBoundingClientRect().top + window.pageYOffset - 90;
    if (window.lenis) {
      window.lenis.scrollTo(yCoord, { duration: 1.2 });
    } else {
      window.scrollTo({ top: yCoord, behavior: "smooth" });
    }
  };

  const watermarkTextClass =
    "block font-['Archivo'] font-extrabold tracking-[-0.03em] text-[clamp(4.2rem,15.5vw,16.5rem)] leading-[0.95] select-none " +
    "[font-stretch:150%] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)]";

  return (
    <footer className="relative w-full bg-[#030712] text-slate-100 pt-16 pb-8 px-6 sm:px-10 lg:px-14 overflow-hidden border-t border-white/[0.08]">
      {/* Load 'Syne' font (the exact wide geometric font with that 'r', 'y', 'a' shape) */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');`}
      </style>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        {/* 2. Exact Sheryians-Style Outline + Warm Copper Inner Fill ("Anupam") */}
        <div
          ref={watermarkRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            "--mx": "50%",
            "--my": "50%",
            "--alpha": 0,
          }}
          className="relative w-full flex justify-center items-center text-center py-8 sm:py-12 select-none cursor-default overflow-hidden"
        >
          <div className="relative inline-block w-full">
            {/* Layer 1 (Image 2): Warm burnt-copper inner gradient fill with larger 340px spread */}
            <span
              aria-hidden
              className={`${watermarkTextClass} text-transparent [-webkit-background-clip:text] [background-clip:text]`}
              style={{
                opacity: "var(--alpha)",
                backgroundImage: `radial-gradient(
                  circle 340px at var(--mx) var(--my),
                  rgba(198, 78, 34, 0.78) 0%,
                  rgba(145, 52, 20, 0.48) 38%,
                  rgba(75, 25, 10, 0.18) 68%,
                  transparent 100%
                )`,
              }}
            >
              Anupam
            </span>

            {/* Layer 2 (Image 1): Crisp, clearly visible hollow border sitting cleanly on top */}
            <span
              className={`${watermarkTextClass} absolute inset-0 pointer-events-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.22)]`}
            >
              Anupam
            </span>
          </div>
        </div>
        {/* 1. Top Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] gap-10 lg:gap-12 pb-14 border-b border-white/[0.08]">
          {/* Brand & Socials */}
          <div className="flex flex-col gap-4">
            <div className="font-mono text-2xl font-black text-white tracking-tighter">
              <span className="text-[#E7602E]">&lt;</span>
              <span>AY</span>
              <span className="text-[#E7602E]">/&gt;</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs m-0">
              Software Engineer crafting high-performance, accessible, and
              aesthetically pleasing web systems.
            </p>
            <div className="flex items-center gap-2.5 mt-1">
              <a
                href="https://www.instagram.com/anupamyadav01/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 bg-white/[0.03] border border-white/10 hover:text-white hover:border-[#E7602E]/60 hover:bg-[#E7602E]/15 transition-all"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://www.linkedin.com/in/anupamyadav01/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 bg-white/[0.03] border border-white/10 hover:text-white hover:border-[#E7602E]/60 hover:bg-[#E7602E]/15 transition-all"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="https://github.com/anupamyadav01"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 bg-white/[0.03] border border-white/10 hover:text-white hover:border-[#E7602E]/60 hover:bg-[#E7602E]/15 transition-all"
              >
                <FaGithub className="text-sm" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[11px] font-semibold tracking-widest text-slate-200 uppercase">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5 text-sm list-none p-0 m-0">
              <li>
                <NavHashLink
                  smooth
                  to="/#home"
                  scroll={scrollWithOffset}
                  className="text-slate-400 hover:text-[#E7602E] transition-colors inline-block"
                >
                  Home
                </NavHashLink>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-slate-400 hover:text-[#E7602E] transition-colors inline-block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <NavHashLink
                  smooth
                  to="/#about"
                  scroll={scrollWithOffset}
                  className="text-slate-400 hover:text-[#E7602E] transition-colors inline-block"
                >
                  About
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  smooth
                  to="/#skills"
                  scroll={scrollWithOffset}
                  className="text-slate-400 hover:text-[#E7602E] transition-colors inline-block"
                >
                  Skills
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  smooth
                  to="/#contact"
                  scroll={scrollWithOffset}
                  className="text-slate-400 hover:text-[#E7602E] transition-colors inline-block"
                >
                  Contact
                </NavHashLink>
              </li>
            </ul>
          </div>

          {/* Featured Work */}
          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[11px] font-semibold tracking-widest text-slate-200 uppercase">
              Featured Work
            </span>
            <ul className="flex flex-col gap-2.5 text-sm list-none p-0 m-0">
              <li>
                <Link
                  to="/projects"
                  className="text-slate-400 hover:text-[#E7602E] transition-colors inline-block"
                >
                  Amazon E-Commerce
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-slate-400 hover:text-[#E7602E] transition-colors inline-block"
                >
                  Swiggy Food Engine
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-slate-400 hover:text-[#E7602E] transition-colors inline-block"
                >
                  ATS Resume Builder
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-slate-400 hover:text-[#E7602E] transition-colors inline-block"
                >
                  Threads Social Clone
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[11px] font-semibold tracking-widest text-slate-200 uppercase">
              Get in Touch
            </span>
            <ul className="flex flex-col gap-2.5 text-sm list-none p-0 m-0">
              <li className="flex items-center gap-2.5 text-slate-400">
                <FaEnvelope className="text-[#E7602E] shrink-0 text-xs" />
                <a
                  href="mailto:anupamy571@gmail.com"
                  className="hover:text-[#E7602E] transition-colors"
                >
                  anupamy571@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <FaPhoneAlt className="text-[#E7602E] shrink-0 text-xs" />
                <a
                  href="tel:+919982709506"
                  className="hover:text-[#E7602E] transition-colors"
                >
                  +91 9982709506
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <FaMapMarkerAlt className="text-[#E7602E] shrink-0 text-xs" />
                <span>Jaipur, Rajasthan, India</span>
              </li>
            </ul>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] w-fit mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full-time Roles</span>
            </div>
          </div>
        </div>

        {/* 3. Bottom Copyright Bar */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-5 border-t border-white/[0.08] text-xs text-slate-500">
          <p className="m-0">
            Copyright &copy; {new Date().getFullYear()} Anupam Yadav. All Rights
            Reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#E7602E] hover:-translate-y-0.5 transition-all cursor-pointer bg-transparent border-none p-0 font-medium"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-[10px]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
