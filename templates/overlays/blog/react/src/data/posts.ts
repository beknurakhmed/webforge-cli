export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export const posts: Post[] = [
  { id: 1, title: 'Getting Started with React 19', excerpt: 'Learn the new features and improvements in the latest React release.', content: 'React 19 introduces several exciting features including the new use hook, server components improvements, and better concurrent rendering. These changes simplify how we build modern web applications and improve both developer experience and end-user performance.', category: 'React', author: 'Jane Developer', date: '2024-12-15', readTime: '5 min', image: '⚛️' },
  { id: 2, title: 'TypeScript Best Practices in 2025', excerpt: 'Essential patterns and tips for writing clean TypeScript code.', content: 'TypeScript continues to evolve with powerful type inference, template literal types, and satisfies operator. Following best practices ensures your codebase remains maintainable and type-safe as it grows in complexity.', category: 'TypeScript', author: 'Alex Coder', date: '2024-12-10', readTime: '7 min', image: '📘' },
  { id: 3, title: 'Modern CSS Layout Techniques', excerpt: 'Master CSS Grid and Flexbox for responsive layouts.', content: 'CSS has come a long way with powerful layout tools. Container queries, subgrid, and the :has() selector open up new possibilities for creating responsive, maintainable designs without JavaScript.', category: 'CSS', author: 'Jane Developer', date: '2024-12-05', readTime: '6 min', image: '🎨' },
  { id: 4, title: 'JavaScript Performance Optimization', excerpt: 'Techniques to make your JavaScript applications faster.', content: 'Performance optimization starts with understanding the browser rendering pipeline. Learn about code splitting, tree shaking, lazy loading, and efficient DOM manipulation to build blazing fast web applications.', category: 'JavaScript', author: 'Mike Engineer', date: '2024-11-28', readTime: '8 min', image: '⚡' },
  { id: 5, title: 'Building REST APIs with Node.js', excerpt: 'A comprehensive guide to creating robust backend services.', content: 'Node.js provides an excellent foundation for building REST APIs. We cover Express.js setup, middleware patterns, authentication, validation, error handling, and deployment strategies for production-ready APIs.', category: 'Node.js', author: 'Alex Coder', date: '2024-11-20', readTime: '10 min', image: '🖥️' },
  { id: 6, title: 'CI/CD Pipelines for Frontend Projects', excerpt: 'Automate your build, test, and deployment workflows.', content: 'Setting up CI/CD pipelines transforms your development workflow. Learn how to configure GitHub Actions, automate testing, implement staging environments, and deploy with confidence using modern DevOps practices.', category: 'DevOps', author: 'Mike Engineer', date: '2024-11-15', readTime: '9 min', image: '🚀' },
];

export const categories = ['React', 'TypeScript', 'CSS', 'JavaScript', 'Node.js', 'DevOps'];
