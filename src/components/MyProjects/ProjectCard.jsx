import PropTypes from "prop-types";
import "./ProjectCardStyle.css";
import { FaArrowRight } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

function ProjectCard({
  projectLink,
  projectDesc,
  projectImg,
  id,
  className,
  projectTitle,
  deployedProjectLink,
}) {
  return (
    <div className="project-window" id={id}>
      {projectTitle === "Swiggyy" && (
        <div className="absolute justify-between items-center top-16 flex w-full px-[15vw]">
          <p className="font-semibold text-3xl text-[#36ffe6]">Projects</p>
          <Link
            to={"/projects"}
            className="relative inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#36ffe6] rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-[#36ffe6] group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#36ffe6] transition-all duration-300 transform group-hover:translate-x-full ease">
              See all projects
            </span>
            <span className="relative invisible">Button Text</span>
          </Link>
        </div>
      )}
      <div className={`project-wrapper ${className}`}>
        <div className="about-project">
          <div className="project-title">{projectTitle}</div>
          <div className="desc">{projectDesc}</div>
          <div className="flex gap-4 mt-6">
            <a href={projectLink} target="_blank" className="btn">
              <span className="flex items-center">
                Get Code
                <FiGithub
                  className="social"
                  size={20}
                  style={{
                    marginLeft: "8px",
                    position: "relative",
                    top: "2px",
                    strokeWidth: "3",
                  }}
                />
              </span>
            </a>
            <a href={deployedProjectLink} className="btn" target="_blank">
              <span className="">Go Live</span>
              <FaArrowRight
                className="btn-arrow"
                size={22}
                style={{ marginLeft: "1rem" }}
              />
            </a>
          </div>
        </div>
        <Tilt className="project-img" gyroscope={true}>
          <a href={deployedProjectLink} target="_blank">
            <img src={projectImg} alt="Displaying Project" />
          </a>
        </Tilt>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  projectTitle: PropTypes.string,
  projectDesc: PropTypes.string,
  projectLink: PropTypes.string,
  deployedProjectLink: PropTypes.string,
  projectImg: PropTypes.string,
};

export default ProjectCard;
