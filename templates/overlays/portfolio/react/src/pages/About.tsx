import SkillsGrid from '../components/SkillsGrid';

const timeline = [
  { year: '2024 - Present', role: 'Senior Frontend Developer', company: 'Tech Corp', desc: 'Leading frontend architecture and mentoring junior developers.' },
  { year: '2022 - 2024', role: 'Frontend Developer', company: 'StartupXYZ', desc: 'Built and maintained multiple React applications from scratch.' },
  { year: '2020 - 2022', role: 'Junior Developer', company: 'Web Agency', desc: 'Developed responsive websites and learned modern frameworks.' },
];

function About() {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <p className="section-subtitle">My journey as a developer</p>
      <div className="about-content">
        <div className="about-bio">
          <span className="about-avatar">👨‍💻</span>
          <p>
            I am a passionate software engineer with a love for building beautiful, performant
            web applications. With expertise in modern JavaScript frameworks and a keen eye
            for design, I bridge the gap between functionality and aesthetics.
          </p>
        </div>
        <h3 className="timeline-title">Experience</h3>
        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item">
              <span className="timeline-year">{item.year}</span>
              <h4>{item.role}</h4>
              <span className="timeline-company">{item.company}</span>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-section">
        <h3 className="timeline-title">Skills</h3>
        <SkillsGrid />
      </div>
    </div>
  );
}

export default About;
