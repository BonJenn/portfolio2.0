import React from 'react';
import styles from '../styles/hero_3.module.css';

const Hero3Work = ({ projects }) => {
  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>My Recent Work</h2>
      <p className={styles.description}>
        The businesses below are all full-stack solutions built with React, Next.js, Node.js, Express, MongoDB, and MySQL.
      </p>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <a key={index} href={project.link} className={styles.project}>
            <img src={project.image} alt={project.name} className={styles.projectImage} />
            <div className={styles.overlay}>View Site</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero3Work;
