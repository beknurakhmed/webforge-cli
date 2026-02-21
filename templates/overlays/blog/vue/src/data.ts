export interface Post {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
}

export const categories = ['React', 'TypeScript', 'CSS', 'JavaScript', 'Node.js', 'DevOps']

export const posts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use useState and useEffect to manage state and side effects in functional components.',
    content: 'React Hooks revolutionized how we write components. With useState, you can add state to functional components without converting them to classes. The useEffect hook handles side effects like data fetching, subscriptions, and DOM manipulation. Together, they provide a cleaner and more composable way to build React applications.',
    category: 'React',
    author: 'Jane Developer',
    date: 'Mar 15, 2025',
    readTime: '5 min read',
    image: '⚛️',
  },
  {
    id: 2,
    title: 'TypeScript Best Practices for 2025',
    excerpt: 'Explore advanced TypeScript patterns including generics, utility types, and strict configurations.',
    content: 'TypeScript continues to evolve with powerful features. Generics allow you to write reusable, type-safe code. Utility types like Partial, Pick, and Omit help you transform existing types. Enabling strict mode catches more bugs at compile time. These practices lead to more maintainable and robust codebases.',
    category: 'TypeScript',
    author: 'Jane Developer',
    date: 'Mar 10, 2025',
    readTime: '7 min read',
    image: '📘',
  },
  {
    id: 3,
    title: 'Modern CSS Layout Techniques',
    excerpt: 'Master CSS Grid and Flexbox to create responsive layouts without frameworks.',
    content: 'CSS Grid and Flexbox are the foundation of modern web layouts. Grid excels at two-dimensional layouts while Flexbox handles one-dimensional alignment. Combined with container queries and logical properties, you can build truly responsive designs that adapt to any context without relying on external frameworks.',
    category: 'CSS',
    author: 'Alex Writer',
    date: 'Mar 5, 2025',
    readTime: '6 min read',
    image: '🎨',
  },
  {
    id: 4,
    title: 'Building REST APIs with Node.js',
    excerpt: 'A comprehensive guide to creating scalable REST APIs using Express and Node.js.',
    content: 'Node.js makes it straightforward to build performant REST APIs. Using Express as your framework, you can define routes, middleware, and error handlers. Add validation with libraries like Zod, connect to databases with ORMs, and implement authentication with JWT tokens for a complete backend solution.',
    category: 'Node.js',
    author: 'Alex Writer',
    date: 'Feb 28, 2025',
    readTime: '8 min read',
    image: '🟢',
  },
  {
    id: 5,
    title: 'JavaScript ES2025 Features',
    excerpt: 'Discover the latest JavaScript features including new array methods and pattern matching.',
    content: 'ES2025 brings exciting additions to JavaScript. New array methods like groupBy simplify data transformations. The pipeline operator makes function composition more readable. Pattern matching with the match expression provides powerful control flow. These features make JavaScript more expressive and developer-friendly.',
    category: 'JavaScript',
    author: 'Jane Developer',
    date: 'Feb 20, 2025',
    readTime: '4 min read',
    image: '✨',
  },
  {
    id: 6,
    title: 'Docker for Frontend Developers',
    excerpt: 'Learn how to containerize your frontend applications for consistent deployments.',
    content: 'Docker simplifies deployment by packaging your application with its dependencies. Create a Dockerfile for your frontend app, use multi-stage builds to optimize image size, and deploy consistently across environments. Docker Compose helps manage multi-service setups with databases and API servers alongside your frontend.',
    category: 'DevOps',
    author: 'Alex Writer',
    date: 'Feb 15, 2025',
    readTime: '6 min read',
    image: '🐳',
  },
]
