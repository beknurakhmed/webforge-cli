import Link from 'next/link';
import { SkillsGrid } from '../components/SkillsGrid';
import styles from './page.module.css';

const experience = [
  { role: 'Senior Full-Stack Developer', company: 'TechCorp Inc.', period: '2022 - Present', description: 'Leading development of cloud-native applications serving 50K+ users. Architecting microservices and mentoring junior developers.', icon: '🏢' },
  { role: 'Frontend Developer', company: 'DesignStudio Co.', period: '2020 - 2022', description: 'Built responsive web applications and design systems. Improved page load performance by 40% through optimization.', icon: '💻' },
  { role: 'Junior Developer', company: 'StartupXYZ', period: '2018 - 2020', description: 'Full-stack development for a SaaS platform. Implemented features used by thousands of customers daily.', icon: '🚀' },
];

const education = [
  { degree: 'M.S. Computer Science', school: 'State University', year: '2018', icon: '🎓' },
  { degree: 'B.S. Software Engineering', school: 'Tech Institute', year: '2016', icon: '📚' },
];

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.aboutHero}>
        <div>
          <div className={styles.aboutAvatar}>👨‍💻</div>
          <h1>About Me</h1>
          <p className={styles.aboutIntro}>
            I am a full-stack developer with over 6 years of experience building web applications.
            I am passionate about clean code, user experience, and turning complex problems into simple,
            elegant solutions.
          </p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2>💼 Experience</h2>
        <div className={styles.timeline}>
          {experience.map((exp, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineIcon}>{exp.icon}</div>
              <div className={styles.timelineContent}>
                <h3>{exp.role}</h3>
                <p className={styles.timelineCompany}>{exp.company}</p>
                <p className={styles.timelinePeriod}>{exp.period}</p>
                <p className={styles.timelineDescription}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2>🎓 Education</h2>
        <div className={styles.educationGrid}>
          {education.map((edu, i) => (
            <div key={i} className={styles.educationCard}>
              <span className={styles.educationIcon}>{edu.icon}</span>
              <h3>{edu.degree}</h3>
              <p className={styles.educationSchool}>{edu.school}</p>
              <p className={styles.educationYear}>{edu.year}</p>
            </div>
          ))}
        </div>
      </section>

      <SkillsGrid />

      <section className={styles.aboutCta}>
        <h2>Want to work together?</h2>
        <p>I am always interested in hearing about new projects and opportunities.</p>
        <Link href="/contact" className={styles.btnPrimary}>Get in Touch</Link>
      </section>
    </div>
  );
}
