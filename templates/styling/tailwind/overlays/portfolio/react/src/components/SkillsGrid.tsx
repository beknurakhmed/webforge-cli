import { skills } from '../data/projects';

function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
      {skills.map((group, i) => (
        <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-base font-semibold mb-4 text-indigo-600">{group.category}</h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill, j) => (
              <span key={j} className="bg-gray-100 px-3 py-1 rounded-md text-sm text-gray-700">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsGrid;
