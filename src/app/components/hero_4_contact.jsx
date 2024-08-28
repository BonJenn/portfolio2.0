import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/hero_4.module.css';

const Hero4Contact = () => {
  const [state, handleSubmit] = useForm("mzzpovpd");

  if (state.succeeded) {
    return <p className={styles.successMessage}>Thanks for your message! I'll get back to you soon.</p>;
  }

  return (
    <section id="contact" className={styles.hero}>
      <h2 className={styles.title}>Let&apos;s Work!</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
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
          <input type="tel" id="phone" name="phone" required />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button type="submit" className={styles.button} disabled={state.submitting}>
          {state.submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default Hero4Contact;
