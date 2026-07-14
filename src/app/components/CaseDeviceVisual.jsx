import Image from 'next/image';
import styles from '../styles/portfolio_landing.module.css';

function DesktopDevice({ project }) {
  return (
    <div className={styles.desktopRig}>
      <div className={styles.monitorBezel}>
        <span className={styles.monitorCamera} aria-hidden="true" />
        <div className={styles.deviceScreen}>
          <Image
            src={project.image}
            alt={`${project.name} interface running on a desktop display`}
            fill
            sizes="(max-width: 720px) 88vw, (max-width: 1100px) 80vw, 760px"
            className={styles.deviceImage}
          />
        </div>
        <span className={styles.monitorPower} aria-hidden="true" />
      </div>
      <div className={styles.monitorStem} aria-hidden="true" />
      <div className={styles.monitorBase} aria-hidden="true" />
    </div>
  );
}

function LaptopDevice({ project }) {
  return (
    <div className={styles.laptopRig}>
      <div className={styles.laptopLid}>
        <span className={styles.laptopCamera} aria-hidden="true" />
        <div className={styles.deviceScreen}>
          <Image
            src={project.image}
            alt={`${project.name} interface running on a laptop`}
            fill
            sizes="(max-width: 720px) 88vw, (max-width: 1100px) 80vw, 760px"
            className={styles.deviceImage}
          />
        </div>
      </div>
      <div className={styles.laptopDeck} aria-hidden="true">
        <span className={styles.laptopKeyboard} />
        <span className={styles.laptopTrackpad} />
      </div>
      <div className={styles.laptopLip} aria-hidden="true" />
    </div>
  );
}

export default function CaseDeviceVisual({ project }) {
  const stageClass = `${styles.deviceStage} ${styles[`${project.visual}DeviceStage`]}`;

  return (
    <figure className={styles.deviceScene}>
      <div className={styles.visualTopline}>
        <span>{project.visualLabel}</span>
        <span><i /> Production system</span>
      </div>
      <div className={stageClass}>
        {project.device === 'laptop' ? (
          <LaptopDevice project={project} />
        ) : (
          <DesktopDevice project={project} />
        )}
      </div>
      <figcaption className={styles.deviceCaption}>
        <span>JB SYSTEMS / {project.code}</span>
        <p>{project.proofCaption}</p>
      </figcaption>
    </figure>
  );
}
