import styles from '../styles/portfolio_landing.module.css';

const inputs = [
  ['New request', 'Website form'],
  ['Order event', 'Operations'],
  ['Client file', 'Shared inbox']
];

const outputs = [
  ['CRM updated', 'Complete'],
  ['Report ready', 'Complete'],
  ['Owner notified', 'Complete']
];

export default function HeroWorkflow() {
  return (
    <div className={styles.heroSystem} aria-hidden="true">
      <div className={styles.heroSystemGrid} />
      <div className={styles.heroMap}>
        <div className={`${styles.mapNode} ${styles.intakeNode}`}>
          <div className={styles.mapNodeHeader}>
            <span>01 / Intake</span>
            <i className={styles.liveDot} />
          </div>
          <div className={styles.inputList}>
            {inputs.map(([title, source], index) => (
              <div key={title} style={{ '--delay': `${index * 0.65}s` }}>
                <i />
                <span><strong>{title}</strong>{source}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.mapRoute} ${styles.routeIntake}`}><i /></div>

        <div className={`${styles.mapNode} ${styles.agentNode}`}>
          <div className={styles.agentOrbit}><i /><i /><i /></div>
          <span className={styles.agentLabel}>Agent layer</span>
          <strong>READ / DECIDE / ACT</strong>
          <div className={styles.agentStats}>
            <span>Tools <b>06</b></span>
            <span>Rules <b>14</b></span>
          </div>
        </div>

        <div className={`${styles.mapRoute} ${styles.routeReview}`}><i /></div>

        <div className={`${styles.mapNode} ${styles.reviewNode}`}>
          <div className={styles.mapNodeHeader}>
            <span>03 / Review</span>
            <i className={styles.reviewDot} />
          </div>
          <div className={styles.reviewDecision}>
            <span>Human check</span>
            <strong>APPROVED</strong>
          </div>
          <div className={styles.reviewBars}><i /><i /><i /></div>
        </div>

        <div className={`${styles.mapRoute} ${styles.routeOutput}`}><i /></div>

        <div className={`${styles.mapNode} ${styles.outputNode}`}>
          <div className={styles.mapNodeHeader}>
            <span>04 / Output</span>
            <i className={styles.liveDot} />
          </div>
          <div className={styles.outputList}>
            {outputs.map(([title, state], index) => (
              <div key={title} style={{ '--delay': `${index * 0.7 + 0.4}s` }}>
                <span><strong>{title}</strong>{state}</span>
                <i>OK</i>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.systemReadout}>
          <span>JB SYSTEMS / WORKFLOW 001</span>
          <span>RUNNING</span>
        </div>
      </div>
    </div>
  );
}
