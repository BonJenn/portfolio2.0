import React from 'react';
import styles from '../styles/hero_4.module.css';

const Hero4Contact = () => {
  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>Let&apos;s Work!</h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </section>
  );
};

export default Hero4Contact;
