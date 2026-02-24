import { skills } from '../data/projects';
import styles from './SkillsGrid.module.css';

function SkillsGrid() {
  return (
    <div className={styles.skillsGrid}>
      {skills.map((group, i) => (
        <div key={i} className={styles.skillGroup}>
          <h3>{group.category}</h3>
          <div className={styles.skillTags}>
            {group.items.map((skill, j) => (
              <span key={j} className={styles.skillTag}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsGrid;
