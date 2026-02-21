'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { PostCard, Post } from '../../components/PostCard';
import { BlogSidebar } from '../../components/BlogSidebar';

const posts: Post[] = [
  { id: 1, title: 'Getting Started with Next.js 15', excerpt: 'Learn the fundamentals of Next.js 15 App Router, server components, and file-based routing in this comprehensive guide.', content: '', author: 'Alex Rivera', date: 'Jan 15, 2025', category: 'Technology', readTime: '8 min read', image: '⚛️', authorAvatar: '👨‍💻' },
  { id: 2, title: 'Building Better User Interfaces', excerpt: 'Explore modern UI patterns and best practices for creating intuitive, accessible, and beautiful user interfaces.', content: '', author: 'Priya Sharma', date: 'Jan 12, 2025', category: 'Design', readTime: '6 min read', image: '🎨', authorAvatar: '👩‍🎨' },
  { id: 3, title: 'Design Systems That Scale', excerpt: 'How to build and maintain design systems that grow with your organization while maintaining consistency.', content: '', author: 'Marcus Chen', date: 'Jan 10, 2025', category: 'Design', readTime: '10 min read', image: '📐', authorAvatar: '👨' },
  { id: 4, title: 'TypeScript Tips and Tricks', excerpt: 'Advanced TypeScript patterns that will make your code more type-safe, readable, and maintainable.', content: '', author: 'Sofia Andersen', date: 'Jan 8, 2025', category: 'Technology', readTime: '7 min read', image: '📘', authorAvatar: '👩' },
  { id: 5, title: 'The Future of Web Development', excerpt: 'A look at emerging trends and technologies that are shaping the future of how we build for the web.', content: '', author: 'Alex Rivera', date: 'Jan 3, 2025', category: 'Technology', readTime: '12 min read', image: '🌐', authorAvatar: '👨‍💻' },
  { id: 6, title: 'Mastering CSS Grid Layout', excerpt: 'A deep dive into CSS Grid with practical examples for creating complex, responsive layouts with ease.', content: '', author: 'Priya Sharma', date: 'Dec 28, 2024', category: 'Tutorial', readTime: '9 min read', image: '📏', authorAvatar: '👩‍🎨' },
];

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const filteredPosts = posts.filter(
    (p) => p.category.toLowerCase() === slug.toLowerCase()
  );

  return (
    <div className="category-page">
      <div className="category-header">
        <Link href="/" className="back-link">← All Posts</Link>
        <h1>📂 {categoryName}</h1>
        <p>{filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} in this category</p>
      </div>

      <div className="blog-layout">
        <section className="posts-list">
          {filteredPosts.length > 0 ? (
            <div className="posts-grid">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No articles found in this category.</p>
              <Link href="/" className="btn btn-primary">View All Posts</Link>
            </div>
          )}
        </section>
        <BlogSidebar />
      </div>
    </div>
  );
}
