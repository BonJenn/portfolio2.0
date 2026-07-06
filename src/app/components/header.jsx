"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/header.module.css';
import linkedinImage from '../../../public/images/linkedin.png';
import linkedinHoverImage from '../../../public/images/linkedin_hover.png';

const Header = () => {
  const [linkedinSrc, setLinkedinSrc] = useState(linkedinImage);
  const [navActive, setNavActive] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setNavActive(false);
    }
  };

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span>JONATHAN<span className={styles.logoHighlight}>/B</span></span>
        </Link>
      </div>
      <nav className={`${styles.nav} ${navActive ? styles.active : ''}`}>
        <button onClick={() => scrollToSection('studio')} className={styles.navLink}>Services</button>
        <button onClick={() => scrollToSection('agentic-workflows')} className={styles.navLink}>Case Studies</button>
        <button onClick={() => scrollToSection('work')} className={styles.navLink}>Work</button>
        <button onClick={() => scrollToSection('contact')} className={styles.navLink}>Start a Project</button>
        <Link
          href="/Resume-Jonathan_Benn.pdf"
          className={`${styles.navLink} ${styles.resumeLink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
        <Link 
          href="https://www.linkedin.com/in/jonathan-benn" 
          className={styles.navLink}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkedinSrc(linkedinHoverImage)}
          onMouseLeave={() => setLinkedinSrc(linkedinImage)}
        >
          <Image src={linkedinSrc} alt="LinkedIn" width={24} height={24} />
        </Link>
      </nav>
      <button
        type="button"
        className={styles.hamburger}
        onClick={toggleNav}
        aria-label="Toggle navigation"
        aria-expanded={navActive}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
    </header>
  );
};

export default Header;
