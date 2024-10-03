// MobileNav.js
import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-nav ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="mobile-nav-content">
        <img
          className="logo-mb"
          src={require("../../assets/JJ-LOGO.png")}
          alt="logo"
        />
        <ul>
          <li>
            <a href="#" className="menu-item">
              Home
            </a>
          </li>
          <li>
            <a href="#/projects" className="menu-item">
              Projects
            </a>
          </li>
          <li>
            <a href="#/contact" className="menu-item">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
