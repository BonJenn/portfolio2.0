"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/footer.module.css';
import linkedinImage from '../../../public/images/linkedin.png';
import linkedinHoverImage from '../../../public/images/linkedin_hover.png';

const Footer = () => {
  const [linkedinSrc, setLinkedinSrc] = useState(linkedinImage);

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link href="/">
          <span>JONATHAN<span className={styles.logoHighlight}>/B</span></span>
        </Link>
      </div>
      <div className={styles.social}>
        <Link href="https://www.linkedin.com" target="_blank">
          <Image
            src={linkedinSrc}
            alt="LinkedIn"
            width={24} // Set the desired width
            height={24} // Set the desired height
            onMouseEnter={() => setLinkedinSrc(linkedinHoverImage)}
            onMouseLeave={() => setLinkedinSrc(linkedinImage)}
          />
        </Link>
      </div>
      <div className={styles.credit}>
        Designed & Built by Jonathan B © 2024
      </div>
    </footer>
  );
};

export default Footer;
