import { skills } from '../data/projects';

function SkillsGrid() {
  return (
    <div className="skills-grid">
      {skills.map((group, i) => (
        <div key={i} className="skill-group">
          <h3>{group.category}</h3>
          <div className="skill-tags">
            {group.items.map((skill, j) => (
              <span key={j} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsGrid;
