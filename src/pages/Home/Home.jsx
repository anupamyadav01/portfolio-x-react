import About from "./Sections/About";
import ContactMe from "./Sections/ContactMe";
import Hero from "./Sections/Hero";
import ProjectsSection from "./Sections/ProjectsSection";
import Skills from "./Sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <Skills />
      <ContactMe />
    </>
  );
}
