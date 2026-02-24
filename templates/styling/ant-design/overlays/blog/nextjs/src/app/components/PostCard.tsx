'use client';

import Link from 'next/link';
import { Card, Tag, Typography, Space, Avatar } from 'antd';

const { Title, Text, Paragraph } = Typography;

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

export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <Link href={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
      <Card hoverable style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', gap: 24, alignItems: featured ? 'center' : 'flex-start', flexDirection: featured ? 'row' : 'row' }}>
          <div style={{ fontSize: featured ? 80 : 48, lineHeight: 1 }}>{post.image}</div>
          <div style={{ flex: 1 }}>
            <Space>
              <Tag color="blue">{post.category}</Tag>
              <Text type="secondary">{post.readTime}</Text>
            </Space>
            <Title level={featured ? 3 : 4} style={{ marginTop: 8, marginBottom: 4 }}>{post.title}</Title>
            <Paragraph type="secondary" style={{ marginBottom: 8 }}>{post.excerpt}</Paragraph>
            <Space>
              <Avatar size="small">{post.authorAvatar}</Avatar>
              <Text>{post.author}</Text>
              <Text type="secondary">{post.date}</Text>
            </Space>
          </div>
        </div>
      </Card>
    </Link>
  );
}
