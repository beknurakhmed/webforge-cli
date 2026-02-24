'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';
import { BlogSidebar } from '../../components/BlogSidebar';

const PostDetailPage = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
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

const PostArticle = styled.article`
  max-width: 100%;
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: #4f46e5;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PostDetailHeader = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: #111827;
    margin: 0.75rem 0;
    line-height: 1.3;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
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

const PostDetailMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
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
  font-size: 0.85rem;
`;

const PostReadTime = styled.span`
  font-size: 0.8rem;
  color: #6b7280;
`;

const PostHeroImage = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  border-radius: 12px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    height: 200px;
    font-size: 4rem;
  }
`;

const PostBody = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;

  p {
    margin-bottom: 1.25rem;
  }
`;

const PostTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

const Tag = styled.span`
  background: #eef2ff;
  color: #4f46e5;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const NotFound = styled.div`
  text-align: center;
  padding: 3rem 1.5rem;

  h2 {
    color: #111827;
    margin-bottom: 0.5rem;
  }

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

interface Post {
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

const posts: Post[] = [
  { id: 1, title: 'Getting Started with Next.js 15', excerpt: 'Learn the fundamentals of Next.js 15 App Router.', content: 'Next.js 15 introduces powerful features that make building web applications easier than ever. The App Router provides a new way to structure your application with file-based routing, server components, and streaming.\n\nThe App Router uses a file-system based approach where folders define routes. Each folder represents a route segment that maps to a URL segment. Special files like page.tsx, layout.tsx, and loading.tsx provide the UI for each route.\n\nServer Components are the default in the App Router. They allow you to render components on the server, reducing the JavaScript bundle sent to the client. This results in faster page loads and better performance.\n\nFile-based routing is intuitive and powerful. Simply create a page.tsx file in a folder, and it becomes a route. Dynamic routes use bracket notation like [id], and you can nest routes by nesting folders.\n\nStreaming allows you to progressively render UI from the server. Work is split into chunks and streamed to the client as it becomes ready. This means users can see parts of the page before the entire content has finished loading.', author: 'Alex Rivera', date: 'Jan 15, 2025', category: 'Technology', readTime: '8 min read', image: '⚛️', authorAvatar: '👨‍💻' },
  { id: 2, title: 'Building Better User Interfaces', excerpt: 'Explore modern UI patterns and best practices.', content: 'Creating great user interfaces is both an art and a science. It requires understanding user psychology, visual design principles, and modern web technologies.\n\nStart with user research to understand who your users are and what they need. Create personas and user journeys to guide your design decisions. Every interface element should serve a purpose.\n\nConsistency is key to a good UI. Use a design system with defined colors, typography, spacing, and components. This ensures a cohesive experience across your entire application.\n\nAccessibility should be built in from the start, not added as an afterthought. Use semantic HTML, provide alt text for images, ensure sufficient color contrast, and make sure all interactive elements are keyboard accessible.\n\nPerformance directly impacts user experience. Optimize images, minimize JavaScript, and use loading states to keep users informed. A fast interface feels more responsive and professional.', author: 'Priya Sharma', date: 'Jan 12, 2025', category: 'Design', readTime: '6 min read', image: '🎨', authorAvatar: '👩‍🎨' },
  { id: 3, title: 'Design Systems That Scale', excerpt: 'Build and maintain design systems that grow.', content: 'A design system is more than a component library. It is a complete set of standards, documentation, and tools that help teams build consistent digital products.\n\nStart small and grow organically. Do not try to design every component upfront. Begin with the most commonly used elements: buttons, inputs, typography, and spacing. Add new components as needs arise.\n\nDocumentation is crucial. Each component should have clear usage guidelines, code examples, and accessibility notes. Good documentation reduces questions and ensures proper usage.\n\nVersion your design system carefully. Use semantic versioning so consumers know what to expect with each update. Provide migration guides for breaking changes.\n\nMeasure adoption and gather feedback. Track which components are most used, identify pain points, and continuously improve based on real-world usage data.', author: 'Marcus Chen', date: 'Jan 10, 2025', category: 'Design', readTime: '10 min read', image: '📐', authorAvatar: '👨' },
  { id: 4, title: 'TypeScript Tips and Tricks', excerpt: 'Advanced TypeScript patterns for better code.', content: 'TypeScript adds static typing to JavaScript, catching errors at compile time and improving developer experience. Here are some advanced patterns to level up your TypeScript code.\n\nUtility types like Partial, Required, Pick, and Omit let you transform existing types without repeating yourself. They are essential for creating flexible, reusable type definitions.\n\nConditional types allow you to create types that depend on conditions. Combined with generics, they enable powerful type-level programming that can express complex relationships.\n\nTemplate literal types let you create string types from patterns. They are perfect for defining valid CSS values, API endpoints, or any structured string format.\n\nThe satisfies operator, introduced in TypeScript 4.9, lets you validate that an expression matches a type without changing the inferred type. This is useful for catching errors while preserving narrow types.', author: 'Sofia Andersen', date: 'Jan 8, 2025', category: 'Technology', readTime: '7 min read', image: '📘', authorAvatar: '👩' },
  { id: 5, title: 'The Future of Web Development', excerpt: 'Emerging trends and technologies shaping the web.', content: 'The web is constantly evolving, and staying ahead of trends is crucial for developers. Here is a look at what is shaping the future of web development.\n\nEdge computing is bringing server-side logic closer to users. Frameworks like Next.js and platforms like Vercel and Cloudflare Workers enable code to run at the edge, reducing latency and improving performance.\n\nAI-powered development tools are changing how we write code. From code completion to automated testing, AI assistants are becoming integral to the development workflow.\n\nWeb Components are gaining traction as a framework-agnostic way to build reusable UI components. They work everywhere HTML works and can be used alongside any framework.\n\nWebAssembly continues to expand the capabilities of the web. Languages like Rust and Go can now run in the browser at near-native speed, enabling complex applications that were previously desktop-only.', author: 'Alex Rivera', date: 'Jan 3, 2025', category: 'Technology', readTime: '12 min read', image: '🌐', authorAvatar: '👨‍💻' },
  { id: 6, title: 'Mastering CSS Grid Layout', excerpt: 'A deep dive into CSS Grid with practical examples.', content: 'CSS Grid is one of the most powerful layout systems available in CSS. It allows you to create complex, responsive layouts with clean, readable code.\n\nGrid works in two dimensions: rows and columns. Unlike Flexbox which is one-dimensional, Grid lets you control both axes simultaneously. This makes it perfect for page-level layouts.\n\nThe fr unit is unique to Grid and represents a fraction of available space. It is more flexible than percentages because it accounts for gaps and fixed-size tracks automatically.\n\nGrid areas let you name regions of your layout and place items into them by name. This makes your CSS more readable and easier to maintain, especially for complex layouts.\n\nThe minmax function combined with auto-fill or auto-fit creates responsive grids without media queries. The grid automatically adjusts the number of columns based on available space.', author: 'Priya Sharma', date: 'Dec 28, 2024', category: 'Tutorial', readTime: '9 min read', image: '📏', authorAvatar: '👩‍🎨' },
];

export default function PostDetail() {
  const params = useParams();
  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) {
    return (
      <NotFound>
        <h2>Post Not Found</h2>
        <p>The article you are looking for does not exist.</p>
        <PrimaryButton href="/">Back to Blog</PrimaryButton>
      </NotFound>
    );
  }

  return (
    <PostDetailPage>
      <BlogLayout>
        <PostArticle>
          <BackLink href="/">← Back to Blog</BackLink>
          <PostDetailHeader>
            <PostCategory href={`/category/${post.category.toLowerCase()}`}>
              {post.category}
            </PostCategory>
            <h1>{post.title}</h1>
            <PostDetailMeta>
              <PostAuthor>
                <AuthorAvatar>{post.authorAvatar}</AuthorAvatar>
                <AuthorName>{post.author}</AuthorName>
              </PostAuthor>
              <PostDate>{post.date}</PostDate>
              <PostReadTime>{post.readTime}</PostReadTime>
            </PostDetailMeta>
          </PostDetailHeader>
          <PostHeroImage>{post.image}</PostHeroImage>
          <PostBody>
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </PostBody>
          <PostTags>
            <Tag>#{post.category.toLowerCase()}</Tag>
            <Tag>#webdev</Tag>
            <Tag>#programming</Tag>
          </PostTags>
        </PostArticle>
        <BlogSidebar />
      </BlogLayout>
    </PostDetailPage>
  );
}
