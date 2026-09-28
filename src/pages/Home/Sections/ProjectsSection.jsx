// src/pages/Home/sections/ProjectsSection.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaCode,
  FaBolt,
  FaEye,
} from "react-icons/fa";
import { allProjects } from "../../../data/projects";

function ProjectCard({ project }) {
  // Cursor coordinate tracker for local radial shine effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Tilt
      tiltMaxAngleX={7}
      tiltMaxAngleY={7}
      perspective={1200}
      scale={1.02}
      transitionSpeed={1200}
      glareEnable={true}
      glareMaxOpacity={0.12}
      glareColor="#22d3ee"
      glarePosition="all"
      glareBorderRadius="1.5rem"
      className="h-full rounded-3xl"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative h-full flex flex-col justify-between rounded-3xl p-[1px] transition-all duration-500 overflow-hidden bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-transparent hover:from-cyan-500/70 hover:via-indigo-500/40 hover:to-transparent hover:shadow-[0_20px_50px_-10px_rgba(6,182,212,0.25)]"
      >
        {/* Dynamic Mouse Spotlight Glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.18), transparent 70%)`,
          }}
        />

        {/* Card Body Core */}
        <div className="relative z-10 flex flex-col justify-between h-full w-full rounded-[23px] bg-[#090d16]/95 backdrop-blur-xl p-5 overflow-hidden">
          {/* Top Canvas / Media Dock */}
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800/80 group-hover:border-cyan-500/30 transition-colors">
            <img
              src={project.img}
              alt={project.title}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity" />

            {/* Top Left Serial Number Pill */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/60 shadow-lg shadow-black/50">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-cyan-300 tracking-wider">
                #{project.number}
              </span>
            </div>

            {/* Performance Readout Tag */}
            {project.metrics?.speed && (
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                <FaBolt className="text-[9px] text-amber-400" />
                <span>{project.metrics.speed}</span>
              </div>
            )}

            {/* Quick Action Floating Overlay on Hover */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-950/40 backdrop-blur-[2px]">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-400/30 hover:scale-105 active:scale-95 transition-transform"
              >
                <FaEye className="text-xs" />
                <span>Preview</span>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/90 text-slate-200 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 hover:scale-105 active:scale-95 transition-all"
                title="View Repository"
              >
                <FaGithub size={14} />
              </a>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-grow flex flex-col justify-between pt-5 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                  {project.category}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {project.metrics?.state || "Production Ready"}
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                {project.title}
              </h3>

              <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed font-normal">
                {project.desc}
              </p>
            </div>

            {/* Tag Badges */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-900/90 text-slate-300 border border-slate-200 dark:border-slate-800 group-hover:border-slate-700 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-800">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Bottom Quick-Launch Links Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <FaGithub size={14} />
                  <span className="font-mono text-[11px]">Source</span>
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                >
                  <span>Launch Project</span>
                  <FaExternalLinkAlt className="text-[10px] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default function ProjectsSection() {
  const featuredProjects = allProjects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header Container */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 dark:border-slate-800/80 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-mono uppercase tracking-widest shadow-inner">
            <FaCode /> Handcrafted Systems
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mt-2">
            Selected frontend engineering builds focusing on reactive state
            design, real-time performance, and fluid micro-interactions.
          </p>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/50 text-cyan-300 text-xs font-mono tracking-wide transition-all duration-300 group shadow-lg"
        >
          <span>Explore All ({allProjects.length})</span>
          <FaArrowRight className="text-[11px] transition-transform group-hover:translate-x-1 text-cyan-400" />
        </Link>
      </div>

      {/* 3D Glass Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Bottom Floating Bar For Mobile */}
      <div className="mt-12 text-center sm:hidden">
        <Link
          to="/projects"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-400/25 active:scale-95 transition-all"
        >
          <span>View All Work Catalog</span>
          <FaArrowRight className="text-[10px]" />
        </Link>
      </div>
    </section>
  );
}
