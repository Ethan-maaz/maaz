import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import "./about.css";
import CollapsibleExample from './collapsibleExample.js'; // Import the navbar component

const AboutMe = () => {
  const sections = [
    {
      title: "About Me",
      content: `Hello! I'm Maaz Ajaz, a dedicated and passionate Computer Science student at Sharda University. Originally from Bhadohi, Uttar Pradesh, I hold a Bachelor's degree in Commerce from Delhi University. My journey into the world of technology has been both challenging and rewarding, and I've embraced every opportunity to learn and grow.`,
    },
    {
      title: "My Achievements",
      content: `My enthusiasm for coding and problem-solving has led me to participate in several hackathons, where I have been fortunate enough to secure 4th and 2nd positions in two out of the three I entered. These experiences have sharpened my skills, fostered teamwork, and provided a platform to innovate and create.`,
    },
    {
      title: "Skills and Certifications",
      content: `I believe in continuous learning and have earned multiple certifications in website development, Python development, and C and C++ programming languages. These certifications reflect my commitment to expanding my knowledge base and staying updated with the latest technological advancements.`,
    },
    {
      title: "Professional Experience",
      content: `Recently, I completed a 1-month internship, which offered me practical experience and insights into the industry. This internship not only honed my technical skills but also taught me the importance of adaptability and effective communication in a professional setting.`,
    },
    {
      title: "Personal Interests",
      content: `When I'm not coding, I enjoy playing first-person shooter (FPS) games. This hobby not only provides a fun break but also enhances my strategic thinking and quick decision-making abilities.`,
    },
    {
      title: "Looking Forward",
      content: `As I continue my academic journey, I am eager to take on new challenges and contribute to innovative projects. I am passionate about using my skills to solve real-world problems and make a meaningful impact in the tech community. Feel free to explore my website to learn more about my projects and experiences. Let's connect and collaborate on exciting opportunities!`,
    },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection(
      (prevSection) => (prevSection - 1 + sections.length) % sections.length
    );
  };

  return (
    <div className="App-2">
      <CollapsibleExample /> {/* Include the navbar component */}
      <div className="content-2">
        <h1 className="about-text">{sections[currentSection].title}</h1>
        <p className="about-para">{sections[currentSection].content}</p>
      </div>
      <div className="navigation-buttons">
          <button className="prevbutton" onClick={prevSection}>
            next
          </button>
          <button className="nextbutton" onClick={nextSection}>
            prev
          </button>
       </div>
      <div className="spline-2">
        <Spline scene="https://prod.spline.design/Ny6pLncobRUvaZ6X/scene.splinecode" />
      </div>
    </div>
  );
};

export default AboutMe;
