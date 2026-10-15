import About from "./Sections/About";
import ContactMe from "./Sections/ContactMe";
import FeaturedProjects from "./Sections/FeaturedProjects";
import Hero from "./Sections/Hero";
import Skills from "./Sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <ContactMe />
    </>
  );
}
