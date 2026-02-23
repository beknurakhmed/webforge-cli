import Link from 'next/link';
import { ProjectCard, Project } from './components/ProjectCard';
import { SkillsGrid } from './components/SkillsGrid';

const projects: Project[] = [
  { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart, checkout, and payment integration. Built with modern web technologies for optimal performance.', tech: ['React', 'Node.js', 'PostgreSQL'], image: '🛒', category: 'Web App', link: '#', featured: true },
  { id: 2, title: 'Task Management Dashboard', description: 'Real-time collaborative task management tool with drag-and-drop, notifications, and team features.', tech: ['Next.js', 'TypeScript', 'MongoDB'], image: '📋', category: 'SaaS', link: '#', featured: true },
  { id: 3, title: 'Weather Analytics App', description: 'Interactive weather visualization app with historical data analysis and forecasting capabilities.', tech: ['React', 'D3.js', 'Python'], image: '🌤️', category: 'Data Viz', link: '#', featured: true },
  { id: 4, title: 'Social Media Mobile App', description: 'Cross-platform social app with real-time messaging, stories, and content sharing features.', tech: ['React Native', 'Firebase', 'Redux'], image: '📱', category: 'Mobile', link: '#', featured: false },
  { id: 5, title: 'AI Content Generator', description: 'AI-powered tool for generating marketing copy, blog posts, and social media content automatically.', tech: ['Python', 'OpenAI', 'FastAPI'], image: '🤖', category: 'AI/ML', link: '#', featured: false },
  { id: 6, title: 'Portfolio Website Builder', description: 'Drag-and-drop portfolio builder with customizable themes, animations, and one-click deployment.', tech: ['Vue.js', 'Node.js', 'AWS'], image: '🎨', category: 'Web App', link: '#', featured: false },
];

const featuredProjects = projects.filter((p) => p.featured);

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
        <div>
          <p className="text-lg text-indigo-600 font-semibold mb-2">Hello, I am</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">{'{{projectName}}'}</h1>
          <p className="text-xl text-gray-500 font-medium mb-4">Full-Stack Developer & Designer</p>
          <p className="text-base text-gray-700 mb-8 max-w-lg">
            I build modern web applications with clean code and thoughtful design.
            Passionate about creating digital experiences that make a real impact.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/projects" className="inline-block px-7 py-3 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">View Projects</Link>
            <Link href="/contact" className="inline-block px-7 py-3 rounded-lg font-semibold bg-transparent text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors">Get in Touch</Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-[10rem]">👨‍💻</div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Featured Projects</h2>
        <p className="text-center text-gray-500 mt-2 mb-8">A selection of my recent work and side projects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/projects" className="inline-block px-7 py-3 rounded-lg font-semibold bg-transparent text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors">View All Projects →</Link>
        </div>
      </section>

      <SkillsGrid />

      <section className="text-center py-16 px-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl my-16 text-white">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Let us Work Together</h2>
        <p className="text-lg opacity-90 mb-6 max-w-lg mx-auto">Have a project in mind? I am always open to discussing new opportunities and creative ideas.</p>
        <Link href="/contact" className="inline-block px-8 py-3.5 rounded-lg text-lg font-semibold bg-white text-indigo-600 hover:bg-gray-100 transition-colors">Start a Conversation</Link>
      </section>
    </div>
  );
}
