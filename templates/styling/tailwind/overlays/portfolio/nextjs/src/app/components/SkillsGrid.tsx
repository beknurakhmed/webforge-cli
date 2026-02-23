interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  { name: 'React', level: 95, icon: '⚛️', category: 'Frontend' },
  { name: 'TypeScript', level: 90, icon: '📘', category: 'Languages' },
  { name: 'Node.js', level: 88, icon: '🟢', category: 'Backend' },
  { name: 'Next.js', level: 92, icon: '▲', category: 'Frontend' },
  { name: 'CSS/Sass', level: 90, icon: '🎨', category: 'Frontend' },
  { name: 'Python', level: 80, icon: '🐍', category: 'Languages' },
  { name: 'PostgreSQL', level: 82, icon: '🐘', category: 'Backend' },
  { name: 'Docker', level: 75, icon: '🐳', category: 'DevOps' },
  { name: 'AWS', level: 78, icon: '☁️', category: 'DevOps' },
  { name: 'Git', level: 93, icon: '📂', category: 'Tools' },
  { name: 'Figma', level: 85, icon: '🖌️', category: 'Design' },
  { name: 'GraphQL', level: 80, icon: '📊', category: 'Backend' },
];

export function SkillsGrid() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-gray-900 text-center">Skills & Technologies</h2>
      <p className="text-center text-gray-500 mt-2 mb-8">Tools and technologies I work with on a daily basis</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-white p-5 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-[0.7rem] font-semibold text-gray-500 uppercase">{skill.category}</span>
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">{skill.name}</h4>
            <div className="w-full h-1.5 bg-gray-50 rounded overflow-hidden mb-1">
              <div className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded transition-all" style={{ width: `${skill.level}%` }} />
            </div>
            <span className="text-xs text-gray-500 font-semibold">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
