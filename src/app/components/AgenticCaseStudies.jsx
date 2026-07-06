"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/agentic_case_studies.module.css';
import Modal from './Modal';
import ProjectMedia from './ProjectMedia';

const WorkflowVisual = ({ steps }) => (
  <div className={styles.workflowVisual} aria-hidden="true">
    <div className={styles.workflowHeader}>
      <span>Live ops board</span>
      <span>Agent-assisted</span>
    </div>
    <div className={styles.workflowRail}>
      {steps.map((step, index) => (
        <div className={styles.workflowStep} key={step}>
          <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
          <span>{step}</span>
        </div>
      ))}
    </div>
    <div className={styles.workflowSignals}>
      <span>Grouped orders</span>
      <span>Low stock</span>
      <span>Returns</span>
    </div>
  </div>
);

const ScreenshotVisual = ({ project }) => (
  <div className={`${styles.screenshotVisual} ${styles[project.tone] || ''}`}>
    <Image
      src={project.image}
      alt={`${project.name} case study preview`}
      fill
      sizes="(max-width: 760px) 92vw, 520px"
      className={styles.screenshotImage}
    />
  </div>
);

const CaseStudyVisual = ({ project }) => {
  if (project.caseStudy.visual === 'workflow') {
    return <WorkflowVisual steps={project.caseStudy.workflowSteps} />;
  }

  return <ScreenshotVisual project={project} />;
};

const AgenticCaseStudies = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (!projects?.length) return null;

  const proofPoints = [
    'Real workflows, not demo theater',
    'Agents used for review, speed, and operational memory',
    'Interfaces built around the people running the business'
  ];

  return (
    <section id="agentic-workflows" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Case studies</span>
          <h2>Proof that automation is strongest when it is wrapped in real software.</h2>
          <p>
            These projects show the part that matters to clients: mapping the workflow,
            building the product surface, adding agent help where it is useful, and leaving
            behind software people can trust.
          </p>
          <div className={styles.proofRow} aria-label="Agentic workflow proof points">
            {proofPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>

        <div className={styles.cases}>
          {projects.map((project) => (
            <button
              className={`${styles.caseCard} ${styles[`${project.tone}Card`] || ''}`}
              key={project.name}
              type="button"
              onClick={() => setSelectedProject(project)}
              aria-label={`Open agentic workflow case study for ${project.name}`}
            >
              <CaseStudyVisual project={project} />

              <div className={styles.caseBody}>
                <div className={styles.caseMeta}>
                  <span>{project.caseStudy.eyebrow}</span>
                  <span>{project.technologies[0]}</span>
                </div>
                <h3>{project.caseStudy.headline}</h3>
                <p>{project.caseStudy.lead}</p>

                <div className={styles.metricRow}>
                  {project.caseStudy.metrics.map((metric) => (
                    <span key={`${project.name}-${metric.label}`}>
                      <strong>{metric.value}</strong>
                      {metric.label}
                    </span>
                ))}
              </div>

              <div className={styles.caseFooter}>
                  <span>Open workflow</span>
                  <span aria-hidden="true">-&gt;</span>
                </div>
              </div>
            </button>
          ))}
        </div>
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

export default AgenticCaseStudies;
