import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaArrowRight, FaCode, FaEye } from "react-icons/fa";
import { allProjects } from "../../../data/projects";

const MAX_TAGS = 4;

function ProjectCard({ project }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const visibleTags = project.tags.slice(0, MAX_TAGS);
  const extraTags = project.tags.length - MAX_TAGS;

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1200}
      scale={1.015}
      transitionSpeed={1200}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#E7602E"
      glarePosition="all"
      glareBorderRadius="1.5rem"
      className="h-full rounded-3xl"
    >
      <article
        onMouseMove={handleMouseMove}
        className="group relative h-full rounded-3xl p-[1px] overflow-hidden bg-gradient-to-b from-white/15 via-white/5 to-transparent transition-all duration-500 hover:from-[#E7602E]/80 hover:via-[#E7602E]/20 hover:to-transparent shadow-xl hover:shadow-[0_25px_60px_-15px_rgba(231,96,46,0.4)]"
      >
        {/* Cursor spotlight */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(231, 96, 46, 0.22), transparent 70%)`,
          }}
        />

        <div className="relative z-10 flex h-full flex-col rounded-[23px] bg-[#0b0f19]/95 backdrop-blur-xl p-4 overflow-hidden">
          {/* ---------- Image ---------- */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 transition-colors group-hover:border-[#E7602E]/40">
            {project.img ? (
              <img
                src={project.img}
                alt={`${project.title} screenshot`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#E7602E]/20 via-slate-950 to-slate-950">
                <FaCode className="text-3xl text-[#E7602E]" />
                <span className="font-mono text-xs text-[#ffa177]">
                  {project.title}
                </span>
              </div>
            )}

            {/* Bottom fade so the actions stay readable */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100" />

            {/* Actions: slide up on hover, always visible on touch devices */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`Preview ${project.title}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#E7602E] px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-[#E7602E]/40 transition-transform hover:bg-[#ff723b] hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <FaEye />
                Preview
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} source code on GitHub`}
                title="View source"
                className="rounded-xl border border-white/20 bg-slate-900/95 p-2.5 text-slate-200 shadow-md transition-all hover:border-[#E7602E] hover:text-[#E7602E] hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <FaGithub size={14} />
              </a>
            </div>
          </div>

          {/* ---------- Content ---------- */}
          <div className="flex flex-1 flex-col gap-3 px-1.5 pt-5 pb-2">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-[#E7602E]">
                {project.title}
              </h3>
              {project.tagline && (
                <p className="mt-1 text-[13px] font-medium leading-snug text-[#ffa177]/90">
                  {project.tagline}
                </p>
              )}
            </div>

            <p className="text-sm leading-relaxed text-slate-400 line-clamp-3">
              {project.desc}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
              {visibleTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-slate-900/90 px-2.5 py-1 font-mono text-[10px] text-slate-300 transition-colors group-hover:border-[#E7602E]/30"
                >
                  {tag}
                </span>
              ))}
              {extraTags > 0 && (
                <span className="rounded-md border border-white/10 bg-slate-900 px-2 py-1 font-mono text-[10px] text-slate-400">
                  +{extraTags}
                </span>
              )}
            </div>
          </div>

          {/* Accent line that draws across on hover */}
          <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#E7602E] via-[#ff7c47] to-[#ffa177] transition-transform duration-500 group-hover:scale-x-100" />
        </div>
      </article>
    </Tilt>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    number: PropTypes.string,
    title: PropTypes.string,
    tagline: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    live: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default function FeaturedProjects() {
  const projects = allProjects
    .filter((p) => p.featured)
    .sort((a, b) => Number(a.number) - Number(b.number));

  return (
    <section
      id="projects"
      className="relative w-full py-24 px-6 sm:px-10 lg:px-14 overflow-hidden bg-[#030712] text-slate-100"
    >
      {/* Grid pattern */}
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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7602E]/10 border border-[#E7602E]/30 text-[#E7602E] font-mono text-xs uppercase tracking-wider">
              <FaCode className="text-sm" />
              <span>Projects</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mt-3 tracking-tight text-white leading-tight">
              Things I've{" "}
              <span className="bg-gradient-to-r from-[#E7602E] via-[#ff7c47] to-[#ffa177] bg-clip-text text-transparent">
                built
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-lg mt-3 leading-relaxed">
              Full-stack apps and tools, from React interfaces to Node.js and
              MongoDB backends. Hover a card to preview it or read the code.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-[#E7602E]/60 text-[#E7602E] text-xs font-mono tracking-wide transition-all duration-300 group shadow-md"
          >
            <span>View all projects</span>
            <FaArrowRight className="text-[11px] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center sm:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-[#E7602E] hover:bg-[#ff723b] text-white font-bold text-xs shadow-lg shadow-[#E7602E]/30 active:scale-95 transition-all"
          >
            <span>View all projects</span>
            <FaArrowRight className="text-[10px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
