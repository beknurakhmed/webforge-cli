export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link: string;
}

export const projects: Project[] = [
  { id: 1, title: 'E-Commerce Platform', description: 'Full-stack online store with cart, checkout, and payment integration.', image: '🛒', tags: ['React', 'Node.js', 'MongoDB'], category: 'Web App', link: '#' },
  { id: 2, title: 'Task Management App', description: 'Collaborative task manager with real-time updates and team features.', image: '📋', tags: ['Vue.js', 'Firebase', 'Tailwind'], category: 'Web App', link: '#' },
  { id: 3, title: 'Weather Dashboard', description: 'Beautiful weather visualization with forecasts and location search.', image: '🌤️', tags: ['TypeScript', 'API', 'Chart.js'], category: 'Dashboard', link: '#' },
  { id: 4, title: 'Social Media App', description: 'Social networking platform with posts, comments, and messaging.', image: '💬', tags: ['Next.js', 'PostgreSQL', 'WebSocket'], category: 'Mobile', link: '#' },
  { id: 5, title: 'Portfolio Website', description: 'Responsive portfolio with animations and dark mode support.', image: '🎨', tags: ['React', 'Framer Motion', 'SCSS'], category: 'Website', link: '#' },
  { id: 6, title: 'Blog CMS', description: 'Content management system with markdown editor and SEO tools.', image: '📝', tags: ['Nuxt', 'MongoDB', 'Markdown'], category: 'Website', link: '#' },
];

export const skills = [
  { category: 'Frontend', items: ['React', 'Vue', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
  { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Linux'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Jira'] },
];
