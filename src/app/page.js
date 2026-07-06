import styles from "./page.module.css";
import Hero1 from './components/hero_1';
import AutomationStudio from './components/AutomationStudio';
import Hero2About from './components/hero_2_about';
import AgenticCaseStudies from './components/AgenticCaseStudies';
import Hero3Work from './components/hero_3_work';
import Hero4Contact from './components/hero_4_contact';
import { agenticCaseStudies, selectedWorkProjects } from './data/projects';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero1 />
      <AutomationStudio />
      <AgenticCaseStudies projects={agenticCaseStudies} />
      <Hero2About />
      <Hero3Work projects={selectedWorkProjects} />
      <Hero4Contact />
    </main>
  );
}
