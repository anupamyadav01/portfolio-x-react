import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

// Profile images from your images folder
import profile1 from "../../../../public/images/profile-picture.png";
import profile2 from "../../../../public/images/profile-image2.jpg";

export default function Hero({ id }) {
  const [isHovered, setIsHovered] = useState(false);

  const firstName = "Anupam".split("");
  const lastName = "Yadav".split("");

  return (
    <section
      id={id}
      className="relative min-h-[92vh] flex items-center justify-center py-20 lg:py-24 overflow-hidden bg-[#040812] text-slate-100"
    >
      {/* High-Contrast Visible Grid Pattern in Pure Dark Mode */}
      <div
        className="absolute inset-0 pointer-events-none opacity-55 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(231, 96, 46, 0.22) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(231, 96, 46, 0.22) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 45%, black 45%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 45%, black 45%, transparent 95%)",
        }}
      />

      {/* Main Grid Container - Matched to Navbar's max-w-7xl and padding */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
        {/* Left Column: Left-Right Name Split & Bio */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7602E]/10 border border-[#E7602E]/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E7602E] shadow-[0_0_10px_#E7602E] animate-pulse" />
            <span className="text-xs font-semibold text-[#E7602E] tracking-wider uppercase">
              Available for Opportunities
            </span>
          </div>

          {/* Creative Name: Anupam (Left), Yadav (Right) */}
          <div className="w-full max-w-2xl">
            <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-[#E7602E] font-semibold mb-2">
              Hi, my name is
            </p>

            <div className="flex flex-col font-black tracking-tight leading-[0.85] w-full">
              {/* First Name */}
              <div className="text-left text-6xl sm:text-8xl lg:text-9xl text-white select-none">
                {firstName.map((char, index) => (
                  <span
                    key={index}
                    className="group inline-block h-[1em] overflow-hidden align-bottom leading-none"
                  >
                    <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-1/2 group-hover:text-[#E7602E]">
                      <span className="block">
                        {char === " " ? "\u00A0" : char}
                      </span>
                      <span className="block">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    </span>
                  </span>
                ))}
              </div>

              {/* Last Name */}
              <div className="text-right text-6xl sm:text-8xl lg:text-9xl select-none pb-2">
                {lastName.map((char, index) => (
                  <span
                    key={index}
                    className="group inline-block h-[1em] overflow-hidden align-bottom leading-none"
                  >
                    <span className="inline-block bg-gradient-to-r from-[#E7602E] via-[#ff7c47] to-[#ffa177] bg-clip-text text-transparent transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-1/2">
                      <span className="block">
                        {char === " " ? "\u00A0" : char}
                      </span>
                      <span className="block">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Clean Professional Bio */}
          <p className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Software Engineer crafting high-performance, accessible web
            applications with clean architecture, modern React patterns, and
            polished user interactions.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-2 w-full sm:w-auto">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#E7602E] hover:bg-[#ff723b] text-white shadow-lg shadow-[#E7602E]/25 hover:shadow-[#E7602E]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>View All Projects</span>
              <FaArrowRight className="text-xs" />
            </Link>

            <a
              href="/AnupamResume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm border border-white/10 bg-slate-900/80 backdrop-blur-sm text-slate-200 hover:border-[#E7602E] hover:text-[#E7602E] transition-all"
            >
              <FaDownload className="text-xs" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Wall Sticky Note / Pinned Polaroid Card */}
        <div className="lg:col-span-5 flex justify-center py-6">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // Added origin-top so the hover rotation swings from the pin naturally
            className={`relative group w-full max-w-[370px] origin-top transition-all duration-500 ease-out cursor-pointer ${
              isHovered ? "rotate-0 scale-[1.02]" : "-rotate-2 hover:rotate-0"
            }`}
          >
            {/* Top Push Pin Element */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none drop-shadow-md">
              {/* Drop shadow for the pin on the paper */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-black/30 blur-[2px] rounded-full" />

              {/* Pin Head */}
              <div className="relative w-5 h-5 rounded-full bg-gradient-to-br from-[#ff9c6e] via-[#E7602E] to-[#b84318] shadow-[0_2px_4px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.5)] border border-[#8a2f0e]">
                {/* Metallic Highlight */}
                <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/60 rounded-full" />
              </div>
            </div>

            {/* Polaroid Frame */}
            <div className="relative rounded-2xl p-3.5 pb-4 bg-[#0c121e] border-2 border-white/10 shadow-2xl transition-colors">
              {/* Image Window */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-950 border border-white/10">
                {/* Photo 1: Primary */}
                <img
                  src={profile1}
                  alt="Anupam Yadav Primary"
                  className={`absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHovered
                      ? "opacity-0 scale-105 blur-[2px] pointer-events-none"
                      : "opacity-100 scale-100 blur-0"
                  }`}
                />

                {/* Photo 2: Hover Switch */}
                <img
                  src={profile2}
                  alt="Anupam Yadav Alternate"
                  className={`absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHovered
                      ? "opacity-100 scale-100 blur-0"
                      : "opacity-0 scale-95 blur-[2px] pointer-events-none"
                  }`}
                />

                {/* Subtitle tag at top-right of image */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-black/60 text-white backdrop-blur-md border border-white/15">
                    <HiSparkles className="text-[#E7602E] text-xs" />
                    {isHovered ? "SWITCHED" : "HOVER"}
                  </span>
                </div>
              </div>

              {/* Bottom Sticky Note Label */}
              <div className="pt-3 px-1 flex items-center justify-between">
                <div>
                  <p className="font-mono text-xs font-bold text-slate-200 tracking-tight">
                    Anupam Yadav
                  </p>
                  <p className="text-[10px] font-mono text-[#E7602E]">
                    Frontend Engineer
                  </p>
                </div>
                <span className="font-mono text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-white/10">
                  pinned
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  id: PropTypes.string,
};
