"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import { readLeadAttribution } from './LeadAttribution';
import styles from '../styles/portfolio_landing.module.css';

const offers = [
  {
    title: 'A task takes too long',
    answer: 'Let us automate it.',
    color: 'pink'
  },
  {
    title: 'Your team needs one place to work',
    answer: 'Let us build the dashboard.',
    color: 'yellow'
  },
  {
    title: 'You have an app idea',
    answer: 'Let us ship the first version.',
    color: 'blue'
  },
  {
    title: 'Your software is stuck',
    answer: 'Let us get it moving.',
    color: 'green'
  }
];

const projects = [
  {
    name: 'Warehouse system',
    short: 'Ship orders. Track stock. Fix problems fast.',
    image: '/images/work_muha_warehouse.png',
    href: 'https://apps.apple.com/us/app/muha-members/id6743873537',
    label: 'Web + mobile + operations'
  },
  {
    name: 'Vantaview',
    short: 'A live video app built for serious production work.',
    image: '/images/work_vantaview.png',
    href: 'https://www.vantaview.live',
    label: 'Mac app + AI + video'
  },
  {
    name: 'Blackcrab',
    short: 'A desktop home for running and reviewing AI agents.',
    image: '/images/work_blackcrab.png',
    href: 'https://blackcrab-landing.vercel.app',
    label: 'Desktop app + agent tools'
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
        <a href="#top" className={styles.logo}>JB</a>
        <nav aria-label="Main navigation">
          <a href="#help">What I do</a>
          <a href="#work">My work</a>
          <a href="#contact">Say hello</a>
        </nav>
        <a className={styles.resume} href="/Resume-Jonathan_Benn.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </header>

      <section id="top" className={styles.hero}>
        <Image
          src="/images/jonathan_benn.png"
          alt="Jonathan Benn, software and automation developer"
          fill
          priority
          sizes="100vw"
          className={styles.heroPhoto}
        />
        <div className={styles.heroTint} aria-hidden="true" />
        <div className={styles.heroContent}>
          <div className={styles.helloTag}>Hi, I&apos;m Jonathan.</div>
          <h1>Jonathan Benn builds apps and automation.</h1>
          <p>
            I make software that helps teams get more done. Web apps, mobile apps,
            AI tools, and the dashboards that keep work on track.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.mainButton} href="#contact">Tell me the idea</a>
            <a className={styles.textButton} href="#work">See my work <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className={styles.heroTicker} aria-label="Services">
          <span>Web apps</span>
          <span>Mobile apps</span>
          <span>AI automation</span>
          <span>Custom software</span>
        </div>
      </section>

      <section id="help" className={styles.help}>
        <div className={styles.helpHeading}>
          <p className={styles.eyebrow}>Start with the problem</p>
          <h2>What do you need help with?</h2>
          <p>You do not need to know the tech. Tell me what is hard, slow, or missing.</p>
        </div>
        <div className={styles.offerGrid}>
          {offers.map((offer, index) => (
            <article className={`${styles.offer} ${styles[offer.color]}`} key={offer.title}>
              <span>0{index + 1}</span>
              <p>{offer.title}</p>
              <h3>{offer.answer}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className={styles.work}>
        <div className={styles.workHeading}>
          <p className={styles.eyebrow}>A few things I made</p>
          <h2>Real software. Real people use it.</h2>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <a
              className={styles.project}
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name}`}
            >
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width: 800px) 100vw, 34vw"
                />
                <span className={styles.openMark} aria-hidden="true">↗</span>
              </div>
              <div className={styles.projectInfo}>
                <span>0{index + 1} / {project.label}</span>
                <h3>{project.name}</h3>
                <p>{project.short}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.partner}>
        <div className={styles.partnerStatement}>
          <p className={styles.eyebrow}>One person, full product view</p>
          <h2>I can work on the screen, the server, the data, and the details in between.</h2>
        </div>
        <div className={styles.partnerPoints}>
          <article>
            <strong>Clear talks</strong>
            <p>I explain the choices and keep you close to the work.</p>
          </article>
          <article>
            <strong>Useful first</strong>
            <p>We ship the part that helps most, then build from there.</p>
          </article>
          <article>
            <strong>Built to last</strong>
            <p>The software should still make sense after launch.</p>
          </article>
        </div>
      </section>

      <section className={styles.steps}>
        <p className={styles.eyebrow}>No mystery</p>
        <h2>Three clear steps.</h2>
        <div className={styles.stepGrid}>
          <article><span>1</span><h3>Show me</h3><p>Walk me through the job, the problem, or the idea.</p></article>
          <article><span>2</span><h3>Build it</h3><p>I make a useful version and show you the work as it grows.</p></article>
          <article><span>3</span><h3>Make it better</h3><p>We launch, learn, and keep the parts that work.</p></article>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.contactIntro}>
          <p className={styles.eyebrow}>Let&apos;s build something useful</p>
          <h2>What are you working on?</h2>
          <p>One or two lines is enough to start.</p>
          <div className={styles.contactLinks}>
            <a href="mailto:JonathanTBenn@gmail.com">Email me</a>
            <a href="https://github.com/BonJenn" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="/Resume-Jonathan_Benn.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>

        {formState.succeeded ? (
          <p className={styles.success}>Thanks. I will get back to you soon.</p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            {Object.entries(attribution).map(([key, value]) => (
              <input key={key} type="hidden" name={`lead_${key}`} value={value} readOnly />
            ))}
            <label>
              Your name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Your email
              <input name="email" type="email" autoComplete="email" required />
              <ValidationError prefix="Email" field="email" errors={formState.errors} />
            </label>
            <label className={styles.messageField}>
              What should we make?
              <textarea name="message" rows="5" required />
              <ValidationError prefix="Message" field="message" errors={formState.errors} />
            </label>
            <button type="submit" disabled={formState.submitting}>
              {formState.submitting ? 'Sending...' : 'Send it over'}
            </button>
          </form>
        )}
      </section>

      <footer className={styles.footer}>
        <strong>Jonathan Benn</strong>
        <span>Apps + automation + software</span>
        <span>Los Angeles / Working worldwide</span>
      </footer>
    </main>
  );
}
