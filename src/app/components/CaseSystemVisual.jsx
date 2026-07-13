import styles from '../styles/portfolio_landing.module.css';

function WarehouseVisual() {
  const stages = ['Claim', 'Group', 'Label', 'Ship', 'Recover'];

  return (
    <div className={styles.warehouseBoard}>
      <div className={styles.metricStrip}>
        <span><strong>42</strong> ready</span>
        <span><strong>07</strong> exceptions</span>
        <span><strong>93%</strong> on time</span>
      </div>
      <div className={styles.fulfillmentRail}>
        {stages.map((stage, index) => (
          <div key={stage} className={styles.fulfillmentStage}>
            <i>{String(index + 1).padStart(2, '0')}</i>
            <strong>{stage}</strong>
          </div>
        ))}
        <span className={styles.movingOrder} />
      </div>
      <div className={styles.queueGrid}>
        <div><span>Pending fulfillment</span><strong>42</strong><i style={{ '--fill': '78%' }} /></div>
        <div><span>Labels ready</span><strong>18</strong><i style={{ '--fill': '54%' }} /></div>
        <div><span>Return recovery</span><strong>03</strong><i style={{ '--fill': '22%' }} /></div>
      </div>
    </div>
  );
}

function VideoVisual() {
  return (
    <div className={styles.videoBoard}>
      <div className={styles.videoSources}>
        <div className={styles.videoSource}><span>CAM 01</span><i /></div>
        <div className={styles.videoSource}><span>CAM 02</span><i /></div>
        <div className={styles.videoSource}><span>CAM 03</span><i /></div>
      </div>
      <div className={styles.videoSignalRail}><i /><i /><i /></div>
      <div className={styles.directorCore}>
        <span>AI director</span>
        <strong>SHOT 02</strong>
        <div className={styles.audioBars}>{Array.from({ length: 12 }, (_, index) => <i key={index} />)}</div>
      </div>
      <div className={styles.programOutput}>
        <div className={styles.programFrame}><i /><i /><i /></div>
        <span>PROGRAM</span>
        <strong>59.94 FPS</strong>
      </div>
      <div className={styles.videoSignals}>
        <span>Subject lock</span><span>Audio clean</span><span>Output live</span>
      </div>
    </div>
  );
}

function AgentVisual() {
  const sessions = [
    ['API build', 'RUNNING'],
    ['Test pass', 'REVIEW'],
    ['UI polish', 'RUNNING'],
    ['Release', 'READY'],
    ['Research', 'DONE'],
    ['Docs', 'DONE']
  ];

  return (
    <div className={styles.agentBoard}>
      <div className={styles.sessionGrid}>
        {sessions.map(([name, state], index) => (
          <div key={name} className={styles.sessionPanel} style={{ '--delay': `${index * 0.35}s` }}>
            <span>0{index + 1}</span>
            <strong>{name}</strong>
            <i>{state}</i>
          </div>
        ))}
      </div>
      <div className={styles.agentTimeline}>
        <span>Context</span><i /><span>Agents</span><i /><span>Review</span><i /><span>Ship</span>
      </div>
      <div className={styles.localReadout}>
        <span>Local workspace</span>
        <strong>6 ACTIVE PANELS</strong>
        <div><i /><i /><i /><i /><i /></div>
      </div>
    </div>
  );
}

export default function CaseSystemVisual({ project }) {
  const visuals = {
    warehouse: <WarehouseVisual />,
    video: <VideoVisual />,
    agents: <AgentVisual />
  };

  return (
    <div className={`${styles.systemVisual} ${styles[`${project.visual}Visual`]}`} aria-hidden="true">
      <div className={styles.visualTopline}>
        <span>{project.visualLabel}</span>
        <span><i /> Live system</span>
      </div>
      {visuals[project.visual]}
      <div className={styles.visualFooter}>
        <span>JB SYSTEMS</span>
        <span>{project.code}</span>
      </div>
    </div>
  );
}
