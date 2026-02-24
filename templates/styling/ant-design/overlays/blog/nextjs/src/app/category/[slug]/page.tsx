'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Typography, Button, Empty } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { PostCard, Post } from '../../components/PostCard';

const { Title } = Typography;

const posts: Post[] = [
  { id: 1, title: 'Getting Started with Next.js 15', excerpt: 'Learn the fundamentals of Next.js 15 App Router.', content: '', author: 'Alex Rivera', date: 'Jan 15, 2025', category: 'Technology', readTime: '8 min read', image: '⚛️', authorAvatar: '👨‍💻' },
  { id: 2, title: 'Building Better User Interfaces', excerpt: 'Explore modern UI patterns and best practices.', content: '', author: 'Priya Sharma', date: 'Jan 12, 2025', category: 'Design', readTime: '6 min read', image: '🎨', authorAvatar: '👩‍🎨' },
  { id: 3, title: 'Design Systems That Scale', excerpt: 'How to build and maintain design systems.', content: '', author: 'Marcus Chen', date: 'Jan 10, 2025', category: 'Design', readTime: '10 min read', image: '📐', authorAvatar: '👨' },
  { id: 4, title: 'TypeScript Tips and Tricks', excerpt: 'Advanced TypeScript patterns for type-safe code.', content: '', author: 'Sofia Andersen', date: 'Jan 8, 2025', category: 'Technology', readTime: '7 min read', image: '📘', authorAvatar: '👩' },
  { id: 6, title: 'Mastering CSS Grid Layout', excerpt: 'A deep dive into CSS Grid with practical examples.', content: '', author: 'Priya Sharma', date: 'Dec 28, 2024', category: 'Tutorial', readTime: '9 min read', image: '📏', authorAvatar: '👩‍🎨' },
];

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const filtered = posts.filter((p) => p.category.toLowerCase() === slug.toLowerCase());
  const categoryName = filtered.length > 0 ? filtered[0].category : slug;

  return (
    <div>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, color: '#4f46e5' }}>
        <ArrowLeftOutlined /> Back to Home
      </Link>
      <Title level={2}>Category: {categoryName}</Title>
      {filtered.length === 0 ? (
        <Empty description="No posts found in this category." />
      ) : (
        filtered.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}
