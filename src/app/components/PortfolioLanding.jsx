"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import { readLeadAttribution } from './LeadAttribution';
import styles from '../styles/portfolio_landing.module.css';

const services = [
  {
    number: '01',
    title: 'Automate the work',
    copy: 'I connect your tools and remove steps your team does by hand.'
  },
  {
    number: '02',
    title: 'Build the app',
    copy: 'I build web and mobile apps that are fast, clear, and ready to use.'
  },
  {
    number: '03',
    title: 'Fix the system',
    copy: 'I clean up slow tools, broken handoffs, and software that cannot keep up.'
  }
];

const projects = [
  {
    name: 'Warehouse fulfillment system',
    label: 'Operations software',
    image: '/images/work_muha_warehouse.png',
    copy: 'Orders, stock, shipping labels, returns, and support all work from one place.',
    tags: ['Warehouse queues', 'Shipping', 'Inventory']
  },
  {
    name: 'Vantaview',
    label: 'Live video SaaS',
    image: '/images/work_vantaview.png',
    copy: 'A Mac app for live video, smart camera help, customer access, and product updates.',
    tags: ['Mac app', 'Real-time video', 'AI tools']
  },
  {
    name: 'Blackcrab',
    label: 'Agent desktop app',
    image: '/images/work_blackcrab.png',
    copy: 'A desktop command center for running, finding, and reviewing AI coding work.',
    tags: ['Desktop app', 'AI agents', 'Local tools']
  }
];

export default function PortfolioLanding() {
  const [formState, handleSubmit] = useForm('mzzpovpd');
  const [attribution, setAttribution] = useState({});

  useEffect(() => {
    setAttribution(readLeadAttribution());
  }, []);

  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <a className={styles.brand} href="#top" aria-label="Jonathan Benn home">
          Jonathan Benn
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className={styles.navCta} href="#contact">Start a project</a>
      </header>

      <section id="top" className={styles.hero}>
        <Image
          src="/images/work_muha_warehouse.png"
          alt="Warehouse operations dashboard built by Jonathan Benn"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Software for real work</p>
          <h1>AI automation and custom software.</h1>
          <p className={styles.heroCopy}>
            I build apps and tools that save time. Show me where work gets stuck,
            and I will turn it into software your team can use.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#contact">Show me the busy work</a>
            <a className={styles.secondaryButton} href="#work">See what I built</a>
          </div>
        </div>
        <div className={styles.heroProof} aria-label="Core capabilities">
          <span><strong>Web</strong> apps and portals</span>
          <span><strong>Mobile</strong> iOS and Android</span>
          <span><strong>AI</strong> agents and automation</span>
          <span><strong>Ops</strong> dashboards and tools</span>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>What I build</p>
          <h2>Less busy work. Better software.</h2>
          <p>You do not need a giant plan. Start with the part of the job that hurts.</p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article key={service.number} className={styles.service}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
        <div className={styles.buildLine}>
          <span>AI workflows</span>
          <span>Internal dashboards</span>
          <span>Customer portals</span>
          <span>Mobile apps</span>
          <span>API integrations</span>
        </div>
      </section>

      <section id="work" className={styles.work}>
        <div className={styles.workIntro}>
          <p className={styles.eyebrow}>Selected work</p>
          <h2>Built for people who have a job to do.</h2>
        </div>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <article className={styles.project} key={project.name}>
              <div className={styles.projectMedia}>
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  fill
                  sizes="(max-width: 800px) 100vw, 58vw"
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectCopy}>
                <span className={styles.projectNumber}>0{index + 1} / {project.label}</span>
                <h3>{project.name}</h3>
                <p>{project.copy}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <p className={styles.eyebrow}>How it works</p>
        <h2 id="process-title">You show me the problem. I map it, build it, and help you run it.</h2>
        <div className={styles.processSteps}>
          <span><strong>1</strong> Find the slow part</span>
          <span><strong>2</strong> Build a useful first version</span>
          <span><strong>3</strong> Ship, watch, and improve</span>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.contactCopy}>
          <p className={styles.contactEyebrow}>Have a project?</p>
          <h2>Tell me what is slowing your team down.</h2>
          <p>A rough note is fine. I will help turn it into a clear next step.</p>
          <div className={styles.contactLinks}>
            <a href="/Resume-Jonathan_Benn.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <a href="https://github.com/BonJenn" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:JonathanTBenn@gmail.com">Email</a>
          </div>
        </div>

        {formState.succeeded ? (
          <p className={styles.success}>Got it. I will get back to you soon.</p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            {Object.entries(attribution).map(([key, value]) => (
              <input key={key} type="hidden" name={`lead_${key}`} value={value} readOnly />
            ))}
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
              <ValidationError prefix="Email" field="email" errors={formState.errors} />
            </label>
            <label className={styles.fullField}>
              What should we build?
              <textarea name="message" rows="5" required />
              <ValidationError prefix="Message" field="message" errors={formState.errors} />
            </label>
            <button type="submit" disabled={formState.submitting}>
              {formState.submitting ? 'Sending...' : 'Send project note'}
            </button>
          </form>
        )}
      </section>

      <footer className={styles.footer}>
        <strong>Jonathan Benn</strong>
        <span>AI automation + software development</span>
        <span>Los Angeles / Remote</span>
      </footer>
    </main>
  );
}
