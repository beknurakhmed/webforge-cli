import styles from './ChartPlaceholder.module.css';

interface ChartPlaceholderProps {
  title: string;
  type?: 'bar' | 'line' | 'pie';
}

export function ChartPlaceholder({ title, type = 'bar' }: ChartPlaceholderProps) {
  const bars = [40, 65, 45, 80, 55, 70, 60, 85, 50, 75, 90, 68];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className={styles.chartCard}>
      <h3 className={styles.chartTitle}>{title}</h3>
      {type === 'bar' && (
        <div className={styles.chartBars}>
          {bars.map((height, i) => (
            <div key={i} className={styles.chartBarWrapper}>
              <div className={styles.chartBar} style={{ height: `${height}%` }} />
              <span className={styles.chartLabel}>{months[i]}</span>
            </div>
          ))}
        </div>
      )}
      {type === 'line' && (
        <div className={styles.chartLinePlaceholder}>
          <svg viewBox="0 0 400 150" className={styles.chartSvg}>
            <polyline
              fill="none"
              stroke="#4f46e5"
              strokeWidth="2.5"
              points="0,120 35,90 70,100 105,50 140,70 175,30 210,45 245,20 280,55 315,40 350,25 385,10"
            />
            <polyline
              fill="rgba(79,70,229,0.1)"
              stroke="none"
              points="0,150 0,120 35,90 70,100 105,50 140,70 175,30 210,45 245,20 280,55 315,40 350,25 385,10 385,150"
            />
          </svg>
        </div>
      )}
      {type === 'pie' && (
        <div className={styles.chartPiePlaceholder}>
          <div className={styles.pieChart}>
            <div className={styles.pieSegment} style={{ '--segment-color': '#4f46e5', '--segment-percent': '35' } as React.CSSProperties}>35%</div>
            <div className={styles.pieSegment} style={{ '--segment-color': '#7c3aed', '--segment-percent': '25' } as React.CSSProperties}>25%</div>
            <div className={styles.pieSegment} style={{ '--segment-color': '#06b6d4', '--segment-percent': '20' } as React.CSSProperties}>20%</div>
            <div className={styles.pieSegment} style={{ '--segment-color': '#10b981', '--segment-percent': '20' } as React.CSSProperties}>20%</div>
          </div>
          <div className={styles.pieLegend}>
            <div className={styles.legendItem}><span className={styles.legendDot} style={{ background: '#4f46e5' }} />Direct (35%)</div>
            <div className={styles.legendItem}><span className={styles.legendDot} style={{ background: '#7c3aed' }} />Organic (25%)</div>
            <div className={styles.legendItem}><span className={styles.legendDot} style={{ background: '#06b6d4' }} />Referral (20%)</div>
            <div className={styles.legendItem}><span className={styles.legendDot} style={{ background: '#10b981' }} />Social (20%)</div>
          </div>
        </div>
      )}
    </div>
  );
}
