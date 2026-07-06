import React from 'react';
import Image from 'next/image';
import styles from '../styles/hero_1.module.css';
import image from '../../../public/images/jonathan_benn.png';

const Hero1 = () => {
  const proofSignals = [
    {
      label: 'Automation sprints',
      value: 'Workflow audits, dashboards, apps, and AI-assisted systems'
    },
    {
      label: 'Operator software',
      value: 'Queues, approvals, inventory, reporting, and support recovery'
    },
    {
      label: 'Apps and portals',
      value: 'React Native, Next.js, auth, APIs, and cloud data'
    },
    {
      label: 'Agent-enabled delivery',
      value: 'Codex, Claude Code, RAG, review loops, and release checklists'
    }
  ];

  const showcaseProjects = [
    {
      name: 'Vantaview',
      type: 'Realtime video SaaS',
      image: '/images/work_vantaview.png'
    },
    {
      name: 'Blackcrab',
      type: 'Agent command center',
      image: '/images/work_blackcrab.png'
    },
    {
      name: 'Muha Members',
      type: 'Warehouse fulfillment',
      image: '/images/work_muha_warehouse.png',
      fit: 'contain'
    }
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>AI automation, dashboards, and product systems</span>
        <h1 className={styles.title}>Practical AI automation for businesses with messy workflows.</h1>
        <p className={styles.subtitle}>
          I am Jonathan Benn, a full-stack and mobile engineer who builds the software
          around operations: AI-assisted workflows, internal tools, customer portals,
          integrations, and apps that people can actually run after launch.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.primaryButton}>Send Me a Workflow</a>
          <a href="#agentic-workflows" className={styles.secondaryButton}>See Proof</a>
          <a
            href="/Resume-Jonathan_Benn.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeButton}
          >
            View Resume
          </a>
        </div>
        <div className={styles.signalGrid} aria-label="Portfolio highlights">
          {proofSignals.map((signal) => (
            <div key={signal.label}>
              <strong>{signal.label}</strong>
              <span>{signal.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.showcase} aria-label="Selected project and workflow previews">
        <div className={styles.portraitPanel}>
          <Image
            src={image}
            alt="Jonathan Benn"
            className={styles.image}
            priority
          />
          <div className={styles.portraitMeta}>
            <span>Current focus</span>
            <strong>building AI workflow systems, dashboards, apps, and automation tools</strong>
          </div>
        </div>

        <div className={styles.projectStack}>
          {showcaseProjects.map((project, index) => (
            <article className={styles.previewCard} key={project.name}>
              <div className={`${styles.previewImageWrap} ${project.fit === 'contain' ? styles.containPreview : ''}`}>
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width: 860px) 82vw, 360px"
                  className={styles.previewImage}
                  priority={index === 0}
                />
              </div>
              <div>
                <span>{project.type}</span>
                <strong>{project.name}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.workflowStrip} aria-label="Build workflow">
          <span>Audit</span>
          <span>Automate</span>
          <span>Dashboard</span>
          <span>Retain</span>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
