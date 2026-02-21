import { BlogHeader } from './components/BlogHeader';
import { PostList } from './components/PostList';
import { BlogSidebar } from './components/BlogSidebar';
import { BlogFooter } from './components/BlogFooter';
import './App.css';

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

const posts: Post[] = [
  { id: 1, title: 'Getting Started with Modern Web Development', excerpt: 'Learn the fundamentals of modern web development including frameworks, build tools, and best practices.', author: 'Beknur', date: 'Feb 20, 2025', category: 'Tutorial', readTime: '5 min', image: '📘' },
  { id: 2, title: 'Understanding TypeScript Generics', excerpt: 'A deep dive into TypeScript generics and how they can make your code more reusable and type-safe.', author: 'Beknur', date: 'Feb 18, 2025', category: 'TypeScript', readTime: '8 min', image: '📗' },
  { id: 3, title: 'CSS Grid vs Flexbox: When to Use Which', excerpt: 'A practical comparison of CSS Grid and Flexbox with real-world examples and use cases.', author: 'Beknur', date: 'Feb 15, 2025', category: 'CSS', readTime: '6 min', image: '📙' },
  { id: 4, title: 'Building Accessible Web Applications', excerpt: 'Best practices for building web applications that are accessible to everyone.', author: 'Beknur', date: 'Feb 12, 2025', category: 'Accessibility', readTime: '7 min', image: '📕' },
  { id: 5, title: 'State Management in 2025', excerpt: 'An overview of state management solutions and when to use them in modern applications.', author: 'Beknur', date: 'Feb 10, 2025', category: 'Architecture', readTime: '10 min', image: '📓' },
];

function App() {
  return (
    <div className="blog">
      <BlogHeader />
      <div className="blog-layout">
        <PostList posts={posts} />
        <BlogSidebar />
      </div>
      <BlogFooter />
    </div>
  );
}

export default App;
