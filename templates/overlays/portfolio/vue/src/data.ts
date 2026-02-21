export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  link: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack online store with cart, checkout, and payment integration.',
    image: '🛒',
    tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    category: 'Full Stack',
    link: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task tracker with real-time updates and team features.',
    image: '📋',
    tags: ['Vue', 'Firebase', 'TypeScript'],
    category: 'Frontend',
    link: '#',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization dashboard with custom chart components.',
    image: '📊',
    tags: ['React', 'D3.js', 'TypeScript', 'REST API'],
    category: 'Frontend',
    link: '#',
  },
  {
    id: 4,
    title: 'REST API Service',
    description: 'Scalable microservice architecture with authentication and rate limiting.',
    image: '🔗',
    tags: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    category: 'Backend',
    link: '#',
  },
  {
    id: 5,
    title: 'Mobile Weather App',
    description: 'Cross-platform weather app with location-based forecasts and alerts.',
    image: '🌤️',
    tags: ['React Native', 'TypeScript', 'Weather API'],
    category: 'Mobile',
    link: '#',
  },
  {
    id: 6,
    title: 'CI/CD Pipeline',
    description: 'Automated build, test, and deployment pipeline for cloud infrastructure.',
    image: '🚀',
    tags: ['Docker', 'GitHub Actions', 'AWS', 'Terraform'],
    category: 'DevOps',
    link: '#',
  },
]

export const skills: SkillGroup[] = [
  { category: 'Frontend', items: ['React', 'Vue', 'TypeScript', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL'] },
  { category: 'DevOps', items: ['Docker', 'AWS', 'GitHub Actions', 'Terraform'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Postman'] },
]
