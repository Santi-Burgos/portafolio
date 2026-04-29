import React, { useState, useEffect } from 'react';
import { FaCode } from 'react-icons/fa';
import { skillsData } from '../data/skills';

const TechStack = () => {

  const [isTech, setIsTech] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsTech(window.innerWidth < 580);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  


  return (
    <section className="tech-stack-section" id="stack">
      <div className="projects-presentation">
        <h2 className="gradient-text">
          <FaCode />
          <p>
            {isTech ? "TECNOLOGÍAS" : "HABILIDADES Y TECNOLOGÍAS"}
            
          </p>
        </h2>
      </div>

      <div className="tech-cards-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-card">
            <div className="skill-card-header">
              <span className="skill-category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-list">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
