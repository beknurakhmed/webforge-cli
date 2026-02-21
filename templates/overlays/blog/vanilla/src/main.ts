import { createRouter } from './router';
import { renderHome } from './pages/home';
import { renderPostDetail } from './pages/post-detail';
import { renderCategory } from './pages/category';
import { renderAbout } from './pages/about';
import './style.css';

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with TypeScript in 2024',
    excerpt: 'Learn the fundamentals of TypeScript and how it can improve your JavaScript development workflow with type safety and better tooling.',
    content: 'TypeScript has become an essential tool in modern web development. In this comprehensive guide, we will explore the core concepts of TypeScript, from basic types to advanced generics. Whether you are a beginner or an experienced developer, understanding TypeScript will significantly improve your code quality and development experience.\n\nTypeScript adds static typing to JavaScript, which means you can catch errors at compile time rather than runtime. This leads to more robust and maintainable code. Let us dive into the key features that make TypeScript a must-learn language in 2024.\n\nFirst, let us talk about type annotations. Type annotations allow you to explicitly specify the type of a variable, function parameter, or return value. This makes your code self-documenting and easier to understand.\n\nNext, we will explore interfaces and type aliases, which let you define custom types that describe the shape of objects. These are incredibly powerful for creating contracts between different parts of your application.',
    author: 'Sarah Chen',
    authorAvatar: '👩',
    date: 'Mar 15, 2024',
    category: 'Technology',
    readTime: '8 min read',
    image: '💻',
    tags: ['TypeScript', 'JavaScript', 'Web Development'],
  },
  {
    id: 2,
    title: 'The Art of Responsive Web Design',
    excerpt: 'Master the principles of responsive design and create websites that look great on every device, from mobile phones to large desktop screens.',
    content: 'Responsive web design is no longer optional, it is a fundamental requirement. With users accessing websites from a myriad of devices, ensuring your site looks and functions well across all screen sizes is crucial for user experience and SEO.\n\nIn this article, we explore modern CSS techniques including Flexbox, Grid, and container queries that make responsive design easier than ever. We will also discuss best practices for mobile-first design and progressive enhancement.',
    author: 'Mike Johnson',
    authorAvatar: '👨',
    date: 'Mar 12, 2024',
    category: 'Design',
    readTime: '6 min read',
    image: '🎨',
    tags: ['CSS', 'Responsive', 'Design'],
  },
  {
    id: 3,
    title: 'Building RESTful APIs with Node.js',
    excerpt: 'A practical guide to creating robust and scalable REST APIs using Node.js, Express, and modern best practices for API design.',
    content: 'RESTful APIs are the backbone of modern web applications. In this tutorial, we walk through building a complete API from scratch using Node.js and Express. You will learn about routing, middleware, error handling, authentication, and database integration.\n\nWe will cover everything from project setup to deployment, including testing strategies and documentation with Swagger/OpenAPI.',
    author: 'Emily Davis',
    authorAvatar: '👩‍💼',
    date: 'Mar 10, 2024',
    category: 'Technology',
    readTime: '12 min read',
    image: '🔧',
    tags: ['Node.js', 'API', 'Backend'],
  },
  {
    id: 4,
    title: 'UX Design Principles Every Developer Should Know',
    excerpt: 'Understanding core UX principles can help developers create more intuitive and user-friendly applications from the ground up.',
    content: 'Great user experience does not happen by accident. It is the result of thoughtful design decisions based on understanding how users think and behave. As a developer, knowing these principles can significantly improve the quality of your work.\n\nWe will explore key concepts like cognitive load, Fitts law, Hick law, and the principles of visual hierarchy. These fundamentals will help you make better design decisions in your daily work.',
    author: 'Alex Rivera',
    authorAvatar: '🧑',
    date: 'Mar 8, 2024',
    category: 'Design',
    readTime: '7 min read',
    image: '✨',
    tags: ['UX', 'Design', 'Psychology'],
  },
  {
    id: 5,
    title: 'State Management Patterns in Modern Apps',
    excerpt: 'Compare different state management approaches and learn which pattern works best for your application architecture.',
    content: 'State management is one of the most debated topics in frontend development. From simple local state to complex global stores, there are many ways to handle application state. This article compares popular approaches and helps you choose the right one.\n\nWe will look at patterns like Flux, Redux, MobX, and newer approaches like Zustand and Jotai, discussing their trade-offs and ideal use cases.',
    author: 'Jordan Lee',
    authorAvatar: '👨‍💻',
    date: 'Mar 5, 2024',
    category: 'Technology',
    readTime: '10 min read',
    image: '🧩',
    tags: ['State Management', 'Architecture', 'Frontend'],
  },
  {
    id: 6,
    title: 'A Complete Guide to CSS Grid Layout',
    excerpt: 'Master CSS Grid with practical examples and learn how to create complex layouts with minimal code and maximum flexibility.',
    content: 'CSS Grid Layout is one of the most powerful layout systems available in CSS. It allows you to create two-dimensional layouts with rows and columns, giving you unprecedented control over your page structure.\n\nIn this guide, we cover everything from basic grid setup to advanced techniques like named grid areas, auto-fill, auto-fit, and subgrid.',
    author: 'Taylor Kim',
    authorAvatar: '🧑‍🎨',
    date: 'Mar 2, 2024',
    category: 'Tutorial',
    readTime: '9 min read',
    image: '📐',
    tags: ['CSS', 'Grid', 'Layout'],
  },
];

export const categories = ['All', 'Technology', 'Design', 'Tutorial'];

const app = document.querySelector<HTMLElement>('#app')!;

createRouter([
  { path: '/', render: renderHome },
  { path: '/post/:id', render: renderPostDetail },
  { path: '/category/:name', render: renderCategory },
  { path: '/about', render: renderAbout },
], app);
