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
    <section className="skills-section">
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">Tools and technologies I work with on a daily basis</p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-category">{skill.category}</span>
            </div>
            <h4 className="skill-name">{skill.name}</h4>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${skill.level}%` }} />
            </div>
            <span className="skill-level">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
