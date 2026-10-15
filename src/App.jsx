import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css"; // Official styles handle all .lenis classes automatically
import AppRouter from "./router/AppRouter";

export default function App() {
  useEffect(() => {
    // Initialize Lenis with agency-grade smooth momentum settings
    const lenis = new Lenis({
      // 1.4s gives it that slow, elegant glide like mijobello
      duration: 1.4,
      // Custom cubic easing curve (starts smooth, glides to a stop)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9, // Slightly lower sensitivity makes the wheel feel heavier and more premium
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Save to window so your Navbar links can scroll through Lenis
    window.lenis = lenis;

    // Run Lenis on every browser screen refresh
    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Clean up when leaving/unmounting
    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return <AppRouter />;
}
