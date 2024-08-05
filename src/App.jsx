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
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="Swiggyy"
          projectDesc="Swiggy is a popular food delivery app in India that connects users with a wide variety of restaurants in their area. It offers a seamless ordering experience with real-time tracking of deliveries, various payment options, and fast delivery times"
          projectLink="https://github.com/anupamyadav01/Swiggyy___food__app"
          deployedProjectLink="https://swiggyy-food-app.vercel.app/"
          projectImg={swiggy}
        />{" "}
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="Amazon"
          projectDesc="Amazon is a global e-commerce platform offering a vast selection of products, from electronics to groceries, with fast delivery options. Its user-friendly website features advanced search capabilities, ensuring a convenient shopping experience. "
          projectLink="https://github.com/anupamyadav01/Amazon"
          deployedProjectLink="https://amazon-silk-eight.vercel.app/"
          projectImg={amazon}
        />{" "}
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="Resume Builder"
          projectDesc="Creating a resume builder with AI job suggestions can be a powerful tool for job seekers. Here's a brief outline on how you can build such an application, integrating AI to suggest relevant jobs based on the resume content"
          projectLink="https://github.com/anupamyadav01/resume-builder"
          deployedProjectLink="https://anupamyadav01.github.io/resume-builder/index.html"
          projectImg={resume}
        />
        <AboutMe id="about" />
        <SkillCard id="skills" />
        <ContactForm id="contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;
