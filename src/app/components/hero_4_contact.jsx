"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/hero_4.module.css';

const Hero4Contact = () => {
  const [state, handleSubmit] = useForm("mzzpovpd");

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Form data:", Object.fromEntries(formData));
    try {
      const response = await fetch("https://formspree.io/f/mzzpovpd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });
      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset the form
        e.target.reset();
        // Update the state to show success message
        handleSubmit(e);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  if (state.succeeded) {
    return <p className={styles.successMessage}>Thanks for your message! I&apos;ll get back to you soon.</p>;
  }

  return (
    <section id="contact" className={styles.hero}>
      <h2 className={styles.title}>Let&apos;s Work!</h2>
      <form onSubmit={onSubmit} className={styles.form}>
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
