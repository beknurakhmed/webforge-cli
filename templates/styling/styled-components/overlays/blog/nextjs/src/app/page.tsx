'use client';

import styled from 'styled-components';
import { PostCard, Post } from './components/PostCard';
import { BlogSidebar } from './components/BlogSidebar';

const BlogHome = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const FeaturedSection = styled.section`
  margin-bottom: 2.5rem;
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

const SectionTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.25rem;
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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

export default function BlogHomePage() {
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <BlogHome>
      <FeaturedSection>
        <PostCard post={featuredPost} featured />
      </FeaturedSection>

      <BlogLayout>
        <section>
          <SectionTitle>Latest Articles</SectionTitle>
          <PostsGrid>
            {remainingPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </PostsGrid>
        </section>
        <BlogSidebar />
      </BlogLayout>
    </BlogHome>
  );
}
