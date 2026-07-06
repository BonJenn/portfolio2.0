"use client";

import React, { useState } from 'react';
import styles from '../styles/hero_3.module.css';
import Modal from './Modal';
import ProjectMedia from './ProjectMedia';

const Hero3Work = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const gallerySignals = [
    `${projects.length} shipped projects`,
    'Mobile, web, desktop',
    'Cloud, media, AI, ops'
  ];

  return (
    <section id="work" className={styles.hero}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>More shipped work</span>
        <h2 className={styles.title}>Additional products, client builds, and release-ready interfaces.</h2>
        <p className={styles.description}>
          The deep-dive projects above show the agentic workflow story. This section keeps
          the broader portfolio easy to scan without repeating the same cards.
        </p>
        <div className={styles.gallerySignals} aria-label="Project gallery summary">
          {gallerySignals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </div>
      </div>

      <div className={styles.projects}>
        {projects.map((project) => (
          <button
            key={project.name}
            type="button"
            className={`${styles.project} ${styles[project.tone] || ''}`}
            onClick={() => setSelectedProject(project)}
            aria-label={`Open details for ${project.name}`}
          >
            <ProjectMedia project={project} />
            <div className={styles.projectBody}>
              <div className={styles.projectMeta}>
                <span>{project.category}</span>
                <span>{project.technologies[0]}</span>
              </div>
              <h3>{project.name}</h3>
              {project.role && <p className={styles.projectRole}>{project.role}</p>}
              <p className={styles.projectDescription}>{project.description}</p>
              {project.impact && <p className={styles.projectImpact}>{project.impact}</p>}
              <ul className={styles.projectBullets}>
                {project.highlights.slice(0, 2).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className={styles.cardFooter}>
                <span>View details</span>
                <span aria-hidden="true">-&gt;</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          renderMedia={(project) => <ProjectMedia project={project} variant="modal" />}
        />
      )}
    </section>
  );
};

export default Hero3Work;
