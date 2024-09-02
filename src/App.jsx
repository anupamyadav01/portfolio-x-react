import "./index.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomeBanner from "./components/HomeSection/HomeBanner";
import ProjectCard from "./components/MyProjects/ProjectCard";
import AboutMe from "./components/AboutMe/AboutMe";
import SkillCard from "./components/Skills/SkillCard";
import ContactForm from "./components/ContactForm/ContactForm";
import AnimatedCursor from "react-animated-cursor";
import { resume, amazon, swiggy } from "./images/index";

function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={40}
        innerScale={1}
        outerScale={1.8}
        outerAlpha={0}
        outerStyle={{
          background: "#ffffff",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#36ffe6",
        }}
      />
      <div>
        <Navbar />
        <HomeBanner id="home" />

        <AboutMe id="about" />
        <SkillCard id="skills" />
        <ContactForm id="contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;
