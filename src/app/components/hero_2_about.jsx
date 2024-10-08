import React from 'react';
import styles from '../styles/hero_2.module.css';

const Hero2About = () => {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.content}>
        <h2 className={styles.title}>About Me</h2>
        <br></br>
        <p className={styles.description}>
          I am motivated by challenging projects with self-guided research and dynamic problem solving. 
        </p>
        <br></br>
        <ul className={styles.skillsList}>
          <li><strong>Front-End:</strong> React, JavaScript, Bootstrap, SASS, HTML5, CSS3, HTML/CSS, Tailwind</li>
          <li><strong>Back-End:</strong> Node.js, Express.js, MongoDB, SQL, RESTful APIs, Supabase, Firebase</li>
          <li><strong>Tools & Platforms:</strong> Git, Github, Docker, AWS, Heroku, Figma, Adobe Suite</li>
          <li><strong>Other:</strong> Agile/Scrum, Unit Testing, CI/CD</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero2About;
