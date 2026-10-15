import { useState, useMemo, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import { FiCheckCircle, FiX } from "react-icons/fi";

// Import projects data from the data folder
import { allProjects } from "../../data/projects";

const FILTER_TAGS = ["All", "React", "Full Stack", "Tools"];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState(allProjects[0]);

  // Scroll to top whenever the page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

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
    <div className="relative min-h-screen bg-[#040812] text-slate-100 pt-24 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="space-y-6 relative z-10">
        {/* ───────── Compact Header ───────── */}
        <header className="relative">
          {/* soft ambient glow behind the title */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-12 -left-16 h-44 w-44 rounded-full bg-[#E7602E]/20 blur-[80px]"
          />

          <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Selected{" "}
              <span className="bg-gradient-to-r from-[#E7602E] via-[#ff9a62] to-[#E7602E] bg-clip-text text-transparent">
                Works
              </span>
              <span className="text-[#E7602E]">.</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-400">
              Pick a project to open its live preview.
            </p>
          </div>

          {/* glowing divider */}
          <div className="relative mt-4 h-px w-full bg-gradient-to-r from-[#E7602E] via-white/10 to-transparent" />
        </header>

        {/* ───────── Filter + Search ───────── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Segmented tag bar */}
          <div
            role="tablist"
            aria-label="Filter projects by stack"
            className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-x-auto no-scrollbar max-w-full"
          >
            {FILTER_TAGS.map((tag) => {
              const active = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedTag(tag)}
                  className={`relative shrink-0 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 focus:outline-none ${
                    active
                      ? "bg-[#E7602E] text-white shadow-[0_0_24px_-4px_rgba(231,96,46,0.8)]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="group relative w-full lg:w-80">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 transition-colors group-focus-within:text-[#E7602E]" />
            <input
              type="text"
              placeholder="Search projects or tech"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-500 backdrop-blur-md transition-all focus:outline-none focus:border-[#E7602E]/70 focus:bg-white/[0.05] focus:shadow-[0_0_30px_-8px_rgba(231,96,46,0.6)]"
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-500 hover:text-white hover:bg-white/10 transition-colors"
              >
                <FiX className="text-sm" />
              </button>
            )}
          </div>
        </div>

        {/* ───────── Main Layout: Sticky Inspector (Left) + Project Feed (Right) ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Live Inspection Console (PC View Only) */}
          <div className="lg:col-span-6 xl:col-span-7 lg:sticky lg:top-24">
            <div className="relative w-full rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Top Glowing Accent Line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E7602E]/60 to-transparent" />

              {/* Console Top Chrome */}
              <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E7602E]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  preview://{activeProject.id}
                </span>
              </div>

              {/* PC Preview Window Canvas */}
              <div className="relative bg-slate-950/60 p-4 sm:p-5 overflow-hidden">
                <div className="w-full aspect-video overflow-hidden rounded-xl border border-white/10 shadow-lg bg-slate-900">
                  {activeProject.img ? (
                    <img
                      src={activeProject.img}
                      alt={activeProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-sm">
                      [ Image Pending ]
                    </div>
                  )}
                </div>
              </div>

              {/* Inspector Metadata Panel */}
              <div className="p-5 sm:p-6 space-y-4 border-t border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-slate-400 tracking-wider">
                      BUILD #{activeProject.number}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mt-0.5">
                      {activeProject.title}
                    </h2>
                    <p className="text-sm bg-gradient-to-r from-[#E7602E] to-[#ff9a62] bg-clip-text text-transparent font-semibold mt-0.5">
                      {activeProject.tagline}
                    </p>
                  </div>

                  {/* Launch Links */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.03] text-slate-300 border border-white/10 hover:border-white/30 hover:text-white transition-all"
                      title="View Source Code"
                    >
                      <FaGithub className="text-sm" />
                    </a>
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E7602E] hover:bg-[#d5582a] text-white font-semibold text-xs shadow-[0_0_24px_-4px_rgba(231,96,46,0.7)] transition-all"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      <span>Launch App</span>
                    </a>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeProject.desc}
                </p>

                {/* Highlights Bullet Tags */}
                {activeProject.highlights?.length > 0 && (
                  <div className="pt-2 border-t border-white/5">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2.5">
                      Key Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeProject.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs text-slate-300"
                        >
                          <FiCheckCircle className="text-[#E7602E] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: Scrollable Project Cards Stream */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-3.5">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => {
                const isSelected = activeProject.id === project.id;
                return (
                  <div
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    className={`cursor-pointer group p-5 rounded-2xl transition-all duration-300 border backdrop-blur-md relative overflow-hidden ${
                      isSelected
                        ? "bg-white/[0.05] border-[#E7602E]/60 shadow-[0_0_30px_-10px_rgba(231,96,46,0.4)]"
                        : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                          #{project.number} &bull; {project.category}
                        </span>
                        <h3
                          className={`text-lg font-bold tracking-tight mt-0.5 transition-colors ${
                            isSelected
                              ? "text-[#E7602E]"
                              : "text-white group-hover:text-slate-200"
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 mt-3.5 pt-3.5 border-t border-white/5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/[0.03] text-slate-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center rounded-2xl bg-white/[0.02] border border-dashed border-white/10 text-slate-400 text-sm">
                No projects found for &ldquo;{searchQuery || selectedTag}
                &rdquo;.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
