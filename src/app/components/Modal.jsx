import React from 'react';
import styles from '../styles/modal.module.css';

const Modal = ({ project, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h2>{project.name}</h2>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.technologies}>
          <h3>Technologies Used:</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles.buttons}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.button}>
            View Site
          </a>
          {project.appStore ? (
            <a href={project.appStore} target="_blank" rel="noopener noreferrer" className={styles.button}>
              Download Now
            </a>
          ) : (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.button}>
              View GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;