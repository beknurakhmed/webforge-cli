'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';
import { PostCard, Post } from '../../components/PostCard';
import { BlogSidebar } from '../../components/BlogSidebar';

const CategoryPageWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const CategoryHeader = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #111827;
    margin: 0.5rem 0 0.25rem;
  }

  p {
    color: #6b7280;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: #4f46e5;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BlogLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1.5rem;

  p {
    color: #6b7280;
    margin-bottom: 1rem;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  padding: 0.625rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  background: #4f46e5;
  color: white;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #4338ca;
  }
`;

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
    <CategoryPageWrapper>
      <CategoryHeader>
        <BackLink href="/">← All Posts</BackLink>
        <h1>📂 {categoryName}</h1>
        <p>{filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} in this category</p>
      </CategoryHeader>

      <BlogLayout>
        <section>
          {filteredPosts.length > 0 ? (
            <PostsGrid>
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </PostsGrid>
          ) : (
            <EmptyState>
              <p>No articles found in this category.</p>
              <PrimaryButton href="/">View All Posts</PrimaryButton>
            </EmptyState>
          )}
        </section>
        <BlogSidebar />
      </BlogLayout>
    </CategoryPageWrapper>
  );
}
