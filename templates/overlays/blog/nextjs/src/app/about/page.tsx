import Link from 'next/link';

const team = [
  { name: 'Alex Rivera', role: 'Lead Writer & Editor', bio: 'Full-stack developer with 10+ years of experience. Passionate about modern web technologies and developer education.', avatar: '👨‍💻' },
  { name: 'Priya Sharma', role: 'Design Writer', bio: 'UI/UX designer who loves translating complex design concepts into accessible, practical advice.', avatar: '👩‍🎨' },
  { name: 'Marcus Chen', role: 'Technical Writer', bio: 'Software architect specializing in scalable systems and design patterns. Writes about architecture and best practices.', avatar: '👨' },
  { name: 'Sofia Andersen', role: 'Tutorial Creator', bio: 'Frontend developer and educator. Creates in-depth tutorials that make complex topics approachable.', avatar: '👩' },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About {'{{projectName}}'}</h1>
        <p>We are a team of passionate developers and designers sharing knowledge about modern web development, design, and technology.</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>We believe in making technology accessible to everyone. Our articles combine practical tutorials with in-depth analysis to help developers at every level grow their skills and stay current with the latest trends.</p>
        </div>

        <div className="about-section">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-avatar">{member.avatar}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-section">
          <h2>Get In Touch</h2>
          <p>Have a suggestion for a topic? Want to contribute? We would love to hear from you.</p>
          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <span>hello@{'{{projectName}}'}.com</span>
            </div>
            <div className="contact-item">
              <span>🐦</span>
              <span>@{'{{projectName}}'}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
