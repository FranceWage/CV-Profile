import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading.js";
import ScrollService from "./../../utilities/ScrollService.js";
import Animations from "./../../utilities/Animations.js";
import Profile from './../Home/Profile/Profile';
import './AboutMe.css';

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id)
      return Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCRREN_CONTSANTS = {
    description:
      "Full Stack Web,Full Stack Web,Full Stack Web,Full Stack Web,Full Stack Web,Full Stack Web,Full Stack Web,Full Stack Web,Full Stack Web,Full Stack Web,Full Stack Web",
    highlights: {
      bullets: [
        "Full Stack web and mobile development",
        "Full Stack web and mobile development",
        "Full Stack web and mobile development",
        "Full Stack web and mobile development",
        "Full Stack web and mobile development",
        "Full Stack web and mobile development",
      ],
      heading:"Here aere a Few Highlights:"
    }
  };
  const renderHighlight = () => {
    return (
      SCRREN_CONTSANTS.highlights.bullets.map((value, i) => (
        <div className="highlight" key={i}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
      )) 
    )
  }

  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">{SCRREN_CONTSANTS.description}</span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCRREN_CONTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >Hire Me </button>
            <a href="ehizcv.pdf" download="ehizcv.pdf" target="_blank">
              {" "}
              {/*Chuyển trang vào CV */}
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
