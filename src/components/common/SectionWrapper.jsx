import PropTypes from "prop-types";

export default function SectionWrapper({
  id,
  children,
  className = "",
  showGlow = true,
  showGrid = true,
}) {
  return (
    <section
      id={id}
      className={`relative w-full py-24 px-6 sm:px-10 overflow-hidden bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 transition-colors duration-300 ${className}`}
    >
      {/* 1. Subtle Background Grid Pattern */}
      {showGrid && (
        <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px]" />
        </div>
      )}

      {/* 2. Ambient Radial Glow */}
      {showGlow && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[160px] pointer-events-none bg-radial from-cyan-400/10 via-sky-500/5 to-transparent dark:from-cyan-400/5" />
      )}

      {/* 3. Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">
        {children}
      </div>
    </section>
  );
}

SectionWrapper.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  showGlow: PropTypes.bool,
  showGrid: PropTypes.bool,
};
