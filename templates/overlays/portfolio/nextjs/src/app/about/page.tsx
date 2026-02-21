import Link from 'next/link';
import { SkillsGrid } from '../components/SkillsGrid';

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
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-avatar">👨‍💻</div>
          <h1>About Me</h1>
          <p className="about-intro">
            I am a full-stack developer with over 6 years of experience building web applications.
            I am passionate about clean code, user experience, and turning complex problems into simple,
            elegant solutions.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2>💼 Experience</h2>
        <div className="timeline">
          {experience.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-icon">{exp.icon}</div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-period">{exp.period}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>🎓 Education</h2>
        <div className="education-grid">
          {education.map((edu, i) => (
            <div key={i} className="education-card">
              <span className="education-icon">{edu.icon}</span>
              <h3>{edu.degree}</h3>
              <p className="education-school">{edu.school}</p>
              <p className="education-year">{edu.year}</p>
            </div>
          ))}
        </div>
      </section>

      <SkillsGrid />

      <section className="about-cta">
        <h2>Want to work together?</h2>
        <p>I am always interested in hearing about new projects and opportunities.</p>
        <Link href="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
      </section>
    </div>
  );
}
