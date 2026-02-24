import { createRouter } from './router';
import { renderHome } from './pages/home';
import { renderProjects } from './pages/projects';
import { renderAbout } from './pages/about';
import { renderContact } from './pages/contact';
import './style.scss';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link: string;
  year: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export const projects: Project[] = [
  { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart management, payment integration, and real-time inventory tracking.', image: '🛒', tags: ['React', 'Node.js', 'Stripe'], category: 'Web App', link: '#', year: '2024' },
  { id: 2, title: 'Task Management Dashboard', description: 'A collaborative project management tool with drag-and-drop boards, real-time updates, and team analytics.', image: '📋', tags: ['Vue.js', 'Firebase', 'Tailwind'], category: 'Web App', link: '#', year: '2024' },
  { id: 3, title: 'Weather Forecast App', description: 'A beautiful weather application with interactive maps, 7-day forecasts, and location-based alerts.', image: '🌤️', tags: ['React Native', 'API', 'Maps'], category: 'Mobile', link: '#', year: '2023' },
  { id: 4, title: 'Portfolio Website', description: 'A sleek and modern portfolio website showcasing creative work with smooth animations and responsive design.', image: '🎨', tags: ['HTML', 'CSS', 'JavaScript'], category: 'Design', link: '#', year: '2023' },
  { id: 5, title: 'Chat Application', description: 'Real-time messaging platform with group chats, file sharing, emoji reactions, and end-to-end encryption.', image: '💬', tags: ['Socket.io', 'Express', 'MongoDB'], category: 'Web App', link: '#', year: '2023' },
  { id: 6, title: 'Fitness Tracker', description: 'A health and fitness tracking application with workout logging, progress charts, and meal planning features.', image: '💪', tags: ['Flutter', 'Dart', 'SQLite'], category: 'Mobile', link: '#', year: '2022' },
];

export const skills: Skill[] = [
  { name: 'JavaScript', level: 95, icon: '🟨' },
  { name: 'TypeScript', level: 90, icon: '🔷' },
  { name: 'React', level: 92, icon: '⚛️' },
  { name: 'Node.js', level: 88, icon: '🟩' },
  { name: 'CSS/Sass', level: 85, icon: '🎨' },
  { name: 'Python', level: 78, icon: '🐍' },
  { name: 'Git', level: 90, icon: '📦' },
  { name: 'Docker', level: 72, icon: '🐳' },
];

export const experience = [
  { role: 'Senior Frontend Developer', company: 'TechCorp Inc.', period: '2022 - Present', description: 'Leading the frontend team in building scalable web applications using React and TypeScript.' },
  { role: 'Full Stack Developer', company: 'StartupHub', period: '2020 - 2022', description: 'Built and maintained multiple web applications from concept to deployment using modern tech stacks.' },
  { role: 'Junior Developer', company: 'WebAgency', period: '2018 - 2020', description: 'Developed responsive websites and landing pages for various clients across different industries.' },
];

const app = document.querySelector<HTMLElement>('#app')!;

createRouter([
  { path: '/', render: renderHome },
  { path: '/projects', render: renderProjects },
  { path: '/about', render: renderAbout },
  { path: '/contact', render: renderContact },
], app);
