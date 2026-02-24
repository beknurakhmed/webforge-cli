'use client';

import Link from 'next/link';
import { Card, Tag, Typography, Space, Input, Button, Badge } from 'antd';

const { Title, Text, Paragraph } = Typography;

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
    <aside style={{ minWidth: 280 }}>
      <Card title="Categories" style={{ marginBottom: 16 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/category/${cat.slug}`} style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none', color: 'inherit' }}>
              <Text>{cat.name}</Text>
              <Badge count={cat.count} style={{ backgroundColor: '#4f46e5' }} />
            </Link>
          ))}
        </Space>
      </Card>
      <Card title="Popular Posts" style={{ marginBottom: 16 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
              <Text strong style={{ display: 'block' }}>{post.title}</Text>
              <Text type="secondary" style={{ fontSize: 12 }}>{post.date}</Text>
            </Link>
          ))}
        </Space>
      </Card>
      <Card title="Newsletter">
        <Paragraph type="secondary">Get the latest posts delivered to your inbox.</Paragraph>
        <Input placeholder="your@email.com" style={{ marginBottom: 12 }} />
        <Button type="primary" block>Subscribe</Button>
      </Card>
    </aside>
  );
}
