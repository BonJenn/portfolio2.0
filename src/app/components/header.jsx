"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/header.module.css';
import linkedinImage from '../../../public/images/linkedin.png';
import linkedinHoverImage from '../../../public/images/linkedin_hover.png';

const Header = () => {
  const [linkedinSrc, setLinkedinSrc] = useState(linkedinImage);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span>JONATHAN<span className={styles.logoHighlight}>/B</span></span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <button onClick={() => scrollToSection('about')} className={styles.navLink}>About .</button>
        <button onClick={() => scrollToSection('work')} className={styles.navLink}>Work .</button>
        <button onClick={() => scrollToSection('contact')} className={styles.navLink}>Let&apos;s Talk .</button>
        <Link 
          href="https://www.linkedin.com/in/jonathan-benn" 
          className={styles.navLink}
          onMouseEnter={() => setLinkedinSrc(linkedinHoverImage)}
          onMouseLeave={() => setLinkedinSrc(linkedinImage)}
        >
          <Image src={linkedinSrc} alt="LinkedIn" width={24} height={24} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;