"use client";
import React, { useState } from 'react';
import styles from '../styles/hero_3.module.css';
import Modal from './Modal';

const Hero3Work = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id="work" className={styles.hero}>
      <h2 className={styles.title}>My Recent Work</h2>
      <p className={styles.description}>
        The businesses below are all full-stack solutions built with React, Next.js, Node.js, Express, MongoDB, and MySQL.
      </p>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={styles.project}
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.image} alt={project.name} className={styles.projectImage} />
            <div className={styles.overlay}>Learn More</div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Hero3Work;
