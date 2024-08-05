import "./AboutMeStyle.css";
import { Profile } from "../../images/index";
import PropTypes from "prop-types";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>Hey there, 👋</h3>
        I'm <span> Anupam </span>, a final year student pursuing{" "}
        <span>B.Tech in CSE </span> from Jaipur Rajasthan, India. I build
        websites with a focus on responsiveness, accessibility and pleasing
        aesthetics. While I specialize in <span>frontend development,</span> I'm
        also delving into <span>backend technologies.</span> I'm all ears for{" "}
        <span>new opportunities</span> to create awesome software solutions.
        Let's team up and cook up some digital wonders together.
        <br /> <br />
        Beyond coding, <span>I'm an artist at heart❤️</span> – you'll often find
        me lost in the world of sketches and colors. I really enjoy being
        creative, so I like to spend my free time drawing, sketching, and
        painting. It's a great way for me to unwind and tap into my creative
        side. Want to know more about me? Feel free to{" "}
        <a className="resume" href="" target="_blank" rel="noopener noreferrer">
          explore my resume.
        </a>
      </div>
      <div className="profile-photo">
        <div className="heading"> About Me</div>
        <div className="border border-red-500 rounded-full overflow-hidden">
          <img className="img" src={Profile} alt="Profile" />
        </div>
        <div className="mt-5 w-full flex flex-col justify-center items-center">
          <div className="text-base">Anupam Yadav</div>
          <p className="text-xl">(Frontend Developer)</p>
        </div>
      </div>
    </div>
  );
}

AboutMe.propTypes = {
  id: PropTypes.string,
};
