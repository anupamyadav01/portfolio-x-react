// src/components/common/ThemeToggle.jsx
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2.5 rounded-xl border transition-all duration-300
        bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700
        dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:border-slate-700 dark:text-cyan-400
        shadow-sm hover:scale-105 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <FiSun className="text-lg text-amber-400 transition-transform duration-300" />
      ) : (
        <FiMoon className="text-lg text-slate-700 transition-transform duration-300" />
      )}
    </button>
  );
}
