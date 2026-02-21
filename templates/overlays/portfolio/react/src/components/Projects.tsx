const projects = [
  { title: 'E-commerce Platform', description: 'A full-featured online store with cart, checkout, and payment integration.', tags: ['React', 'Node.js', 'Stripe'], image: '🛒' },
  { title: 'Task Management App', description: 'Collaborative task management with real-time updates and team features.', tags: ['Vue.js', 'Firebase', 'Tailwind'], image: '📋' },
  { title: 'Weather Dashboard', description: 'Beautiful weather visualization with 5-day forecasts and location search.', tags: ['TypeScript', 'API', 'Chart.js'], image: '🌤️' },
  { title: 'Social Media App', description: 'Social networking platform with posts, comments, and real-time messaging.', tags: ['Next.js', 'PostgreSQL', 'WebSocket'], image: '💬' },
  { title: 'Portfolio Website', description: 'Responsive portfolio with animations and dark mode support.', tags: ['React', 'Framer Motion', 'SCSS'], image: '🎨' },
  { title: 'Blog CMS', description: 'Content management system with markdown editor and SEO optimization.', tags: ['Nuxt', 'MongoDB', 'Markdown'], image: '📝' },
];

export function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Featured Projects</h2>
      <p className="section-subtitle">A selection of my recent work</p>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <div className="project-image">{project.image}</div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
