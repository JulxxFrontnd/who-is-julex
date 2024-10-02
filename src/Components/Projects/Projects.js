import React, { useState, useEffect } from "react";
import "./Projects.css";
import "../SameStyle.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Projects = () => {
  const project1Images = [
    require("../../assets/K1.png"),
    require("../../assets/K2.png"),
    require("../../assets/K3.png"),
    require("../../assets/K4.png"),
  ];

  const project2Images = [
    require("../../assets/D1.png"),
    require("../../assets/D2.png"),
    require("../../assets/D3.png"),
    require("../../assets/D4.png"),
  ];

  const project3Images = [require("../../assets/coffee-project.png")];

  const useSlideshow = (images, interval) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const slideShow = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);

      return () => clearInterval(slideShow);
    }, [images, interval]);

    return images[currentImageIndex];
  };

  const kalibornCurrentImage = useSlideshow(project1Images, 4000);
  const project2CurrentImage = useSlideshow(project2Images, 4000);

  const handleClickImage = () => {
    window.open(
      "https://www.figma.com/proto/sogFgEMJXXRDKYNCKrTMKT/Coffee-Shop-By-Julex-Jones?node-id=2-2&starting-point-node-id=2%3A2&t=zrKvF1IqB0T3w825-1"
    );
  };

  return (
    <>
      <Header />
      <main className="projects">
        <div className="contents">
          <div className="title">
            <h1>My Projects</h1>
          </div>

          {/* Project 1 */}
          <div className="projects-wrapper">
            <div className="image-holder">
              <img
                src={kalibornCurrentImage}
                alt="Kaliborn Lifestyle"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <label>Kaliborn Lifestyle (PHP)</label>
            <p>
              A online ordering system school project for a local store that
              sells premium quality shoes and clothing.
            </p>
          </div>

          {/* Project 2 */}
          <div className="projects-wrapper">
            <div className="image-holder">
              <img
                src={project2CurrentImage}
                alt="Project Number 2"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <label>Document Tracking System (MERN Stack)</label>
            <p>
              A web application system for tracking hard copy documents that are
              sent into another office inside an organization or institution.
            </p>
          </div>

          {/* Project 3 for upcoming project or updates*/}
          <div className="projects-wrapper">
            <div className="image-holder">
              <img
                src={project3Images}
                alt="Project Number 3"
                onClick={handleClickImage}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <label>Business Showcase UX Design (Figma)</label>
            <p>
              A coffee shop website design that is dedicated to showcase a
              business online.
            </p>
          </div>

          <div className="projects-box">
            <h3>TO BE CONTINUED...</h3>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
