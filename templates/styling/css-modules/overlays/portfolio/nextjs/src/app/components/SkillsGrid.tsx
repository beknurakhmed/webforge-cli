import styles from './SkillsGrid.module.css';

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
    <section className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
      <p className={styles.sectionSubtitle}>Tools and technologies I work with on a daily basis</p>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <span className={styles.skillIcon}>{skill.icon}</span>
              <span className={styles.skillCategory}>{skill.category}</span>
            </div>
            <h4 className={styles.skillName}>{skill.name}</h4>
            <div className={styles.skillBar}>
              <div className={styles.skillFill} style={{ width: `${skill.level}%` }} />
            </div>
            <span className={styles.skillLevel}>{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
