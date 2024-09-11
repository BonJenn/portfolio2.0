import Image from "next/image";
import styles from "./page.module.css";
import Hero1 from './components/hero_1';
import Hero2About from './components/hero_2_about';
import Hero3Work from './components/hero_3_work';
import Hero4Contact from './components/hero_4_contact';

export default function Home() {
  const projects = [
    { link: 'https://thebajashrimp.com', image: '/images/work1_bajashrimp.png', name: 'The Baja Shrimp' },
    { link: 'https://pershing-square.vercel.app', image: '/images/work2_laparks.png', name: 'Los Angeles Department of Recreation and Parks' },
    { link: 'https://bontent.vercel.app', image: '/images/work3_bontent.png', name: 'Bontent' },

  ];

  return (
    <main className={styles.main}>
      <Hero1 />
      <Hero2About />
      <Hero3Work projects={projects} />
      <Hero4Contact />
      {/* Other page-specific content */}
    </main>
  );
}