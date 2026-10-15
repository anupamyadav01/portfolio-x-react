import PropTypes from "prop-types";
import {
  FaMapMarkerAlt,
  FaServer,
  FaDatabase,
  FaBrain,
  FaNetworkWired,
  FaCogs,
  FaMemory,
  FaCubes,
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiTypescript,
  SiReact,
  SiPython,
} from "react-icons/si";

/* ---------- small helpers ---------- */

const Card = ({ className = "", children }) => (
  <div
    className={`rounded-2xl border border-white/10 bg-[#0c121e]/80 backdrop-blur-xl p-7 sm:p-8 transition-colors hover:border-[#E7602E]/40 ${className}`}
  >
    {children}
  </div>
);

const IconBadge = ({ children }) => (
  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#E7602E]/10 text-[#E7602E] text-lg">
    {children}
  </div>
);

// JSON syntax helpers for the profile.json window
const Key = ({ children }) => (
  <span className="text-slate-500">"{children}"</span>
);
const Str = ({ children }) => (
  <span className="text-[#ffa177]">"{children}"</span>
);

const backendWork = [
  {
    icon: <FaServer />,
    title: "APIs that hold up",
    text: "RESTful services with clear contracts, validation and predictable error handling.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Real-time systems",
    text: "WebSocket-based features such as live updates and two-way communication.",
  },
  {
    icon: <FaDatabase />,
    title: "Data modelling",
    text: "Designing MongoDB schemas around how the data is actually queried.",
  },
];

const aiPath = [
  { label: "LLM APIs & prompt design", status: "In progress" },
  { label: "Python for AI workflows", status: "In progress" },
  { label: "RAG & vector search", status: "Up next" },
  { label: "Shipping AI features in a backend", status: "Goal" },
];

const foundations = [
  {
    icon: <FaCubes />,
    name: "OOP",
    use: "Structuring services into clean, testable modules",
  },
  {
    icon: <FaDatabase />,
    name: "DBMS",
    use: "Schema design, indexing and query trade-offs",
  },
  {
    icon: <FaMemory />,
    name: "Operating Systems",
    use: "Processes, concurrency and memory behaviour",
  },
  {
    icon: <FaNetworkWired />,
    name: "Networks",
    use: "HTTP, sockets and how requests travel",
  },
];

export default function About({ id = "about" }) {
  return (
    <section
      id={id}
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
            "radial-gradient(ellipse 85% 70% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
      {/* Ambient glow behind the code window */}
      <div className="absolute top-32 right-0 w-[520px] h-[520px] rounded-full blur-[150px] pointer-events-none bg-[#E7602E]/10" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-16">
        {/* ============ HERO ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: statement */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse motion-reduce:animate-none" />
              Open to opportunities
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white">
              I build the backend
              <br />
              <span className="text-[#E7602E]">
                behind fast, reliable apps.
              </span>
            </h2>

            <p className="max-w-xl text-slate-300 text-base sm:text-lg leading-relaxed">
              I'm Anupam, a software engineer from Jaipur. I started on the
              frontend with React and TypeScript, and I now spend most of my
              time on APIs, databases and real-time systems, the parts that
              decide whether an app is actually good to use.
            </p>
            <p className="max-w-xl text-slate-400 text-sm sm:text-base leading-relaxed">
              Right now I'm learning how to bring AI into real products: calling
              LLMs, grounding them in data, and wrapping them in solid backend
              services.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
              <span className="inline-flex items-center gap-2 text-slate-300 text-sm">
                <FaMapMarkerAlt className="text-[#E7602E]" />
                Jaipur, Rajasthan, India
              </span>
              <div className="flex items-center gap-3 text-xl text-slate-400">
                <SiNodedotjs
                  title="Node.js"
                  className="hover:text-[#68a063] transition-colors"
                />
                <SiExpress
                  title="Express"
                  className="hover:text-white transition-colors"
                />
                <SiMongodb
                  title="MongoDB"
                  className="hover:text-[#47a248] transition-colors"
                />
                <SiSocketdotio
                  title="Socket.IO"
                  className="hover:text-white transition-colors"
                />
                <SiTypescript
                  title="TypeScript"
                  className="hover:text-[#3178c6] transition-colors"
                />
                <SiReact
                  title="React"
                  className="hover:text-[#61dafb] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Right: profile.json window (the one memorable element) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#E7602E]/30 bg-[#0c121e]/90 shadow-[0_0_60px_-15px_rgba(231,96,46,0.35)] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E7602E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E7602E]/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E7602E]/25" />
                </div>
                <span className="font-mono text-xs text-slate-500">
                  GET /api/anupam
                </span>
                <span className="font-mono text-xs text-emerald-400">
                  200 OK
                </span>
              </div>

              <pre className="p-5 sm:p-6 font-mono text-[13px] sm:text-sm leading-7 overflow-x-auto text-slate-300">
                {`{`}
                {"\n  "}
                <Key>name</Key>: <Str>Anupam Yadav</Str>,{"\n  "}
                <Key>role</Key>: <Str>Software Engineer</Str>,{"\n  "}
                <Key>focus</Key>: [<Str>backend</Str>, <Str>APIs</Str>,{" "}
                <Str>real-time</Str>],
                {"\n  "}
                <Key>stack</Key>: [<Str>Node.js</Str>, <Str>MongoDB</Str>,{" "}
                <Str>TypeScript</Str>],
                {"\n  "}
                <Key>frontend</Key>: <Str>React</Str>,{"\n  "}
                <Key>learning</Key>: <Str>AI / LLM apps</Str>,{"\n  "}
                <Key>location</Key>: <Str>Jaipur, IN</Str>,{"\n  "}
                <Key>available</Key>:{" "}
                <span className="text-emerald-400">true</span>
                {"\n"}
                {`}`}
                <span
                  className="inline-block w-2 h-4 ml-1 align-middle bg-[#E7602E] animate-pulse motion-reduce:animate-none"
                  aria-hidden="true"
                />
              </pre>
            </div>
          </div>
        </div>

        {/* ============ BACKEND + AI ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Backend focus */}
          <Card className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <IconBadge>
                <FaServer />
              </IconBadge>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  What I do on the backend
                </h3>
                <p className="text-sm text-slate-400">
                  My main focus right now
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {backendWork.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-slate-950/60 p-4 flex flex-col gap-2"
                >
                  <span className="text-[#E7602E] text-lg">{item.icon}</span>
                  <h4 className="text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* AI learning */}
          <Card className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <IconBadge>
                <FaBrain />
              </IconBadge>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Learning AI
                </h3>
                <p className="text-sm text-slate-400 inline-flex items-center gap-1.5">
                  <SiPython className="text-[#E7602E]" /> My current learning
                  path
                </p>
              </div>
            </div>

            <ol className="relative flex flex-col gap-4 pl-5 border-l border-[#E7602E]/30">
              {aiPath.map((step, i) => (
                <li key={step.label} className="relative">
                  <span
                    className={`absolute -left-[26px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#E7602E] ${
                      i < 2 ? "bg-[#E7602E]" : "bg-[#030712]"
                    }`}
                  />
                  <p className="text-sm text-slate-200">{step.label}</p>
                  <p
                    className={`text-xs ${
                      i < 2 ? "text-[#E7602E]" : "text-slate-500"
                    }`}
                  >
                    {step.status}
                  </p>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  id: PropTypes.string,
};
