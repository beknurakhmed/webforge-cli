interface ChartPlaceholderProps {
  title: string;
}

export function ChartPlaceholder({ title }: ChartPlaceholderProps) {
  return (
    <div className="chart-card">
      <h3>{title}</h3>
      <div className="chart-placeholder">
        <div className="chart-bars">
          {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((h, i) => (
            <div key={i} className="chart-bar" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
