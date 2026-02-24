'use client';

import Link from 'next/link';
import styled from 'styled-components';

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  authorAvatar: string;
}

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

const Card = styled(Link)<{ $featured: boolean }>`
  display: ${props => props.$featured ? 'grid' : 'block'};
  grid-template-columns: ${props => props.$featured ? '1fr 1fr' : 'none'};
  gap: ${props => props.$featured ? '2rem' : '0'};
  align-items: ${props => props.$featured ? 'center' : 'stretch'};
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PostImage = styled.div<{ $featured: boolean }>`
  height: ${props => props.$featured ? '300px' : '180px'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.$featured ? '6rem' : '3.5rem'};
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);

  @media (max-width: 768px) {
    height: ${props => props.$featured ? '200px' : '180px'};
    font-size: ${props => props.$featured ? '4rem' : '3.5rem'};
  }
`;

const PostContent = styled.div`
  padding: 1.25rem;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

const PostCategory = styled(Link)`
  font-size: 0.75rem;
  font-weight: 600;
  color: #4f46e5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #eef2ff;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  text-decoration: none;
`;

const PostReadTime = styled.span`
  font-size: 0.8rem;
  color: #6b7280;
`;

const PostTitle = styled.h3<{ $featured: boolean }>`
  font-size: ${props => props.$featured ? '1.5rem' : '1.15rem'};
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const PostExcerpt = styled.p`
  font-size: 0.9rem;
  color: #374151;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
`;

const AuthorAvatar = styled.span`
  font-size: 1.2rem;
`;

const AuthorName = styled.span`
  font-weight: 600;
  color: #111827;
`;

const PostDate = styled.span`
  color: #6b7280;
`;

export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <Card href={`/post/${post.id}`} $featured={featured}>
      <PostImage $featured={featured}>{post.image}</PostImage>
      <PostContent>
        <PostMeta>
          <PostCategory href={`/category/${post.category.toLowerCase()}`} onClick={(e) => e.stopPropagation()}>
            {post.category}
          </PostCategory>
          <PostReadTime>{post.readTime}</PostReadTime>
        </PostMeta>
        <PostTitle $featured={featured}>{post.title}</PostTitle>
        <PostExcerpt>{post.excerpt}</PostExcerpt>
        <PostAuthor>
          <AuthorAvatar>{post.authorAvatar}</AuthorAvatar>
          <AuthorName>{post.author}</AuthorName>
          <PostDate>{post.date}</PostDate>
        </PostAuthor>
      </PostContent>
    </Card>
  );
}
