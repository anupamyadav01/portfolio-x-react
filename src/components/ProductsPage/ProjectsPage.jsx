import ProjectCard from "../MyProjects/ProjectCard";
import { amazon, resume, swiggy } from "../../images/index";

const ProjectsPage = () => {
  <div className="border border-white grid grid-cols-1 md:grid-cols-2 gap-6 pl-40">
    <ProjectCard
      id="project-1"
      className="odd"
      projectTitle="Swiggyy"
      projectDesc="Swiggy is a popular food delivery app in India that connects users with a wide variety of restaurants in their area. It offers a seamless ordering experience with real-time tracking of deliveries, various payment options, and fast delivery times."
      projectLink="https://github.com/anupamyadav01/Swiggyy___food__app"
      deployedProjectLink="https://swiggyy-food-app.vercel.app/"
      projectImg={swiggy}
    />
    <ProjectCard
      id="project-2"
      className="even"
      projectTitle="Amazon"
      projectDesc="Amazon is a global e-commerce platform offering a vast selection of products, from electronics to groceries, with fast delivery options. Its user-friendly website features advanced search capabilities, ensuring a convenient shopping experience."
      projectLink="https://github.com/anupamyadav01/Amazon"
      deployedProjectLink="https://amazon-silk-eight.vercel.app/"
      projectImg={amazon}
    />
    <ProjectCard
      id="project-3"
      className="odd"
      projectTitle="Resume Builder"
      projectDesc="Creating a resume builder with AI job suggestions can be a powerful tool for job seekers. Here's a brief outline on how you can build such an application, integrating AI to suggest relevant jobs based on the resume content."
      projectLink="https://github.com/anupamyadav01/resume-builder"
      deployedProjectLink="https://anupamyadav01.github.io/resume-builder/index.html"
      projectImg={resume}
    />
  </div>;
};

export default ProjectsPage;
