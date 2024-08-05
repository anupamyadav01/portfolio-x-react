import PropTypes from "prop-types";
import "./ProjectCardStyle.css";
import { FaArrowRight } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Tilt from "react-parallax-tilt";

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
        <div className="absolute top-16 font-semibold text-3xl text-[#36ffe6]">
          Projects
        </div>
      )}
      <div className={`project-wrapper ${className}`}>
        <div className="about-project">
          <div className="project-title">{projectTitle}</div>
          <div className="desc">{projectDesc}</div>
          <div className="flex gap-4">
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
