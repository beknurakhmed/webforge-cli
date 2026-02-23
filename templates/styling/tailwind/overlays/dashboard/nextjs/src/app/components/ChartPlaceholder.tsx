interface ChartPlaceholderProps {
  title: string;
  type?: 'bar' | 'line' | 'pie';
}

export function ChartPlaceholder({ title, type = 'bar' }: ChartPlaceholderProps) {
  const bars = [40, 65, 45, 80, 55, 70, 60, 85, 50, 75, 90, 68];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-base font-semibold text-gray-900 mb-5">{title}</h3>
      {type === 'bar' && (
        <div className="flex items-end gap-2 h-48 pt-4">
          {bars.map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
              <div className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t transition-all" style={{ height: `${height}%`, minHeight: '4px' }} />
              <span className="text-[0.65rem] text-gray-500 mt-1">{months[i]}</span>
            </div>
          ))}
        </div>
      )}
      {type === 'line' && (
        <div className="py-2">
          <svg viewBox="0 0 400 150" className="w-full h-36">
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
        <div className="flex items-center gap-8 py-4">
          <div className="flex gap-2 flex-wrap">
            <div className="px-4 py-4 rounded-lg text-white font-bold text-sm" style={{ background: '#4f46e5' }}>35%</div>
            <div className="px-4 py-4 rounded-lg text-white font-bold text-sm" style={{ background: '#7c3aed' }}>25%</div>
            <div className="px-4 py-4 rounded-lg text-white font-bold text-sm" style={{ background: '#06b6d4' }}>20%</div>
            <div className="px-4 py-4 rounded-lg text-white font-bold text-sm" style={{ background: '#10b981' }}>20%</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-gray-700"><span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#4f46e5' }} />Direct (35%)</div>
            <div className="flex items-center gap-2 text-sm text-gray-700"><span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#7c3aed' }} />Organic (25%)</div>
            <div className="flex items-center gap-2 text-sm text-gray-700"><span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#06b6d4' }} />Referral (20%)</div>
            <div className="flex items-center gap-2 text-sm text-gray-700"><span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#10b981' }} />Social (20%)</div>
          </div>
        </div>
      )}
    </div>
  );
}
