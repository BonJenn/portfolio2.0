import React from 'react';
import styles from '../styles/automation_studio.module.css';

const AutomationStudio = () => {
  const services = [
    {
      label: 'AI workflow automation',
      text: 'LLM-assisted intake, triage, summaries, internal assistants, agent handoffs, and review flows that keep humans in control.'
    },
    {
      label: 'Dashboards and internal tools',
      text: 'Operator queues, admin panels, reporting views, inventory tools, approval paths, and exception handling for work that cannot live in a spreadsheet.'
    },
    {
      label: 'Apps, portals, and integrations',
      text: 'Customer portals, mobile apps, API integrations, authentication, subscriptions, notifications, and cloud-backed product surfaces.'
    },
    {
      label: 'Document and data systems',
      text: 'RAG-style knowledge tools, OCR/PDF workflows, structured CRM context, searchable records, and clean data models for automation.'
    }
  ];

  const engagements = [
    {
      name: 'Workflow audit',
      detail: 'Map the manual process, find the leverage point, and define the smallest useful automation sprint.'
    },
    {
      name: '$5k-$15k+ sprint',
      detail: 'Build one production-ready workflow, dashboard, portal, or AI-assisted process with handoff notes.'
    },
    {
      name: 'Monthly implementation partner',
      detail: 'Keep improving the system, add integrations, monitor edge cases, and build the next workflow.'
    }
  ];

  const fitSignals = [
    'Operations are trapped in spreadsheets',
    'Your team needs dashboards, queues, or portals',
    'A no-code automation is becoming real software',
    'You want AI help without losing review and control'
  ];

  return (
    <section id="studio" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Expert-led AI automation studio</span>
        <h2>Practical automation systems for businesses with messy workflows.</h2>
        <p>
          I help founders, agencies, and operators turn manual handoffs into usable software:
          AI-assisted workflows, internal dashboards, customer portals, integrations, and
          mobile/web apps that are built to survive real users.
        </p>
      </div>

      <div className={styles.serviceGrid} aria-label="Automation services">
        {services.map((service) => (
          <article key={service.label} className={styles.serviceCard}>
            <strong>{service.label}</strong>
            <p>{service.text}</p>
          </article>
        ))}
      </div>

      <div className={styles.engagementBand}>
        <div className={styles.engagementIntro}>
          <span className={styles.eyebrow}>How work usually starts</span>
          <h3>Start with one painful workflow, then turn the useful pieces into a system.</h3>
        </div>

        <div className={styles.engagementList}>
          {engagements.map((engagement, index) => (
            <article key={engagement.name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{engagement.name}</strong>
              <p>{engagement.detail}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.fitRow} aria-label="Good fit signals">
        {fitSignals.map((signal) => (
          <span key={signal}>{signal}</span>
        ))}
      </div>
    </section>
  );
};

export default AutomationStudio;
