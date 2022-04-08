import React, { useState } from "react";
import "./Resume.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
      return Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>

        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* Data */
  const resumeBullets = [
    {
      label: "Education",
      logoSrc: "education.svg",
    },
    {
      label: "Work History",
      logoSrc: "work-history.svg",
    },
    {
      label: "Programming Skills",
      logoSrc: "programming-skills.svg",
    },
    {
      label: "Projects",
      logoSrc: "projects.svg",
    },
    {
      label: "Interests",
      logoSrc: "interests.svg",
    },
  ];

  const programmingSkillDetails = [
    {
      skill: "JavaScript",
      ratingPercentage: 85,
    },
    {
      skill: "React JS",
      ratingPercentage: 85,
    },
    {
      skill: "React Native",
      ratingPercentage: 85,
    },
    {
      skill: "Express JS",
      ratingPercentage: 89,
    },
    {
      skill: "Node JS",
      ratingPercentage: 89,
    },
    {
      skill: "Mongo Db",
      ratingPercentage: 70,
    },
    {
      skill: "Core Java",
      ratingPercentage: 80,
    },
    {
      skill: "HTML",
      ratingPercentage: 80,
    },
    {
      skill: "CSS",
      ratingPercentage: 80,
    },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Teachnologies Used: React JS, Bootsrap",
    },
    {
      title: "Project ... ",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Description-description-description-description-description-description.",
      subHeading: "Teachnologies Used: ...,...",
    },
    {
      title: "Project ... ",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Description-description-description-description-description-description.",
      subHeading: "Teachnologies Used: ...,...",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Dong Nai University of Technology"}
        subHeading={"BACHELOR OF SCIENCE INFOMATION TECHNOLOGY"}
        fromDate={"2020"}
        toDate={"2024"}
      />

      <ResumeHeading
        heading={"High School"}
        subHeading={"High School Tran Phu"}
        fromDate={"2017"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"Dong Nai University of Technology"}
        subHeading={"BACHELOR OF SCIENCE INFOMATION TECHNOLOGY"}
        fromDate={"2020"}
        toDate={"2024"}
      />
      </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Company History Made"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"Start"}
          toDate={"End"}
        />

        <div className="experence-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div>

        <div className="experience-description">
          <span className="resume-description-text">
            {" "}
            - Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            {" "}
            Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.
          </span>
          <br />
          <span className="resume-description-text">
            {" "}
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
        </div>
      </div>
      </div>,
      <div className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillDetails.map((skill, index) => {
          return (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className="active-percentage"
                ></div>
              </div>
            </div>
          );
        })}
      </div>,

      <div className="resume-screen-container" key="propjects">
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>,

      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Interests"
          description="description interests"
        />
        <ResumeHeading
          heading="Music"
          description="Listening to music helps me relax"
        />
        <ResumeHeading
          heading="FootBall"
          description="I like soccer because it keeps me running after hours of coding"
        />
      </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeigh = 360;
    let newCarousalOffset = {
      style: {
        transform: "translateY(" + index * offsetHeigh * -1 + "px)",
      },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
