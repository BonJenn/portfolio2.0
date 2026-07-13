"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import { readLeadAttribution } from './LeadAttribution';
import styles from '../styles/portfolio_landing.module.css';

const capabilities = [
  {
    id: '01',
    title: 'Operations systems',
    copy: 'Dashboards, queues, approvals, inventory, reporting, and the tools that hold day-to-day work together.'
  },
  {
    id: '02',
    title: 'Agent workflows',
    copy: 'AI that can search, sort, draft, review, and take useful steps inside a controlled business process.'
  },
  {
    id: '03',
    title: 'Product builds',
    copy: 'Web, mobile, and desktop products from the first architecture call through launch and ongoing support.'
  }
];

const caseStudies = [
  {
    code: 'OPS-01',
    name: 'Warehouse fulfillment',
    category: 'Operations platform',
    image: '/images/work_muha_warehouse.png',
    situation: 'Reward claims, store orders, stock, labels, returns, and customer issues were one connected problem.',
    system: 'A warehouse control surface with clear queues, grouped shipments, inventory signals, and shipping automation.',
    result: 'Operators can see what is ready, what is stuck, and what needs action without chasing separate tools.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'EasyPost']
  },
  {
    code: 'VID-02',
    name: 'Vantaview',
    category: 'Real-time video SaaS',
    image: '/images/work_vantaview.png',
    situation: 'A live production app needed video performance, smart camera help, licensing, trials, and releases to work as one product.',
    system: 'A Mac-native video engine supported by customer access, product telemetry, updates, and AI production tools.',
    result: 'The path from code to notarized build to monitored customer trial became measurable and repeatable.',
    stack: ['Swift', 'Metal', 'AVFoundation', 'Supabase']
  },
  {
    code: 'AI-03',
    name: 'Blackcrab',
    category: 'Agent command center',
    image: '/images/work_blackcrab.png',
    situation: 'Serious AI coding work spreads across sessions, terminals, diffs, previews, and usage limits.',
    system: 'A local desktop app for finding sessions, running parallel agents, reviewing tool calls, and watching usage.',
    result: 'Agent work is easier to resume, inspect, and manage without sending project data to another hosted service.',
    stack: ['Tauri', 'React', 'Rust', 'Claude Code']
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
      <header className={styles.header}>
        <a href="#top" className={styles.wordmark}>JB / SYSTEMS</a>
        <div className={styles.availability}><span /> Open for select projects</div>
        <nav aria-label="Main navigation">
          <a href="#systems">Systems</a>
          <a href="#proof">Proof</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroFrames} aria-hidden="true">
          <div className={styles.frameOne}>
            <Image src="/images/work_blackcrab.png" alt="" fill priority sizes="55vw" />
          </div>
          <div className={styles.frameTwo}>
            <Image src="/images/work_vantaview.png" alt="" fill priority sizes="45vw" />
          </div>
          <div className={styles.frameThree}>
            <Image src="/images/work_muha_warehouse.png" alt="" fill priority sizes="42vw" />
          </div>
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.heroLabel}>AI automation / software engineering / product delivery</p>
          <h1>Software systems for work that has outgrown spreadsheets.</h1>
          <div className={styles.heroBottom}>
            <p>
              I design and ship automation, internal platforms, and apps around the way a business actually runs.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.actionPrimary} href="#contact">Talk through a system</a>
              <a className={styles.actionSecondary} href="#proof">Review the proof</a>
            </div>
          </div>
        </div>
        <div className={styles.heroStatus}>
          <span>Los Angeles / PT</span>
          <span>Part-time builds + retainers</span>
          <span>Web / mobile / desktop</span>
        </div>
      </section>

      <section id="systems" className={styles.capabilities}>
        <div className={styles.sectionIndex}>
          <span>01</span>
          <p>Build focus</p>
        </div>
        <div className={styles.capabilityContent}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>What I take on</p>
            <h2>The product and the process behind it.</h2>
            <p>I work across the interface, backend, data, integrations, and automation so the whole system can ship.</p>
          </div>
          <div className={styles.capabilityGrid}>
            {capabilities.map((capability) => (
              <article key={capability.id}>
                <span>{capability.id}</span>
                <h3>{capability.title}</h3>
                <p>{capability.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className={styles.proof}>
        <div className={styles.proofHeader}>
          <div className={styles.sectionIndex}>
            <span>02</span>
            <p>Proof of work</p>
          </div>
          <div>
            <p className={styles.eyebrow}>Selected systems</p>
            <h2>Built beyond the demo.</h2>
          </div>
        </div>

        <div className={styles.caseList}>
          {caseStudies.map((project) => (
            <article className={styles.caseStudy} key={project.code}>
              <div className={styles.caseTopline}>
                <span>{project.code}</span>
                <span>{project.category}</span>
                <span>Production work</span>
              </div>
              <div className={styles.caseMain}>
                <div className={styles.caseImage}>
                  <Image
                    src={project.image}
                    alt={`${project.name} project interface`}
                    fill
                    sizes="(max-width: 900px) 100vw, 62vw"
                  />
                </div>
                <div className={styles.caseSummary}>
                  <h3>{project.name}</h3>
                  <div className={styles.caseField}>
                    <span>Situation</span>
                    <p>{project.situation}</p>
                  </div>
                  <div className={styles.caseField}>
                    <span>System</span>
                    <p>{project.system}</p>
                  </div>
                  <div className={styles.caseField}>
                    <span>Result</span>
                    <p>{project.result}</p>
                  </div>
                  <div className={styles.stack}>
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.delivery}>
        <div className={styles.sectionIndex}>
          <span>03</span>
          <p>Delivery model</p>
        </div>
        <div className={styles.deliveryBody}>
          <p className={styles.eyebrow}>A clear operating rhythm</p>
          <h2>Map. Build. Connect. Run.</h2>
          <div className={styles.deliveryRail}>
            <article><strong>Map</strong><p>Find the costly handoffs and set the right first target.</p></article>
            <article><strong>Build</strong><p>Ship a useful version early enough to learn from real work.</p></article>
            <article><strong>Connect</strong><p>Bring the right tools, data, and people into one flow.</p></article>
            <article><strong>Run</strong><p>Measure what happens and keep improving the system.</p></article>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.contactHeader}>
          <p className={styles.eyebrow}>Start with the workflow</p>
          <h2>What is costing your team time right now?</h2>
          <p>Send the rough version. I will ask the right questions and turn it into a build plan.</p>
          <div className={styles.links}>
            <a href="/Resume-Jonathan_Benn.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <a href="https://github.com/BonJenn" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:JonathanTBenn@gmail.com">Email</a>
          </div>
        </div>

        {formState.succeeded ? (
          <p className={styles.success}>Message received. I will be in touch.</p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            {Object.entries(attribution).map(([key, value]) => (
              <input key={key} type="hidden" name={`lead_${key}`} value={value} readOnly />
            ))}
            <label>
              Name
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" autoComplete="email" required />
              <ValidationError prefix="Email" field="email" errors={formState.errors} />
            </label>
            <label className={styles.messageField}>
              System or workflow
              <textarea name="message" rows="5" required />
              <ValidationError prefix="Message" field="message" errors={formState.errors} />
            </label>
            <button type="submit" disabled={formState.submitting}>
              {formState.submitting ? 'Sending...' : 'Send the brief'}
            </button>
          </form>
        )}
      </section>

      <footer className={styles.footer}>
        <span>Jonathan Benn / 2026</span>
        <span>AI automation, software, and apps</span>
        <span>Built in Los Angeles</span>
      </footer>
    </main>
  );
}
