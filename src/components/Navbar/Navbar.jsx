import { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-scroll";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
// import { Link } from "react-router-dom";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleCLick = () => setClick(!click);

  return (
    <nav className="header">
      <div className="logo">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          <div className="logo-img">
            <span className="blink">&lt;</span>
            <span>&#47;</span>AY<span className="blink">&gt;</span>
          </div>
        </Link>
      </div>
      <ul
        className={click ? "nav-menu active" : "nav-menu"}
        onClick={handleCLick}
      >
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="/projects"
            spy={true}
            smooth={true}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className={click ? "social-links active" : "social-links"}>
        <a href="https://www.linkedin.com/in/anupamyadav01/" target="_blank">
          <FaLinkedin
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
        <a href="https://github.com/anupamyadav01" target="_blank">
          <FaGithub
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
        <a href="https://www.instagram.com/anupamyadav01/" target="_blank">
          <FaInstagram
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
      </div>
      <div className="hamburger" onClick={handleCLick}>
        {click ? (
          <FaTimes className="bars" size={25} />
        ) : (
          <FaBars className="bars" size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
}
