import React from 'react';
import Image from 'next/image';
import styles from '../styles/hero_1.module.css';
import image from '../../../public/images/jonathan_benn.png';

const Hero1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Jonathan</h1>
        <p className={styles.subtitle}>Full-Stack Developer</p>
        <a 
          href="https://docs.google.com/document/d/e/2PACX-1vSWpFdYaWnzi--ydwM1qPf_Xc8WRhDEu-2Zxn64v9-7fpOH8M40AXHkIqkjm7DoslWvElriXL4XNArX/pub" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.resumeButton}
        >
          View Resume
        </a>
      </div>
      <div className={styles.imageContainer}>
        <Image src={image} alt="Jonathan Benn" className={styles.image} />
      </div>
    </section>
  );
};

export default Hero1;
