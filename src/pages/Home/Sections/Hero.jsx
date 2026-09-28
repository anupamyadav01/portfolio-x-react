import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload, FaReact, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

export default function Hero({ id }) {
  const nameChars = "Anupam Yadav".split("");

  return (
    <section
      id={id}
      className="
        relative
        min-h-[94vh]
        flex
        items-center
        justify-center
        px-6
        py-24
        sm:py-28
        overflow-hidden
        bg-slate-50
        dark:bg-[#030712]
        text-slate-900
        dark:text-slate-100
        transition-colors
        duration-300
      "
    >
      {/* =================================
          Background Ambient Orbs
      ================================== */}

      <div
        className="
          absolute
          top-[15%]
          left-[15%]
          w-[420px]
          sm:w-[550px]
          h-[420px]
          sm:h-[550px]
          rounded-full
          blur-[130px]
          pointer-events-none
          bg-radial
          from-cyan-400/20
          via-sky-500/5
          to-transparent
          dark:from-cyan-400/10
          dark:via-sky-500/5
        "
      />

      <div
        className="
          absolute
          bottom-[10%]
          right-[15%]
          w-[350px]
          sm:w-[460px]
          h-[350px]
          sm:h-[460px]
          rounded-full
          blur-[130px]
          pointer-events-none
          bg-radial
          from-indigo-500/15
          to-transparent
          dark:from-indigo-500/10
        "
      />

      {/* =================================
          Main Hero Container
      ================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-[1240px]
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[1.25fr_0.75fr]
          items-center
          gap-12
          sm:gap-14
        "
      >
        {/* =================================
            Left Column
        ================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            lg:items-start
            text-center
            lg:text-left
            gap-5
          "
        >
          {/* Status Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2.5
              px-3.5
              py-1.5
              rounded-full
              bg-emerald-500/10
              border
              border-emerald-500/25
            "
          >
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-emerald-400
                shadow-[0_0_10px_#34d399]
                animate-pulse
              "
            />

            <span
              className="
                text-xs
                font-medium
                text-emerald-600
                dark:text-emerald-300
                tracking-wide
              "
            >
              Available for Opportunities
            </span>
          </div>

          {/* Heading */}

          <div>
            <span
              className="
                font-mono
                text-sm
                tracking-wider
                uppercase
                text-cyan-600
                dark:text-[#36ffe6]
              "
            >
              Hi, my name is
            </span>

            <h1
              className="
                mt-1
                text-5xl
                sm:text-7xl
                lg:text-8xl
                font-black
                tracking-tight
                leading-none
                text-slate-900
                dark:text-white
              "
            >
              {nameChars.map((char, index) => (
                <span
                  key={index}
                  className="
                    inline-block
                    transition-transform
                    duration-200
                    hover:-translate-y-2
                    hover:text-cyan-500
                    dark:hover:text-[#36ffe6]
                  "
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>

          {/* =================================
              Motivation Quote
          ================================== */}

          <div
            className="
              relative
              w-full
              max-w-lg
              p-4
              rounded-r-xl
              border-t-2
              lg:border-t-0
              lg:border-l-2
              border-cyan-500
              dark:border-[#36ffe6]
              bg-slate-200/50
              dark:bg-slate-900/50
              backdrop-blur-md
            "
          >
            <p
              className="
                italic
                text-sm
                sm:text-base
                text-slate-700
                dark:text-slate-200
              "
            >
              &ldquo;How to suceed in life - having a great aim, continuously
              acquire knowledge, hard work, and perseverance - then anything can
              be achieved.&rdquo;
            </p>

            <span
              className="
                block
                mt-1
                font-mono
                text-xl
                text-sky-600
                dark:text-sky-400
                uppercase
                tracking-wider
              "
            >
              — A. P. J. Abdul Kalam Sir
            </span>
          </div>

          {/* Description */}

          <p
            className="
              max-w-xl
              text-base
              text-slate-600
              dark:text-slate-400
              leading-relaxed
            "
          >
            Software Engineer crafting high-performance, accessible web
            applications with clean architecture, modern React patterns, and
            polished user interactions.
          </p>

          {/* =================================
              Technology Pills
          ================================== */}

          <div
            className="
              flex
              flex-wrap
              justify-center
              lg:justify-start
              gap-2.5
            "
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-lg
                text-xs
                font-medium
                border
                border-slate-300
                dark:border-slate-800
                bg-white/70
                dark:bg-slate-900/60
                text-slate-700
                dark:text-slate-300
              "
            >
              <FaReact className="text-[#61dafb]" />
              React.js
            </span>

            <span
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-lg
                text-xs
                font-medium
                border
                border-slate-300
                dark:border-slate-800
                bg-white/70
                dark:bg-slate-900/60
                text-slate-700
                dark:text-slate-300
              "
            >
              <SiTypescript className="text-[#3178c6]" />
              TypeScript
            </span>

            <span
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-lg
                text-xs
                font-medium
                border
                border-slate-300
                dark:border-slate-800
                bg-white/70
                dark:bg-slate-900/60
                text-slate-700
                dark:text-slate-300
              "
            >
              <FaJsSquare className="text-[#f7df1e]" />
              JavaScript
            </span>

            <span
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-lg
                text-xs
                font-medium
                border
                border-slate-300
                dark:border-slate-800
                bg-white/70
                dark:bg-slate-900/60
                text-slate-700
                dark:text-slate-300
              "
            >
              <SiTailwindcss className="text-[#38bdf8]" />
              Tailwind
            </span>
          </div>

          {/* =================================
              CTA Buttons
          ================================== */}

          <div
            className="
              flex
              flex-wrap
              justify-center
              lg:justify-start
              items-center
              gap-4
              pt-2
              w-full
              sm:w-auto
            "
          >
            {/* View Projects */}

            <Link
              to="/projects"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                w-full
                sm:w-auto
                px-6
                py-3
                rounded-xl
                font-bold
                text-sm
                bg-gradient-to-r
                from-cyan-400
                to-sky-600
                text-slate-950
                shadow-lg
                shadow-cyan-500/20
                hover:-translate-y-0.5
                transition-transform
              "
            >
              <span>View Projects</span>
              <FaArrowRight />
            </Link>

            {/* Resume */}

            <a
              href="/Anupam_Yadav_Resume.pdf"
              download
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                w-full
                sm:w-auto
                px-6
                py-3
                rounded-xl
                font-medium
                text-sm
                border
                border-slate-300
                dark:border-slate-700
                bg-white
                dark:bg-slate-900
                text-slate-800
                dark:text-slate-200
                hover:border-cyan-500
                hover:text-cyan-500
                dark:hover:border-[#36ffe6]
                dark:hover:text-[#36ffe6]
                transition-all
              "
            >
              <FaDownload />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* =================================
            Right Column - Terminal Card
        ================================== */}

        <div className="flex justify-center">
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.02}
            className="w-full max-w-[440px]"
          >
            <div
              className="
                rounded-2xl
                p-6
                flex
                flex-col
                gap-5
                border
                border-slate-200
                dark:border-sky-500/20
                bg-white/80
                dark:bg-slate-900/75
                backdrop-blur-xl
                shadow-2xl
                dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]
                transition-colors
                duration-300
              "
            >
              {/* Terminal Header */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  pb-3
                  border-b
                  border-slate-200
                  dark:border-slate-800
                "
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>

                <span
                  className="
                    font-mono
                    text-xs
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  developer.ts
                </span>

                <a
                  href="https://github.com/anupamyadav01"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-slate-500
                    hover:text-cyan-500
                    transition-colors
                  "
                  aria-label="GitHub"
                >
                  <FiExternalLink />
                </a>
              </div>

              {/* Terminal Code */}

              <div
                className="
                  font-mono
                  text-sm
                  leading-relaxed
                  text-slate-700
                  dark:text-slate-300
                "
              >
                <p>
                  <span className="text-purple-600 dark:text-purple-400">
                    const
                  </span>{" "}
                  engineer = &#123;
                </p>

                <p className="pl-5">
                  name:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    &apos;Anupam Yadav&apos;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  discipline:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    &apos;Frontend Engineering&apos;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  corePhilosophy:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    &apos;Clean Code &amp; Speed&apos;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  productionReady:{" "}
                  <span className="text-sky-600 dark:text-sky-400">true</span>
                </p>

                <p>&#125;;</p>
              </div>

              {/* Terminal Stats */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-3
                  pt-4
                  border-t
                  border-slate-200
                  dark:border-slate-800
                "
              >
                <div
                  className="
                    p-3
                    rounded-lg
                    border
                    border-slate-200
                    dark:border-slate-800
                    bg-slate-100/70
                    dark:bg-slate-950/50
                  "
                >
                  <span
                    className="
                      block
                      text-sm
                      font-bold
                      text-cyan-600
                      dark:text-[#36ffe6]
                    "
                  >
                    Modern UI
                  </span>

                  <span
                    className="
                      text-[11px]
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Accessible &amp; Fluid
                  </span>
                </div>

                <div
                  className="
                    p-3
                    rounded-lg
                    border
                    border-slate-200
                    dark:border-slate-800
                    bg-slate-100/70
                    dark:bg-slate-950/50
                  "
                >
                  <span
                    className="
                      block
                      text-sm
                      font-bold
                      text-cyan-600
                      dark:text-[#36ffe6]
                    "
                  >
                    Performant
                  </span>

                  <span
                    className="
                      text-[11px]
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Optimized Builds
                  </span>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  id: PropTypes.string,
};
