import PropTypes from "prop-types";
import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaLightbulb,
  FaAward,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

// Place your profile image in src/assets/avatar.jpg or adjust this path
import profileImg from "../../../images/profile-picture.png";

export default function About({ id = "about" }) {
  return (
    <section
      id={id}
      className="relative w-full py-24 px-6 sm:px-10 overflow-hidden bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-900 dark:text-white transition-colors duration-300"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none bg-radial from-cyan-400/10 via-sky-500/5 to-transparent dark:from-cyan-400/5" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">
        <div className="text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-[#36ffe6] font-mono text-xs uppercase tracking-wider">
            <FaUserGraduate className="text-sm" />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Engineering with{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Precision &amp; Passion
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging clean software engineering principles with high-polish UI
            design to deliver fluid digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Profile Photo, Name, and Location */}
          <div className="rounded-2xl p-7 sm:p-8 flex flex-col items-center text-center justify-between border border-slate-200 dark:border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-xl dark:shadow-2xl">
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 opacity-60 blur group-hover:opacity-100 transition duration-300" />
                <img
                  src={profileImg}
                  alt="Anupam Yadav"
                  className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl object-cover border-2 border-white dark:border-slate-200 dark:border-slate-800 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80";
                  }}
                />
              </div>

              <div className="mt-2">
                <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-900 dark:text-white">
                  Anupam Yadav
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-[#36ffe6] mt-1">
                  Software Engineer &amp; Frontend Specialist
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
                <FaMapMarkerAlt className="text-cyan-500" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>

            <div className="w-full mt-6 pt-4 border-t border-slate-200 dark:border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-500 dark:text-slate-600 dark:text-slate-400">
                Ready for Full-Time Roles
              </span>
            </div>
          </div>

          {/* Card 2: Core Engineering Narrative */}
          <div className="md:col-span-2 rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-slate-200 dark:border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-xl dark:shadow-2xl">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-500/10 text-cyan-600 dark:text-[#36ffe6] text-xl">
                <FaLaptopCode />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Architecting Modern Web Applications
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a Software Engineer focused on crafting accessible,
                high-performance web systems. With deep experience across the
                React ecosystem, TypeScript, and modern state architectures, I
                prioritize code cleanliness, reusability, and rendering
                performance.
              </p>
              <p className="text-slate-600 dark:text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether implementing real-time WebSocket communication, managing
                modular state, or fine-tuning micro-interactions, my approach
                couples strict technical discipline with user-first design
                aesthetics.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Core Stack:
              </span>
              <div className="flex items-center gap-2.5 text-lg text-slate-600 dark:text-slate-300">
                <SiReact
                  title="React"
                  className="hover:text-[#61dafb] transition-colors"
                />
                <SiTypescript
                  title="TypeScript"
                  className="hover:text-[#3178c6] transition-colors"
                />
                <SiTailwindcss
                  title="Tailwind CSS"
                  className="hover:text-[#38bdf8] transition-colors"
                />
                <SiNodedotjs
                  title="Node.js"
                  className="hover:text-[#68a063] transition-colors"
                />
                <SiMongodb
                  title="MongoDB"
                  className="hover:text-[#47a248] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Card 3: Principles & Philosophy */}
          <div className="rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-slate-200 dark:border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-xl dark:shadow-2xl">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xl">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                Core Philosophies
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <span>
                    <strong>Component Modularity:</strong> Decoupled, reusable
                    logic tailored for long-term scalability.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <span>
                    <strong>Speed &amp; SEO:</strong> Minimal bundle weight,
                    responsive assets, and sub-second load times.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <span>
                    <strong>Accessibility First:</strong> Semantic HTML
                    hierarchies and frictionless keyboard navigation.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: CS Foundations */}
          <div className="md:col-span-2 rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-slate-200 dark:border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-xl dark:shadow-2xl">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xl">
                <FaAward />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Computer Science Foundations
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Backed by formal understanding in Core Computer Science:
                Object-Oriented Programming (OOPs), Database Management Systems
                (DBMS), Operating Systems, and Computer Networks. This
                structural foundation informs clean architectural choices in
                client-side code.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-950/50 text-center">
                <span className="block text-xs font-mono text-cyan-600 dark:text-[#36ffe6]">
                  OOPs
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Modular Patterns
                </span>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-950/50 text-center">
                <span className="block text-xs font-mono text-cyan-600 dark:text-[#36ffe6]">
                  DBMS
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Schema &amp; Query
                </span>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-950/50 text-center">
                <span className="block text-xs font-mono text-cyan-600 dark:text-[#36ffe6]">
                  OS
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Processes &amp; Memory
                </span>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-950/50 text-center">
                <span className="block text-xs font-mono text-cyan-600 dark:text-[#36ffe6]">
                  Networks
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  HTTP &amp; WebSockets
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  id: PropTypes.string,
};
