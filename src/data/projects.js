// src/data/projects.js
import { amazon, swiggy, resume } from "../images/index";

export const allProjects = [
  {
    id: "amazon-clone",
    number: "01",
    title: "Amazon E-Commerce Architecture",
    tagline:
      "High-performance full shopping experience with localized basket state",
    desc: "A production-grade e-commerce application featuring global cart synchronization, simulated stripe checkout workflow, debounced search suggestions, and comprehensive responsive layouts.",
    img: amazon,
    github: "https://github.com/anupamyadav01",
    live: "https://poftfolio-anupam-yadav.vercel.app/",
    tags: ["React", "Redux Toolkit", "Tailwind CSS", "REST API"],
    category: "React",
    metrics: { speed: "98/100", state: "Redux Store", tests: "Passed" },
    highlights: [
      "Cart persistence via localStorage",
      "Optimized dynamic re-renders",
      "Clean modular breakdown",
    ],
    featured: true, // Shown on homepage
  },
  {
    id: "swiggy-clone",
    number: "02",
    title: "Swiggy Food Discovery Engine",
    tagline: "Real-time menu curation and multi-restaurant order state system",
    desc: "A responsive food ordering client replicating multi-category restaurant listings, custom item variations, interactive shimmer skeleton loading, and custom hook-based data workflows.",
    img: swiggy,
    github: "https://github.com/anupamyadav01",
    live: "https://poftfolio-anupam-yadav.vercel.app/",
    tags: ["React", "Custom Hooks", "Context API", "CSS Modules"],
    category: "React",
    metrics: { speed: "95/100", state: "Context", tests: "Passed" },
    highlights: [
      "Shimmer UI skeleton loaders",
      "Custom hooks for fetch caching",
      "Fluid mobile layout",
    ],
    featured: true, // Shown on homepage
  },
  {
    id: "resume-builder",
    number: "03",
    title: "ATS Smart Resume Builder",
    tagline: "Live document synthesizer with instantaneous PDF generation",
    desc: "A clean client-side utility helping job seekers configure custom sections, preview typography live, and generate ATS-compliant vector PDF documents with zero server overhead.",
    img: resume,
    github: "https://github.com/anupamyadav01",
    live: "https://poftfolio-anupam-yadav.vercel.app/",
    tags: ["JavaScript", "Tailwind CSS", "React", "PDF Kit"],
    category: "Tools",
    metrics: { speed: "100/100", state: "Local State", tests: "Passed" },
    highlights: [
      "Vector-grade PDF generator",
      "Real-time live formatting",
      "Zero external database dependency",
    ],
    featured: false,
  },
  {
    id: "color-catcher-game",
    number: "04",
    title: "Color Catcher Speed Reflex",
    tagline:
      "Interactive arcade browser engine focusing on high-speed DOM cycles",
    desc: "An arcade reaction game designed to stress-test DOM redraws, featuring dynamic color shuffling algorithms, dynamic score counters, and precise event interval listeners.",
    img: amazon,
    github: "https://github.com/anupamyadav01",
    live: "https://poftfolio-anupam-yadav.vercel.app/",
    tags: ["JavaScript", "DOM API", "CSS Animations"],
    category: "Games",
    metrics: { speed: "60 FPS", state: "Engine Loop", tests: "Passed" },
    highlights: [
      "Custom event ticker",
      "Zero layout shift",
      "Keyframe-driven particle bursts",
    ],
    featured: true, // Shown on homepage
  },
  {
    id: "color-catcher-game",
    number: "04",
    title: "Color Catcher Speed Reflex",
    tagline:
      "Interactive arcade browser engine focusing on high-speed DOM cycles",
    desc: "An arcade reaction game designed to stress-test DOM redraws, featuring dynamic color shuffling algorithms, dynamic score counters, and precise event interval listeners.",
    img: amazon,
    github: "https://github.com/anupamyadav01",
    live: "https://poftfolio-anupam-yadav.vercel.app/",
    tags: ["JavaScript", "DOM API", "CSS Animations"],
    category: "Games",
    metrics: { speed: "60 FPS", state: "Engine Loop", tests: "Passed" },
    highlights: [
      "Custom event ticker",
      "Zero layout shift",
      "Keyframe-driven particle bursts",
    ],
    featured: true, // Shown on homepage
  },
  {
    id: "color-catcher-game",
    number: "04",
    title: "Color Catcher Speed Reflex",
    tagline:
      "Interactive arcade browser engine focusing on high-speed DOM cycles",
    desc: "An arcade reaction game designed to stress-test DOM redraws, featuring dynamic color shuffling algorithms, dynamic score counters, and precise event interval listeners.",
    img: amazon,
    github: "https://github.com/anupamyadav01",
    live: "https://poftfolio-anupam-yadav.vercel.app/",
    tags: ["JavaScript", "DOM API", "CSS Animations"],
    category: "Games",
    metrics: { speed: "60 FPS", state: "Engine Loop", tests: "Passed" },
    highlights: [
      "Custom event ticker",
      "Zero layout shift",
      "Keyframe-driven particle bursts",
    ],
    featured: true, // Shown on homepage
  },
  {
    id: "color-catcher-game",
    number: "04",
    title: "Color Catcher Speed Reflex",
    tagline:
      "Interactive arcade browser engine focusing on high-speed DOM cycles",
    desc: "An arcade reaction game designed to stress-test DOM redraws, featuring dynamic color shuffling algorithms, dynamic score counters, and precise event interval listeners.",
    img: amazon,
    github: "https://github.com/anupamyadav01",
    live: "https://poftfolio-anupam-yadav.vercel.app/",
    tags: ["JavaScript", "DOM API", "CSS Animations"],
    category: "Games",
    metrics: { speed: "60 FPS", state: "Engine Loop", tests: "Passed" },
    highlights: [
      "Custom event ticker",
      "Zero layout shift",
      "Keyframe-driven particle bursts",
    ],
    featured: true, // Shown on homepage
  },
];
