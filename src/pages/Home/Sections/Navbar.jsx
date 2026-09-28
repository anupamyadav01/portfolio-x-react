// src/pages/Home/Sections/Navbar.jsx

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
import ThemeToggle from "../../../components/common/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // ================================
  // Detect Navbar Scroll
  // ================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ================================
  // Close Mobile Menu
  // ================================

  const closeMenu = () => setMenuOpen(false);

  // ================================
  // Smooth Scroll With Navbar Offset
  // ================================

  const scrollWithOffset = (el) => {
    const yCoordinate =
      el.getBoundingClientRect().top + window.pageYOffset - 90;

    if (window.lenis) {
      window.lenis.scrollTo(yCoordinate, {
        duration: 1.2,
      });
    } else {
      window.scrollTo({
        top: yCoordinate,
        behavior: "smooth",
      });
    }
  };

  // ================================
  // Navigation Item Classes
  // ================================

  const navItemClass = (isActive) => `
    group relative py-1 px-1 font-medium text-sm inline-block
    transition-all duration-300
    ease-[cubic-bezier(0.34,1.56,0.64,1)]
    hover:-translate-y-1.5 hover:scale-105
    active:translate-y-0 active:scale-95

    ${
      isActive
        ? "text-cyan-600 dark:text-cyan-400 font-semibold"
        : "text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
    }

    after:content-['']
    after:absolute
    after:bottom-0
    after:left-0
    after:w-full
    after:h-[2px]
    after:bg-gradient-to-r
    after:from-cyan-500
    after:to-sky-400
    after:origin-center
    after:transition-transform
    after:duration-300
    after:ease-[cubic-bezier(0.34,1.56,0.64,1)]

    ${
      isActive
        ? "after:scale-x-100"
        : "after:scale-x-0 group-hover:after:scale-x-100"
    }
  `;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none px-4 sm:px-6 py-4 transition-all duration-300">
      {/* ================================
          Main Navbar
      ================================= */}

      <nav
        className={`
          pointer-events-auto
          relative
          w-full
          max-w-[1240px]
          h-16
          rounded-full
          border
          px-5 sm:px-6
          flex items-center justify-between
          transition-all duration-300
          backdrop-blur-2xl

          ${
            scrolled
              ? `
                bg-white/90
                dark:bg-[#070d1b]/90
                border-slate-200/90
                dark:border-cyan-500/25
                shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                dark:shadow-[0_12px_32px_rgba(0,0,0,0.65)]
              `
              : `
                bg-white/75
                dark:bg-[#0b1222]/80
                border-slate-200/70
                dark:border-sky-500/20
                shadow-md
                dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)]
              `
          }
        `}
      >
        {/* ================================
            Logo
        ================================= */}

        <NavHashLink
          smooth
          to="/#home"
          scroll={scrollWithOffset}
          onClick={closeMenu}
          className="flex items-center gap-3 no-underline group"
        >
          {/* Geometric Logo */}

          <div className="w-9 h-9 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_2px_8px_rgba(6,182,212,0.35)]"
            >
              <defs>
                <linearGradient id="ayGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
              </defs>

              <polygon
                points="20,2 36,10 36,30 20,38 4,30 4,10"
                stroke="url(#ayGlow)"
                strokeWidth="1.8"
                className="fill-slate-100/90 dark:fill-slate-900/90"
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

          {/* Logo Text */}

          <div className="flex items-baseline gap-1 select-none">
            <span
              className="
                text-slate-900
                dark:text-white
                font-extrabold
                text-base
                tracking-tight
                group-hover:text-cyan-600
                dark:group-hover:text-cyan-400
                transition-colors
              "
            >
              Anupam<span className="text-cyan-500 animate-pulse">.</span>
            </span>

            <span
              className="
                font-mono
                text-[10px]
                text-slate-500
                dark:text-slate-400
                font-semibold
                uppercase
                tracking-wider
              "
            >
              DEV
            </span>
          </div>
        </NavHashLink>

        {/* ================================
            Desktop Navigation
        ================================= */}

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          <li>
            <Link
              to="/projects"
              onClick={closeMenu}
              className={navItemClass(location.pathname === "/projects")}
            >
              Projects
            </Link>
          </li>

          <li>
            <NavHashLink
              smooth
              to="/#about"
              scroll={scrollWithOffset}
              onClick={closeMenu}
              className={navItemClass(false)}
            >
              About
            </NavHashLink>
          </li>

          <li>
            <NavHashLink
              smooth
              to="/#skills"
              scroll={scrollWithOffset}
              onClick={closeMenu}
              className={navItemClass(false)}
            >
              Skills
            </NavHashLink>
          </li>

          <li>
            <NavHashLink
              smooth
              to="/#contact"
              scroll={scrollWithOffset}
              onClick={closeMenu}
              className={navItemClass(false)}
            >
              Contact
            </NavHashLink>
          </li>
        </ul>

        {/* ================================
            Desktop Right Actions
        ================================= */}

        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle */}

          <ThemeToggle />

          {/* GitHub */}

          <a
            href="https://github.com/anupamyadav01"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="
              w-9 h-9
              rounded-xl
              flex items-center justify-center
              border
              border-slate-300
              dark:border-slate-800
              bg-white/80
              dark:bg-slate-800/60
              text-slate-700
              dark:text-slate-300
              hover:text-white
              hover:bg-slate-900
              dark:hover:text-slate-900
              dark:hover:bg-cyan-400
              dark:hover:border-cyan-400
              hover:scale-110
              active:scale-95
              transition-all
              text-sm
              shadow-sm
            "
          >
            <FaGithub className="text-base" />
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/anupamyadav01/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="
              w-9 h-9
              rounded-xl
              flex items-center justify-center
              border
              border-slate-300
              dark:border-slate-800
              bg-white/80
              dark:bg-slate-800/60
              text-slate-700
              dark:text-slate-300
              hover:text-white
              hover:bg-[#0077b5]
              dark:hover:text-slate-900
              dark:hover:bg-cyan-400
              dark:hover:border-cyan-400
              hover:scale-110
              active:scale-95
              transition-all
              text-sm
              shadow-sm
            "
          >
            <FaLinkedinIn />
          </a>

          {/* Hire Me */}

          <a
            href="https://www.linkedin.com/in/anupamyadav01/"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              font-bold
              text-xs
              bg-gradient-to-r
              from-cyan-400
              to-sky-500
              text-slate-950
              shadow-md
              shadow-cyan-500/20
              hover:shadow-cyan-500/40
              hover:scale-105
              active:scale-95
              transition-all
            "
          >
            <span>Hire Me</span>

            <FaArrowRight
              className="
                text-[10px]
                transition-transform
                duration-300
              "
            />
          </a>
        </div>

        {/* ================================
            Mobile Actions
        ================================= */}

        <div className="md:hidden flex items-center gap-2 pointer-events-auto">
          {/* Theme Toggle */}

          <ThemeToggle />

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation"
            aria-expanded={menuOpen}
            className="
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-xl
              border
              border-slate-300
              dark:border-slate-800
              bg-slate-100
              dark:bg-slate-800/70
              text-slate-800
              dark:text-slate-200
              text-base
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-500/50
              transition-all
              active:scale-95
            "
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* ================================
          Mobile Drawer
      ================================= */}

      <div
        className={`
          pointer-events-auto
          md:hidden
          w-full
          max-w-[1240px]
          mt-2
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-800
          bg-white/95
          dark:bg-[#09101f]/95
          backdrop-blur-2xl
          overflow-hidden
          transition-all
          duration-300
          shadow-xl

          ${
            menuOpen
              ? "max-h-96 opacity-100 p-5"
              : "max-h-0 opacity-0 p-0 border-transparent"
          }
        `}
      >
        <div className="flex flex-col gap-4 text-center">
          {/* Projects */}

          <Link
            to="/projects"
            onClick={closeMenu}
            className={`
              text-sm
              font-medium
              py-1
              transition-colors

              ${
                location.pathname === "/projects"
                  ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                  : "text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
              }
            `}
          >
            Projects
          </Link>

          {/* About */}

          <NavHashLink
            smooth
            to="/#about"
            scroll={scrollWithOffset}
            onClick={closeMenu}
            className="
              text-sm
              font-medium
              py-1
              text-slate-700
              hover:text-cyan-600
              dark:text-slate-300
              dark:hover:text-cyan-400
              transition-colors
            "
          >
            About
          </NavHashLink>

          {/* Skills */}

          <NavHashLink
            smooth
            to="/#skills"
            scroll={scrollWithOffset}
            onClick={closeMenu}
            className="
              text-sm
              font-medium
              py-1
              text-slate-700
              hover:text-cyan-600
              dark:text-slate-300
              dark:hover:text-cyan-400
              transition-colors
            "
          >
            Skills
          </NavHashLink>

          {/* Contact */}

          <NavHashLink
            smooth
            to="/#contact"
            scroll={scrollWithOffset}
            onClick={closeMenu}
            className="
              text-sm
              font-medium
              py-1
              text-slate-700
              hover:text-cyan-600
              dark:text-slate-300
              dark:hover:text-cyan-400
              transition-colors
            "
          >
            Contact
          </NavHashLink>

          {/* Mobile Bottom Actions */}

          <div
            className="
              pt-3
              border-t
              border-slate-200
              dark:border-slate-800
              flex
              items-center
              justify-center
              gap-3
            "
          >
            {/* GitHub */}

            <a
              href="https://github.com/anupamyadav01"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                w-10
                h-10
                rounded-xl
                flex
                items-center
                justify-center
                border
                border-slate-200
                dark:border-slate-700
                bg-slate-100
                dark:bg-slate-800
                text-slate-700
                dark:text-slate-300
                hover:text-cyan-600
                dark:hover:text-cyan-400
                transition-colors
                text-sm
              "
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/anupamyadav01/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                w-10
                h-10
                rounded-xl
                flex
                items-center
                justify-center
                border
                border-slate-200
                dark:border-slate-700
                bg-slate-100
                dark:bg-slate-800
                text-slate-700
                dark:text-slate-300
                hover:text-cyan-600
                dark:hover:text-cyan-400
                transition-colors
                text-sm
              "
            >
              <FaLinkedinIn />
            </a>

            {/* Hire Me */}

            <a
              href="https://www.linkedin.com/in/anupamyadav01/"
              target="_blank"
              rel="noreferrer"
              className="
                flex-1
                py-2.5
                rounded-xl
                font-bold
                text-xs
                bg-gradient-to-r
                from-cyan-400
                to-sky-500
                text-slate-950
                text-center
                shadow-md
                shadow-cyan-500/20
                hover:shadow-cyan-500/40
                transition-all
              "
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
