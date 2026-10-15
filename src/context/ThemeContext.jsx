// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
