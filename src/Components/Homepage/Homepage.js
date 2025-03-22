import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaElementor } from "react-icons/fa6";
import { FaAnglesUp } from "react-icons/fa6";
// import { SiMongodb } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";

const Homepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  // Function to scroll to the top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling effect
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="content-wrapper">
        <div className="main-wrapper">
          <div className="banner-container">
            {!isLoaded && <div className="loading-spinner"></div>}
            <img
              className="banner-img"
              src={require("../../assets/julex-banner.png")}
              alt="banner"
              onLoad={handleImageLoad}
              style={{ opacity: isLoaded ? 1 : 0 }}
            />
            <img
              className="banner-img-mobile"
              src={require("../../assets/julex-mobile.png")}
              alt="banner"
              onLoad={handleImageLoad}
              style={{ opacity: isLoaded ? 1 : 0 }}
            />
          </div>
          <div className="contents-wrapper">
            <div className="aboutme-container">
              <div className="aboutme-information">
                <h1>Hello there, I'm Julex Jones!</h1>
                <p>A Frontend Web Developer.</p>
                <div className="resume-container">
                  <a
                    href="/julxx-portfolio/Julex_Jones_Severo_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button title="Click to view my Resume">Resume</button>
                  </a>
                </div>
              </div>
            </div>

            <h2 className="skills-label">Things I can do</h2>
            <div className="skills-container">
              <div className="skills-box">
                <div className="grid-container">
                  <div className="grid-item">
                    <FaWordpress className="s-icon" />
                    Wordpress
                  </div>
                  <div className="grid-item">
                    <FaElementor className="s-icon" />
                    Elementor
                  </div>
                  <div className="grid-item">
                    <FaHtml5 className="s-icon" />
                    HTML
                  </div>
                  <div className="grid-item">
                    <FaCss3Alt className="s-icon" />
                    CSS
                  </div>
                  <div className="grid-item">
                    <IoLogoJavascript className="s-icon" />
                    JavaScript
                  </div>
                  <div className="grid-item">
                    <FaReact className="s-icon" />
                    React
                  </div>
                </div>
              </div>
              <div className="skills-box-two">
                <label style={{ color: "white", marginBottom: "10px" }}>
                  I'm also knowledgeable with these
                </label>
                <div className="grid-container-two">
                  {/* <div className="grid-item-two">
                    {" "}
                    <SiMongodb className="s-icon" />
                    MongoDB
                  </div>
                  <div className="grid-item-two">
                    {" "}
                    <FaNodeJs className="s-icon" />
                    NodeJS
                  </div> */}
                  <div className="grid-item-two">
                    {" "}
                    <BsGit className="s-icon" />
                    Git
                  </div>
                  <div className="grid-item-two">
                    {" "}
                    <SiAdobephotoshop className="s-icon" />
                    Photoshop
                  </div>
                  <div className="grid-item-two">
                    <SiCanva className="s-icon" />
                    Canva
                  </div>
                  <div className="grid-item-two">
                    <FaFigma className="s-icon" />
                    Figma
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="work-exp">
              <label>Sneak peek about me?</label>
              <div></div>
            </div> */}

            <div className="goto-top" onClick={scrollToTop}>
              <FaAnglesUp className="up-icon"/>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
