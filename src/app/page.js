import Image from "next/image";
import styles from "./page.module.css";
import Hero1 from './components/hero_1';
import Hero2About from './components/hero_2_about';
import Hero3Work from './components/hero_3_work';
import Hero4Contact from './components/hero_4_contact';

export default function Home() {
  const projects = [
    {
      link: 'https://psalion.vercel.app',
      image: '/images/work7_psalion.png',
      name: 'Psalion',
      description: 'A crypto-focused venture capital firm investing in blockchain-based startups, infrastructure, and emerging web3 technologies. Psalion provides unique institutional-level investment products tailored to private clients, family offices, and professional investors.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      github: 'https://github.com/BonJenn/psalion'
    },
    {
      link: 'https://lavpass.com',
      image: '/images/work6_lavpass_blue.png',
      name: 'LavPass',
      description: 'An iOS ap that helps people find the closest, cleanest restrooms.',
      technologies: ['Next.js', 'React', 'Typescript', 'Tailwind', 'Node.js', 'Supabase', 'AWS S3', 'Supabase'],
      appStore: 'https://lavpass.app'
    },
    {
      link: 'https://bitcoinbrainiac.net',
      image: '/images/work5_bitcoinbrainiac.png',
      name: 'Bitcoin Brainiac',
      description: 'A daily Bitcoin newsletter app which reads, scrapes, and summarizes the latest Bitcoin news and data, then sends it to a list of Bitcoin enthusiasts.',

      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'CoinGecko API', 'OpenAI API'],
      github: 'https://github.com/BonJenn/bitcoinbrainiac_v2'
    },
    {
      link: 'https://babygauge.com',
      image: '/images/work4_babygauge.jpg',
      name: 'Baby Gauge',
      description: 'An online women\'s health and pregnacy blog, which generates daily blog posts for SEO. Site includes an AI pregnancy calculator.',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
      github: 'https://github.com/BonJenn/babyguage'
    },
    {
      link: 'https://thebajashrimp.com',
      image: '/images/work1_bajashrimp.png',
      name: 'The Baja Shrimp',
      description: 'A restaurant website featuring an interactive menu, online ordering system, and reservation management. Includes real-time availability and mobile-responsive design.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'MongoDB'],
      github: 'https://github.com/BonJenn/baja-shrimp'
    },
    {
      link: 'https://pershing-square.vercel.app',
      image: '/images/work2_laparks.png',
      name: 'Los Angeles Department of Recreation and Parks',
      description: 'A modern redesign of the LA Parks website for Pershing Square Outdoor Concert and Event Center. The new site focuses on improved user experience and accessibility. Features include park finder, event calendar, and facility reservations.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'MapBox API', 'Prisma'],
      github: 'https://github.com/BonJenn/pershing-square'
    },
    {
      link: 'https://bontent.net',
      image: '/images/work3_bontent.png',
      name: 'Bontent',
      description: 'Bontent is a full-fledged web and software development agency specailizing in custom produdts for small and medium-sized businesses.',
      technologies: ['React', 'Next.js', 'Node.js', 'Vercel'],
      github: 'https://github.com/BonJenn/bontent'
    }
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