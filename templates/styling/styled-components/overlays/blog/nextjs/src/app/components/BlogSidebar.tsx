'use client';

import Link from 'next/link';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  position: sticky;
  top: 80px;
`;

const SidebarWidget = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  margin-bottom: 1.25rem;

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
  }
`;

const CategoryList = styled.ul`
  list-style: none;
`;

const CategoryItem = styled.li`
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;

const CategoryLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0;
  font-size: 0.9rem;
  color: #374151;
  transition: color 0.2s;
  text-decoration: none;

  &:hover {
    color: #4f46e5;
  }
`;

const CategoryCount = styled.span`
  background: #f9fafb;
  padding: 0.1rem 0.5rem;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
`;

const PopularList = styled.ul`
  list-style: none;
`;

const PopularLink = styled(Link)`
  display: block;
  padding: 0.6rem 0;
  border-bottom: 1px solid #e5e7eb;
  text-decoration: none;

  &:last-child {
    border-bottom: none;
  }
`;

const PopularTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #111827;
  display: block;
`;

const PopularDate = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
`;

const NewsletterText = styled.p`
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
`;

const NewsletterInput = styled.input`
  width: 100%;
  padding: 0.625rem 0.875rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }
`;

const SubscribeButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.625rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-size: 0.9rem;
  background: #4f46e5;
  color: white;
  text-align: center;
  transition: background 0.2s;

  &:hover {
    background: #4338ca;
  }
`;

const categories = [
  { name: 'Technology', slug: 'technology', count: 12 },
  { name: 'Design', slug: 'design', count: 8 },
  { name: 'Business', slug: 'business', count: 6 },
  { name: 'Lifestyle', slug: 'lifestyle', count: 5 },
  { name: 'Tutorial', slug: 'tutorial', count: 9 },
];

const popularPosts = [
  { id: 1, title: 'Getting Started with Next.js 15', date: 'Jan 15, 2025' },
  { id: 3, title: 'Design Systems That Scale', date: 'Jan 10, 2025' },
  { id: 5, title: 'The Future of Web Development', date: 'Jan 3, 2025' },
];

export function BlogSidebar() {
  return (
    <SidebarWrapper>
      <SidebarWidget>
        <h3>📂 Categories</h3>
        <CategoryList>
          {categories.map((cat) => (
            <CategoryItem key={cat.slug}>
              <CategoryLink href={`/category/${cat.slug}`}>
                <span>{cat.name}</span>
                <CategoryCount>{cat.count}</CategoryCount>
              </CategoryLink>
            </CategoryItem>
          ))}
        </CategoryList>
      </SidebarWidget>

      <SidebarWidget>
        <h3>🔥 Popular Posts</h3>
        <PopularList>
          {popularPosts.map((post) => (
            <li key={post.id}>
              <PopularLink href={`/post/${post.id}`}>
                <PopularTitle>{post.title}</PopularTitle>
                <PopularDate>{post.date}</PopularDate>
              </PopularLink>
            </li>
          ))}
        </PopularList>
      </SidebarWidget>

      <SidebarWidget>
        <h3>📬 Newsletter</h3>
        <NewsletterText>Get the latest posts delivered to your inbox.</NewsletterText>
        <NewsletterInput type="email" placeholder="your@email.com" />
        <SubscribeButton>Subscribe</SubscribeButton>
      </SidebarWidget>
    </SidebarWrapper>
  );
}
