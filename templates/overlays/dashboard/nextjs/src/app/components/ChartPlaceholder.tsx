interface ChartPlaceholderProps {
  title: string;
  type?: 'bar' | 'line' | 'pie';
}

export function ChartPlaceholder({ title, type = 'bar' }: ChartPlaceholderProps) {
  const bars = [40, 65, 45, 80, 55, 70, 60, 85, 50, 75, 90, 68];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="chart-card">
      <h3 className="chart-title">{title}</h3>
      {type === 'bar' && (
        <div className="chart-bars">
          {bars.map((height, i) => (
            <div key={i} className="chart-bar-wrapper">
              <div className="chart-bar" style={{ height: `${height}%` }} />
              <span className="chart-label">{months[i]}</span>
            </div>
          ))}
        </div>
      )}
      {type === 'line' && (
        <div className="chart-line-placeholder">
          <svg viewBox="0 0 400 150" className="chart-svg">
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
        <div className="chart-pie-placeholder">
          <div className="pie-chart">
            <div className="pie-segment" style={{ '--segment-color': '#4f46e5', '--segment-percent': '35' } as React.CSSProperties}>35%</div>
            <div className="pie-segment" style={{ '--segment-color': '#7c3aed', '--segment-percent': '25' } as React.CSSProperties}>25%</div>
            <div className="pie-segment" style={{ '--segment-color': '#06b6d4', '--segment-percent': '20' } as React.CSSProperties}>20%</div>
            <div className="pie-segment" style={{ '--segment-color': '#10b981', '--segment-percent': '20' } as React.CSSProperties}>20%</div>
          </div>
          <div className="pie-legend">
            <div className="legend-item"><span className="legend-dot" style={{ background: '#4f46e5' }} />Direct (35%)</div>
            <div className="legend-item"><span className="legend-dot" style={{ background: '#7c3aed' }} />Organic (25%)</div>
            <div className="legend-item"><span className="legend-dot" style={{ background: '#06b6d4' }} />Referral (20%)</div>
            <div className="legend-item"><span className="legend-dot" style={{ background: '#10b981' }} />Social (20%)</div>
          </div>
        </div>
      )}
    </div>
  );
}
