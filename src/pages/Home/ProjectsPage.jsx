import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaSearch,
  FaDesktop,
  FaMobileAlt,
  FaCode,
  FaBolt,
  FaArrowLeft,
} from "react-icons/fa";
import { FiFilter, FiCheckCircle } from "react-icons/fi";
import { allProjects } from "../../data/projects";

const FILTER_TAGS = ["All", "React", "JavaScript", "Tools", "Games"];

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState(allProjects[0] || null);
  const [viewMode, setViewMode] = useState("desktop"); // "desktop" | "mobile"

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesTag =
        selectedTag === "All" ||
        project.tags.includes(selectedTag) ||
        project.category === selectedTag;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        project.title.toLowerCase().includes(q) ||
        project.desc.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));

      return matchesTag && matchesSearch;
    });
  }, [selectedTag, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060a12] text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glows */}
      <div className="fixed top-20 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="fixed bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-cyan-300 transition-colors group"
          >
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Section */}
        <div className="border-b border-slate-200 dark:border-slate-800/80 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-mono tracking-widest uppercase">
              <FaCode className="text-[11px]" />
              Engineering Showcase
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-3 text-slate-900 dark:text-white">
              Selected{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Works
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mt-2 leading-relaxed">
              Click or hover any build to test it inside the live inspection
              dock.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-2.5 rounded-xl text-xs font-mono">
            <div className="px-3 py-1 bg-slate-800/80 rounded-lg">
              <span className="text-slate-600 dark:text-slate-400">
                Total:{" "}
              </span>
              <span className="text-cyan-400 font-bold">
                {allProjects.length} Builds
              </span>
            </div>
            <div className="px-3 py-1 bg-slate-800/80 rounded-lg">
              <span className="text-slate-600 dark:text-slate-400">
                Status:{" "}
              </span>
              <span className="text-emerald-400 font-bold">100% Deployed</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 tracking-wider mr-1">
              <FiFilter className="text-cyan-400" /> Stack:
            </span>
            {FILTER_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedTag === tag
                    ? "bg-cyan-400 text-slate-950 font-semibold shadow-md shadow-cyan-400/20"
                    : "bg-slate-900/90 text-slate-300 hover:text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs" />
            <input
              type="text"
              placeholder="Search by tech or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Studio Split Layout: Sticky Inspector (Left) + Project Feed (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Live Inspection Console */}
          <div className="lg:col-span-6 xl:col-span-7 lg:sticky lg:top-24">
            {activeProject ? (
              <Tilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                perspective={1400}
                transitionSpeed={1000}
                className="w-full"
              >
                <div className="rounded-2xl bg-white dark:bg-[#0c121e]/95 border border-slate-700/60 shadow-2xl shadow-cyan-950/20 overflow-hidden backdrop-blur-xl">
                  {/* Console Top Chrome */}
                  <div className="px-4 py-3 bg-[#0f1729] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                        inspector://{activeProject.id}.preview
                      </span>
                    </div>

                    {/* Viewport Scale Controls */}
                    <div className="flex items-center bg-slate-900 p-1 rounded-md border border-slate-200 dark:border-slate-800 gap-1">
                      <button
                        type="button"
                        onClick={() => setViewMode("desktop")}
                        className={`p-1.5 rounded text-xs transition-colors ${
                          viewMode === "desktop"
                            ? "bg-cyan-500/20 text-cyan-300"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white"
                        }`}
                        title="Desktop Preview"
                      >
                        <FaDesktop />
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode("mobile")}
                        className={`p-1.5 rounded text-xs transition-colors ${
                          viewMode === "mobile"
                            ? "bg-cyan-500/20 text-cyan-300"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white"
                        }`}
                        title="Mobile Frame"
                      >
                        <FaMobileAlt />
                      </button>
                    </div>
                  </div>

                  {/* Preview Window Canvas */}
                  <div className="relative bg-slate-950 flex items-center justify-center p-4 min-h-[280px] sm:min-h-[350px] overflow-hidden">
                    <div
                      className={`transition-all duration-500 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xl ${
                        viewMode === "mobile"
                          ? "w-[220px] h-[320px] border-4 border-slate-200 dark:border-slate-800 rounded-2xl"
                          : "w-full aspect-video"
                      }`}
                    >
                      <img
                        src={activeProject.img}
                        alt={activeProject.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Inspector Metadata */}
                  <div className="p-6 space-y-5 bg-white dark:bg-[#0c121e]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-mono text-cyan-400 tracking-wider">
                          BUILD #{activeProject.number}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                          {activeProject.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-cyan-200/70 font-medium mt-1">
                          {activeProject.tagline}
                        </p>
                      </div>

                      {/* Launch Links */}
                      <div className="flex items-center gap-2">
                        <a
                          href={activeProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-cyan-400 transition-colors"
                          title="View Source Code"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href={activeProject.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-400/20 hover:scale-105 active:scale-95 transition-all"
                        >
                          <FaExternalLinkAlt className="text-[10px]" />
                          <span>Launch App</span>
                        </a>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeProject.desc}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider block">
                        Architectural Highlights:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeProject.highlights.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-xs text-slate-300"
                          >
                            <FiCheckCircle className="text-emerald-400 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-center">
                        <div className="flex items-center justify-center gap-1 text-cyan-400 text-xs font-bold">
                          <FaBolt className="text-[10px]" />{" "}
                          {activeProject.metrics.speed}
                        </div>
                        <span className="text-[10px] text-slate-500 uppercase font-mono block mt-0.5">
                          Performance
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-center">
                        <div className="text-slate-200 text-xs font-bold">
                          {activeProject.metrics.state}
                        </div>
                        <span className="text-[10px] text-slate-500 uppercase font-mono block mt-0.5">
                          State Model
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-center">
                        <div className="text-emerald-400 text-xs font-bold">
                          {activeProject.metrics.tests}
                        </div>
                        <span className="text-[10px] text-slate-500 uppercase font-mono block mt-0.5">
                          Build Status
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-12 text-center text-slate-500 text-sm">
                Select a project on the right to preview
              </div>
            )}
          </div>

          {/* RIGHT: Scrollable Project Cards Stream */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-4">
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-widest block mb-2">
              Select or Hover Project:
            </span>

            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => {
                const isSelected = activeProject?.id === project.id;
                return (
                  <div
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    onMouseEnter={() => setActiveProject(project)}
                    className={`cursor-pointer group p-5 rounded-2xl transition-all duration-300 border relative ${
                      isSelected
                        ? "bg-slate-900/90 border-cyan-400/80 shadow-lg shadow-cyan-500/10 scale-[1.01]"
                        : "bg-slate-950/60 border-slate-200 dark:border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50"
                    }`}
                  >
                    {/* Active Accent Bar */}
                    {isSelected && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-cyan-400 rounded-r-full" />
                    )}

                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                          #{project.number} &bull; {project.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                          {project.title}
                        </h3>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">
                        {project.metrics.speed}
                      </span>
                    </div>

                    <p className="text-xs sm:text-slate-600 dark:text-slate-400 line-clamp-2 mt-2 leading-relaxed text-slate-600 dark:text-slate-400">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/60">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-200 dark:border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs">
                No builds found for &ldquo;{searchQuery || selectedTag}&rdquo;.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
