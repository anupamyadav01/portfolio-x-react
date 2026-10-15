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
    icon: <SiNextdotjs className="text-white" />,
    level: "Modern SSR",
    glow: "#E7602E",
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
    icon: <SiExpress className="text-slate-200" />,
    level: "Middleware",
    glow: "#E7602E",
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
    icon: <SiSocketdotio className="text-[#E7602E]" />,
    level: "Real-time",
    glow: "#E7602E",
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
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1000}
      scale={1.03}
      transitionSpeed={700}
      className="h-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group h-full rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-between text-center gap-3 overflow-hidden border border-white/10 bg-[#0b111e]/85 backdrop-blur-xl shadow-xl hover:shadow-[0_15px_35px_-10px_rgba(231,96,46,0.3)] transition-all duration-300 hover:border-[#E7602E]/60"
      >
        {/* Dynamic Glow using skill brand color */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl"
          style={{
            opacity: coords.opacity,
            background: `radial-gradient(170px circle at ${coords.x}px ${coords.y}px, ${skill.glow}30, transparent 80%)`,
          }}
        />

        {/* Floating Animated Icon */}
        <div className="relative z-10 text-5xl h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
          {skill.icon}
        </div>

        {/* Labels */}
        <div className="relative z-10 flex flex-col items-center gap-1.5 w-full">
          <h3 className="text-sm font-bold text-slate-100 tracking-wide group-hover:text-[#E7602E] transition-colors">
            {skill.name}
          </h3>
          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-md border border-[#E7602E]/30 bg-[#E7602E]/10 text-[#ffa177] font-medium">
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
      className="relative w-full py-24 px-6 sm:px-10 lg:px-14 overflow-hidden bg-[#030712] text-slate-100"
    >
      {/* 1. High-Contrast Visible Grid Pattern in Pure Dark Mode */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(231, 96, 46, 0.20) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(231, 96, 46, 0.20) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 50%, black 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 50%, black 50%, transparent 100%)",
        }}
      />

      {/* 2. Section Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7602E]/10 border border-[#E7602E]/30 text-[#E7602E] font-mono text-xs uppercase tracking-wider">
            <FaLaptopCode className="text-sm text-[#E7602E]" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-[#E7602E] via-[#ff7c47] to-[#ffa177] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
            A battle-tested set of languages, frameworks, and architecture tools
            I use to build performant, scalable web systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl border border-white/10 bg-[#0b111e]/90 backdrop-blur-xl shadow-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#E7602E] text-white shadow-lg shadow-[#E7602E]/30 scale-[1.02]"
                  : "text-slate-400 hover:text-white"
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

        {/* CS Knowledge Row */}
        <div className="w-full p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#0b111e]/85 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4 shadow-xl hover:border-[#E7602E]/30 transition-colors">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-[#E7602E] font-semibold">
            <FaServer className="text-[#E7602E] shrink-0" />
            <span>Core CS Foundations:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-slate-950/60 text-xs font-medium text-slate-300 hover:border-[#E7602E]/60 hover:-translate-y-0.5 transition-all">
              <FaLaptopCode className="text-[#E7602E]" /> OOPs
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-slate-950/60 text-xs font-medium text-slate-300 hover:border-[#E7602E]/60 hover:-translate-y-0.5 transition-all">
              <FaDatabase className="text-[#E7602E]" /> DBMS &amp; SQL
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-slate-950/60 text-xs font-medium text-slate-300 hover:border-[#E7602E]/60 hover:-translate-y-0.5 transition-all">
              <FaServer className="text-[#E7602E]" /> Operating Systems
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-slate-950/60 text-xs font-medium text-slate-300 hover:border-[#E7602E]/60 hover:-translate-y-0.5 transition-all">
              <FaNetworkWired className="text-[#E7602E]" /> Computer Networks
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
