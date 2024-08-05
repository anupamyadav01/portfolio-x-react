import "./HomeBannerStyle.css";
import PropTypes from "prop-types";

export default function HomeBanner({ id }) {
  return (
    <div className="home" id={id}>
      <div className="content">
        <div className="wrapper">
          <div className="name">Anupam Yadav</div>
          <div className="staticTitle">
            Frontend
            <div className="hrLine"></div>
          </div>
          <ul className="dynamicTitle">
            <li>
              <span>Developer</span>
            </li>
          </ul>
          <a
            className="btn"
            href="https://www.linkedin.com/in/anupamyadav01/"
            target="_blank"
          >
            Hire Me
          </a>
        </div>
      </div>
      <div className="mask"></div>
    </div>
  );
}

HomeBanner.propTypes = {
  id: PropTypes.string,
};
