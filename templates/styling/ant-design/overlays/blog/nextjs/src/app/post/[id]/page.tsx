'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Typography, Tag, Card, Divider, Button, Space, Avatar } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const posts = [
  { id: 1, title: 'Getting Started with Next.js 15', excerpt: 'Learn the fundamentals of Next.js 15 App Router.', content: 'Next.js 15 introduces groundbreaking features for building modern web applications. The App Router brings server components, streaming, and file-based routing to a whole new level. In this guide, we explore all the new features and how to leverage them effectively in your projects.', author: 'Alex Rivera', date: 'Jan 15, 2025', category: 'Technology', readTime: '8 min read', image: '⚛️', authorAvatar: '👨‍💻' },
  { id: 2, title: 'Building Better User Interfaces', excerpt: 'Explore modern UI patterns and best practices.', content: 'Creating intuitive user interfaces requires understanding user psychology, accessibility standards, and modern design patterns. This article covers the principles that make interfaces feel natural and the tools that help implement them efficiently.', author: 'Priya Sharma', date: 'Jan 12, 2025', category: 'Design', readTime: '6 min read', image: '🎨', authorAvatar: '👩‍🎨' },
  { id: 3, title: 'Design Systems That Scale', excerpt: 'How to build and maintain design systems.', content: 'A well-architected design system is the foundation of consistent user experiences across products. Learn how leading companies build, document, and maintain design systems that scale with their organizations while keeping development velocity high.', author: 'Marcus Chen', date: 'Jan 10, 2025', category: 'Design', readTime: '10 min read', image: '📐', authorAvatar: '👨' },
];

export default function PostDetailPage() {
  const params = useParams();
  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: 64 }}>
        <Title level={3}>Post not found</Title>
        <Link href="/"><Button type="primary">Back to Home</Button></Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, color: '#4f46e5' }}>
        <ArrowLeftOutlined /> Back to Posts
      </Link>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <span style={{ fontSize: 64 }}>{post.image}</span>
        <div style={{ marginTop: 16 }}><Tag color="blue">{post.category}</Tag></div>
        <Title level={1} style={{ marginTop: 16 }}>{post.title}</Title>
        <Space>
          <Avatar>{post.authorAvatar}</Avatar>
          <Text>{post.author}</Text>
          <Text type="secondary">{post.date}</Text>
          <Text type="secondary">{post.readTime}</Text>
        </Space>
      </div>
      <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>{post.content}</Paragraph>
      <Divider />
      <Card>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Avatar size={48}>{post.authorAvatar}</Avatar>
          <div>
            <Title level={4} style={{ margin: 0 }}>About {post.author}</Title>
            <Text type="secondary">A passionate writer sharing insights about technology and design.</Text>
          </div>
        </div>
      </Card>
    </div>
  );
}
