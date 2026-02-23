interface ChartPlaceholderProps {
  title: string;
  data?: number[];
}

export function ChartPlaceholder({ title, data }: ChartPlaceholderProps) {
  const bars = data || [40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95];

  return (
    <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">{title}</h3>
      <div className="h-48 lg:h-52 flex items-end">
        <div className="flex gap-2 items-end h-full w-full">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-w-3 transition-all duration-300"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
