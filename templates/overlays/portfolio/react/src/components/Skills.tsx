const skillGroups = [
  { category: 'Frontend', skills: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js', 'Nuxt'] },
  { category: 'Styling', skills: ['Tailwind CSS', 'SCSS', 'Material UI', 'Styled Components', 'CSS Modules'] },
  { category: 'Backend', skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST API', 'GraphQL'] },
  { category: 'Tools', skills: ['Git', 'Docker', 'Vite', 'Webpack', 'Figma', 'VS Code'] },
];

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills & Technologies</h2>
      <p className="section-subtitle">Technologies I work with on a daily basis</p>
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <div key={i} className="skill-group">
            <h3>{group.category}</h3>
            <div className="skill-tags">
              {group.skills.map((skill, j) => (
                <span key={j} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
