// src/components/layout/RootLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Home/Sections/Navbar";
import Footer from "../../pages/Home/Sections/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#060a12] dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
