interface FiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = ['all', 'lead', 'prospect', 'customer', 'churned'];

export function Filters({ activeFilter, onFilterChange }: FiltersProps) {
  return (
    <div className="filters">
      {filters.map((f) => (
        <button
          key={f}
          className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
          onClick={() => onFilterChange(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
