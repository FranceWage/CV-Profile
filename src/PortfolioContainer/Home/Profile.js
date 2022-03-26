import React from "react";
import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/luongphap1810" target="_blank">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.google.com" target="_blank">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/lvp_1810/" target="_blank">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello,I'M <span className="highlighted-text">Phap</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "I'M Programmer💻",
                    1000,
                    "React/React-Native Dev📱",
                    1000,
                    "18 - 10 - 2002🎁",
                    1000,
                    "26 - 03 - 2022💼",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                "Programming isn't about what you know; it's about what you can
                figure out.” - Chris Pine
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">{""}Hire Me </button>
            <a href="ehizcv.pdf" download="ehizcv.pdf" target="_blank">
              {" "}
              {/*Chuyển trang vào CV */}
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
