"use client";

import React, { useEffect } from 'react';
import styles from '../styles/modal.module.css';

const Modal = ({ project, onClose, renderMedia }) => {
  const caseStudy = project.caseStudy;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const actions = project.actions || [
    project.link && {
      href: project.link,
      label: project.linkLabel || (project.appStore && project.link === project.appStore ? 'Open App Store' : 'View Live')
    },
    project.appStore && project.appStore !== project.link && {
      href: project.appStore,
      label: 'Open App Store'
    },
    project.github && {
      href: project.github,
      label: 'View GitHub'
    }
  ].filter(Boolean);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button className={styles.closeButton} onClick={onClose} aria-label="Close project details">
          Close
        </button>

        <div className={styles.mediaColumn}>
          {renderMedia(project)}
        </div>

        <div className={styles.copyColumn}>
          <span className={styles.category}>{project.category}</span>
          <h2 id="project-modal-title">{project.name}</h2>
          <p className={styles.description}>{project.description}</p>

          {caseStudy?.metrics?.length > 0 && (
            <div className={styles.modalMetrics}>
              {caseStudy.metrics.map((metric) => (
                <span key={`${project.name}-${metric.label}`}>
                  <strong>{metric.value}</strong>
                  {metric.label}
                </span>
              ))}
            </div>
          )}

          {project.role && (
            <div className={styles.detailBlock}>
              <h3>Role</h3>
              <p className={styles.detailText}>{project.role}</p>
            </div>
          )}

          {project.impact && (
            <div className={styles.detailBlock}>
              <h3>Resume-backed impact</h3>
              <p className={styles.detailText}>{project.impact}</p>
            </div>
          )}

          {caseStudy && (
            <div className={styles.caseStudyGrid}>
              {caseStudy.problem && (
                <div className={styles.caseStudyBlock}>
                  <h3>Problem</h3>
                  <p>{caseStudy.problem}</p>
                </div>
              )}
              {caseStudy.productStory && (
                <div className={styles.caseStudyBlock}>
                  <h3>What I built</h3>
                  <p>{caseStudy.productStory}</p>
                </div>
              )}
              {caseStudy.agentWorkflow && (
                <div className={styles.caseStudyBlock}>
                  <h3>Agent workflow</h3>
                  <p>{caseStudy.agentWorkflow}</p>
                </div>
              )}
              {caseStudy.operationalPayoff && (
                <div className={styles.caseStudyBlock}>
                  <h3>Payoff</h3>
                  <p>{caseStudy.operationalPayoff}</p>
                </div>
              )}
            </div>
          )}

          {caseStudy?.proofPoints?.length > 0 && (
            <div className={styles.detailBlock}>
              <h3>Proof points</h3>
              <ul className={styles.highlights}>
                {caseStudy.proofPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.detailBlock}>
            <h3>Built / owned</h3>
            <ul className={styles.highlights}>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h3>Stack & Focus</h3>
            <div className={styles.technologies}>
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          {actions.length > 0 && (
            <div className={styles.buttons}>
              {actions.map((action) => (
                <a
                  key={`${action.label}-${action.href}`}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  {action.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
