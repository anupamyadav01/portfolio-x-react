import "./SkillCardStyle.css";
import PropTypes from "prop-types";
import { DiGit } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiVisualstudiocode,
  SiReact,
  SiTypescript,
  SiFigma,
  SiRedux,
  SiNodedotjs,
  SiPostman,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoWindows, IoLogoNpm } from "react-icons/io";

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skillset">
            <abbr title="HTML 5">
              <DiJava className="techLogo" />
            </abbr>
            <abbr title="Typescript">
              <SiTypescript className="techLogo" />
            </abbr>
            <abbr title="JavaScript">
              <TbBrandJavascript className="techLogo" />
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">
            <abbr title="ReactJS">
              <SiReact className="techLogo" />
            </abbr>{" "}
            <abbr title="Redux">
              <SiRedux className="techLogo" />
            </abbr>{" "}
            <abbr title="Node JS">
              <SiNodedotjs className="techLogo" />
            </abbr>
            <abbr title="Tailwind CSS">
              <RiTailwindCssFill className="techLogo" />
            </abbr>
            <abbr title="Git/Github">
              <DiGit className="techLogo" />
            </abbr>
            <abbr title="NPM">
              <IoLogoNpm className="techLogo" />
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Tools & Systems</h2>
          <div className="skillset">
            <abbr title="Visual Studio Code">
              <SiVisualstudiocode className="techLogo" />
            </abbr>
            <abbr title="Windows">
              <IoLogoWindows className="techLogo" />
            </abbr>
            <abbr title="Figma">
              <SiFigma className="techLogo" />
            </abbr>
            <abbr title="Postman">
              <SiPostman className="techLogo" />
            </abbr>
          </div>
        </div>
      </div>
    </>
  );
}

SkillCard.propTypes = {
  id: PropTypes.string,
};
