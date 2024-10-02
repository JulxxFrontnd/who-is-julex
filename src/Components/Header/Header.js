import "./Header.css";
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";
import MobileNav from "../MobileNav/MobileNav"; // Assuming the MobileNav component is in the same folder

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <ul>
            <li>
              <a href="/" className="menu-item" title="Go to Home?">
                <img
                  className="logo"
                  src={require("../../assets/JJ-LOGO.png")}
                  alt="logo"
                />
              </a>
            </li>
          </ul>
          <ul className="desktop-menu">
            <li>
              <a href="/" className="menu-item" title="Go to Home?">
                Home
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="menu-item"
                title="Go to see My Projects?"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="menu-item"
                title="Go to Contact me?"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="menu-btn" onClick={handleBurgerClick}>
            <FaHamburger className="burger" />
          </div>
        </div>
      </nav>
      {/* Mobile menu component */}
      {isMobileNavOpen && (
        <MobileNav isOpen={isMobileNavOpen} onClose={handleBurgerClick} />
      )}
    </>
  );
};

export default Header;
