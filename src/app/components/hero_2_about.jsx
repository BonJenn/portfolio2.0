import React from 'react';
import styles from '../styles/hero_2.module.css';

const Hero2About = () => {
  const operatingPrinciples = [
    {
      label: 'Workflow before tools',
      text: 'Start with the user path, the business pressure, and the smallest useful system that can remove real drag.'
    },
    {
      label: 'Agents with guardrails',
      text: 'Use Codex, Claude Code, and LLM APIs for leverage while keeping architecture, review, QA, and release judgment human-owned.'
    },
    {
      label: 'Built for operators',
      text: 'Design for the people running the system: queues, exceptions, telemetry, approvals, support recovery, and clear handoffs.'
    }
  ];

  const workflowSteps = [
    'Map the workflow',
    'Prototype the surface',
    'Build the data path',
    'Instrument the release',
    'Tighten from feedback'
  ];

  const skillGroups = [
    {
      label: 'Languages',
      skills: 'TypeScript, JavaScript, Python, Swift, SQL, PostgreSQL, HTML/CSS'
    },
    {
      label: 'Mobile',
      skills: 'React Native, Expo, iOS, Android, App Store, Google Play'
    },
    {
      label: 'Frontend',
      skills: 'React, Next.js, Angular v10+, TailwindCSS, responsive UI systems'
    },
    {
      label: 'Backend & APIs',
      skills: 'Node.js, Express, Flask, RESTful APIs, Swagger/OpenAPI, SQL Alchemy'
    },
    {
      label: 'Cloud & Data',
      skills: 'Firebase, Supabase, AWS Lambda, MongoDB, PostgreSQL, Cloud Storage'
    },
    {
      label: 'Engineering Tools',
      skills: 'Git, GitHub, CI/CD pipelines, Figma, Claude Code, Codex, RAG pipelines'
    },
    {
      label: 'Practices',
      skills: 'Agile, TDD, OOP, code review, release management, QA workflows'
    }
  ];

  return (
    <section id="about" className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>Builder profile</span>
        <h2 className={styles.title}>Senior implementation without the agency fog.</h2>
        <p className={styles.description}>
          I am a full-stack engineer with 6+ years of experience designing and deploying production web, mobile, desktop, and operations software. I work across architecture, Firebase and AWS-backed infrastructure, APIs, release workflows, code review, QA, and product collaboration.
        </p>
        <p className={styles.highlight}>
          The useful part is the range: I can talk through the business workflow, shape the product surface, build the data path, and keep the release loop practical.
        </p>
        <div className={styles.principles}>
          {operatingPrinciples.map((principle) => (
            <article key={principle.label}>
              <strong>{principle.label}</strong>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.skills}>
        <div>
          <span className={styles.eyebrow}>Build flow</span>
          <h3 className={styles.skillsTitle}>How I move from manual process to working system</h3>
          <ol className={styles.workflowList}>
            {workflowSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <span className={styles.eyebrow}>Stack</span>
          <h3 className={styles.stackTitle}>What I work with</h3>
          <ul className={styles.skillsList}>
            {skillGroups.map((group) => (
              <li key={group.label}>
                <strong>{group.label}</strong>
                <span>{group.skills}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero2About;
