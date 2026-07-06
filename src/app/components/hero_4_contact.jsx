"use client";

import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { readLeadAttribution } from './LeadAttribution';
import styles from '../styles/hero_4.module.css';

const Hero4Contact = () => {
  const [state, handleSubmit] = useForm("mzzpovpd");
  const [attribution, setAttribution] = useState({});
  const ctaLinks = [
    { href: '/Resume-Jonathan_Benn.pdf', label: 'Resume' },
    { href: 'https://github.com/BonJenn', label: 'GitHub' },
    { href: 'mailto:JonathanTBenn@gmail.com', label: 'Email' }
  ];
  const fitSignals = [
    'AI automation sprint',
    'Internal dashboard',
    'Customer portal or app',
    'Monthly workflow retainer'
  ];

  useEffect(() => {
    setAttribution(readLeadAttribution());
  }, []);

  if (state.succeeded) {
    return <p className={styles.successMessage}>Thanks for your message! I&apos;ll get back to you soon.</p>;
  }

  return (
    <section id="contact" className={styles.hero}>
      <div className={styles.intro}>
        <span className={styles.eyebrow}>Contact</span>
        <h2 className={styles.title}>Send me the workflow you want automated.</h2>
        <p className={styles.description}>
          Send the messy version: what your team does manually, where the handoff breaks,
          what data or tools are involved, and what a win would look like. I will help turn
          it into a practical build plan.
        </p>
        <div className={styles.fitGrid} aria-label="Good fit project types">
          {fitSignals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </div>
        <div className={styles.ctaLinks}>
          {ctaLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className={styles.ctaLink}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        {Object.entries(attribution).map(([key, value]) => (
          <input key={key} type="hidden" name={`lead_${key}`} value={value} readOnly />
        ))}
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div className={`${styles.formGroup} ${styles.messageGroup}`}>
          <label htmlFor="message">Workflow / project</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button type="submit" className={styles.button} disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Start the Conversation'}
        </button>
      </form>
    </section>
  );
};

export default Hero4Contact;
