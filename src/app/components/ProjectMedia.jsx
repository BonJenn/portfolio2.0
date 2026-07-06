"use client";

import Image from 'next/image';
import styles from '../styles/hero_3.module.css';

const ProjectMedia = ({ project, variant = 'card' }) => {
  const isIcon = project.imageType === 'icon';
  const frameClass = `${styles.mediaFrame} ${styles[`${project.tone}Frame`] || ''} ${isIcon ? styles.iconFrame : styles.screenshotFrame} ${variant === 'modal' ? styles.modalMediaFrame : ''}`;

  return (
    <div className={frameClass}>
      {isIcon ? (
        <div className={`${styles.appStage} ${project.secondaryImage ? styles.dualAppStage : ''}`}>
          <Image
            src={project.image}
            alt={`${project.name} app icon`}
            width={variant === 'modal' ? 132 : 104}
            height={variant === 'modal' ? 132 : 104}
            className={styles.appIcon}
          />
          {project.secondaryImage && (
            <Image
              src={project.secondaryImage}
              alt={`${project.name} companion app icon`}
              width={variant === 'modal' ? 132 : 104}
              height={variant === 'modal' ? 132 : 104}
              className={`${styles.appIcon} ${styles.secondaryAppIcon}`}
            />
          )}
          <div className={styles.phonePanel} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          sizes={variant === 'modal' ? '(max-width: 768px) 92vw, 720px' : '(max-width: 768px) 92vw, 420px'}
          className={styles.projectImage}
        />
      )}
    </div>
  );
};

export default ProjectMedia;
