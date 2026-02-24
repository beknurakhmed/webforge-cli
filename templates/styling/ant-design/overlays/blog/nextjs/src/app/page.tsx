'use client';

import { Typography } from 'antd';
import { PostCard, Post } from './components/PostCard';
import { BlogSidebar } from './components/BlogSidebar';

const { Title } = Typography;

const posts: Post[] = [
  { id: 1, title: 'Getting Started with Next.js 15', excerpt: 'Learn the fundamentals of Next.js 15 App Router, server components, and file-based routing.', content: '', author: 'Alex Rivera', date: 'Jan 15, 2025', category: 'Technology', readTime: '8 min read', image: '⚛️', authorAvatar: '👨‍💻' },
  { id: 2, title: 'Building Better User Interfaces', excerpt: 'Explore modern UI patterns and best practices for creating intuitive, accessible interfaces.', content: '', author: 'Priya Sharma', date: 'Jan 12, 2025', category: 'Design', readTime: '6 min read', image: '🎨', authorAvatar: '👩‍🎨' },
  { id: 3, title: 'Design Systems That Scale', excerpt: 'How to build and maintain design systems that grow with your organization.', content: '', author: 'Marcus Chen', date: 'Jan 10, 2025', category: 'Design', readTime: '10 min read', image: '📐', authorAvatar: '👨' },
  { id: 4, title: 'TypeScript Tips and Tricks', excerpt: 'Advanced TypeScript patterns that will make your code more type-safe and readable.', content: '', author: 'Sofia Andersen', date: 'Jan 8, 2025', category: 'Technology', readTime: '7 min read', image: '📘', authorAvatar: '👩' },
  { id: 5, title: 'The Future of Web Development', excerpt: 'A look at emerging trends and technologies that are shaping the future of the web.', content: '', author: 'Alex Rivera', date: 'Jan 3, 2025', category: 'Technology', readTime: '12 min read', image: '🌐', authorAvatar: '👨‍💻' },
  { id: 6, title: 'Mastering CSS Grid Layout', excerpt: 'A deep dive into CSS Grid with practical examples for creating complex layouts.', content: '', author: 'Priya Sharma', date: 'Dec 28, 2024', category: 'Tutorial', readTime: '9 min read', image: '📏', authorAvatar: '👩‍🎨' },
];

export default function BlogHomePage() {
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div>
      <PostCard post={featuredPost} featured />
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginTop: 32 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Title level={3}>Latest Articles</Title>
          {remainingPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <BlogSidebar />
      </div>
    </div>
  );
}
