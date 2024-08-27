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
      </div>
      <div className={styles.imageContainer}>
        <Image src={image} alt="Jonathan Benn" className={styles.image} />
      </div>
    </section>
  );
};

export default Hero1;
