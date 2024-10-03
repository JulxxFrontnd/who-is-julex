import React from "react";
import "./Footer.css";
import { RiGithubFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="foot-wrapper">
      <div className="foot-container">
        <img
          src={require("../../assets/JJ-LOGO.png")}
          alt="logo"
          onContextMenu={(e) => e.preventDefault()}
        />

        <div className="foot-content">
          <h1>Footer than you think.</h1>
          <div className="link-container">
            <a
              href="https://www.linkedin.com/in/julex-jones-severo"
              className="links"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
            >
              <RiLinkedinBoxFill />
            </a>
            <a
              href="https://github.com/JulxxFrontnd"
              className="links"
              target="_blank"
              rel="noopener noreferrer"
              title="Github Profile"
            >
              <RiGithubFill />
            </a>
            <a
              href="/julxx-portfolio/#/contact"
              className="links"
              title="Contact Me"
            >
              <MdAlternateEmail />
            </a>
          </div>
        </div>
      </div>
      <div className="low-foot-container">
        <p>© 2024 | Made by Julex Jones</p>
      </div>
    </footer>
  );
};

export default Footer;
