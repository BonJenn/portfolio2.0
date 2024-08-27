"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/header.module.css';
import linkedinImage from '../../../public/images/linkedin.png';
import linkedinHoverImage from '../../../public/images/linkedin_hover.png';

const Header = () => {
  const [linkedinSrc, setLinkedinSrc] = useState(linkedinImage);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span>JONATHAN<span className={styles.logoHighlight}>/B</span></span>
        </Link>
      </div>
      <nav className={styles.nav}>
        
        <Link href="/about" className={styles.navLink}>About .</Link>
        <Link href="/work" className={styles.navLink}>Work .</Link>
        <Link href="/contact" className={styles.navLink}>Let&apos;s Talk .</Link>
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