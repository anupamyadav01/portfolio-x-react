import { useState } from "react";
import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
import { DiJava, DiGit } from "react-icons/di";
import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiFirebase,
  SiPostman,
  SiVisualstudiocode,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiSocketdotio,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";

const skillsData = [
  {
    name: "JavaScript",
    category: "Languages",
    icon: <TbBrandJavascript className="text-[#F7DF1E]" />,
    level: "Advanced",
    glow: "#F7DF1E",
  },
  {
    name: "TypeScript",
    category: "Languages",
    icon: <SiTypescript className="text-[#3178C6]" />,
    level: "Proficient",
    glow: "#3178C6",
  },
  {
    name: "Java",
    category: "Languages",
    icon: <DiJava className="text-[#EA2D2E]" />,
    level: "Core / OOPs",
    glow: "#EA2D2E",
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: <SiHtml5 className="text-[#E34F26]" />,
    level: "Semantic UI",
    glow: "#E34F26",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: <SiCss3 className="text-[#1572B6]" />,
    level: "Responsive",
    glow: "#1572B6",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: <SiReact className="text-[#61DAFB]" />,
    level: "Advanced",
    glow: "#61DAFB",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: (
      <SiNextdotjs className="text-slate-900 dark:text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
    ),
    level: "Modern SSR",
    glow: "#ffffff",
  },
  {
    name: "Redux Toolkit",
    category: "Frontend",
    icon: <SiRedux className="text-[#764ABC]" />,
    level: "Global State",
    glow: "#764ABC",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <RiTailwindCssFill className="text-[#38BDF8]" />,
    level: "Utility UI",
    glow: "#38BDF8",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <SiNodedotjs className="text-[#68A063]" />,
    level: "REST APIs",
    glow: "#68A063",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: <SiExpress className="text-[#61DAFB]" />,
    level: "Middleware",
    glow: "#61DAFB",
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: <SiMongodb className="text-[#47A248]" />,
    level: "NoSQL DB",
    glow: "#47A248",
  },
  {
    name: "WebSockets",
    category: "Backend",
    icon: <SiSocketdotio className="text-[#36FFE6]" />,
    level: "Real-time",
    glow: "#36FFE6",
  },
  {
    name: "Firebase",
    category: "Backend",
    icon: <SiFirebase className="text-[#FFCA28]" />,
    level: "BaaS & Auth",
    glow: "#FFCA28",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: <DiGit className="text-[#F05032]" />,
    level: "Version Control",
    glow: "#F05032",
  },
  {
    name: "Postman",
    category: "Tools",
    icon: <SiPostman className="text-[#FF6C37]" />,
    level: "API Testing",
    glow: "#FF6C37",
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: <SiVisualstudiocode className="text-[#007ACC]" />,
    level: "IDE",
    glow: "#007ACC",
  },
  {
    name: "Figma",
    category: "Tools",
    icon: <SiFigma className="text-[#F24E1E]" />,
    level: "UI Prototyping",
    glow: "#F24E1E",
  },
];

const categories = ["All", "Frontend", "Backend", "Languages", "Tools"];

function SkillTile({ skill }) {
  const [coords, setCoords] = useState({ x: -999, y: -999, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setCoords((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={900}
      scale={1.04}
      transitionSpeed={600}
      className="h-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group h-full rounded-2xl p-6 flex flex-col items-center justify-between text-center gap-3 overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0d1527]/80 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_10px_30px_rgba(54,255,230,0.15)]"
      >
        {/* Dynamic Glow using the skill's brand color */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl"
          style={{
            opacity: coords.opacity,
            background: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, ${skill.glow}33, transparent 80%)`,
          }}
        />

        {/* Icon with Brand Glow */}
        <div className="relative z-10 text-5xl h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
          {skill.icon}
        </div>

        {/* Labels */}
        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-wide">
            {skill.name}
          </h3>
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md border border-cyan-500/20 bg-cyan-950/40 text-cyan-300">
            {skill.level}
          </span>
        </div>
      </div>
    </Tilt>
  );
}

SkillTile.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    level: PropTypes.string.isRequired,
    glow: PropTypes.string.isRequired,
  }).isRequired,
};

export default function Skills({ id = "skills" }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((item) => item.category === activeCategory);

  return (
    <section
      id={id}
      className="relative w-full py-24 px-6 sm:px-10 overflow-hidden bg-[#030712] text-slate-900 dark:text-white"
    >
      {/* Colorful Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none bg-gradient-to-tr from-cyan-500/15 via-sky-500/10 to-indigo-500/10" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[#36ffe6] font-mono text-xs uppercase tracking-wider">
            <FaLaptopCode className="text-sm text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-[#36ffe6] via-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            A battle-tested set of languages, frameworks, and architecture tools
            I use to build scalable web applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#0b111e]/90 backdrop-blur-xl shadow-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#36ffe6] text-[#04121d] shadow-[0_2px_14px_rgba(54,255,230,0.35)]"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
          {filteredSkills.map((skill) => (
            <SkillTile key={skill.name} skill={skill} />
          ))}
        </div>

        {/* CS Knowledge Row with Brand Colors */}
        <div className="w-full mt-4 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#0b111e]/80 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-[#36ffe6]">
            <FaServer className="text-cyan-400" />
            <span>Core CS Foundations:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-[#030712] text-xs font-medium text-slate-300 hover:border-cyan-500/40 transition-colors">
              <FaLaptopCode className="text-cyan-400" /> OOPs
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-[#030712] text-xs font-medium text-slate-300 hover:border-emerald-500/40 transition-colors">
              <FaDatabase className="text-emerald-400" /> DBMS &amp; SQL
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-[#030712] text-xs font-medium text-slate-300 hover:border-amber-500/40 transition-colors">
              <FaServer className="text-amber-400" /> Operating Systems
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-[#030712] text-xs font-medium text-slate-300 hover:border-indigo-500/40 transition-colors">
              <FaNetworkWired className="text-indigo-400" /> Computer Networks
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

Skills.propTypes = {
  id: PropTypes.string,
};
