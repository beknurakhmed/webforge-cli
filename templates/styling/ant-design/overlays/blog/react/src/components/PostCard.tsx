import { Link } from 'react-router-dom';
import { Card, Tag, Typography, Space } from 'antd';
import type { Post } from '../data/posts';

const { Title, Text, Paragraph } = Typography;

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <Card
      hoverable
      style={{ marginBottom: 16 }}
    >
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
        <div style={{ fontSize: 48, lineHeight: 1 }}>{post.image}</div>
        <div style={{ flex: 1 }}>
          <Link to={`/category/${post.category.toLowerCase()}`}>
            <Tag color="blue">{post.category}</Tag>
          </Link>
          <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
            <Title level={4} style={{ marginTop: 8, marginBottom: 4 }}>{post.title}</Title>
          </Link>
          <Paragraph type="secondary" style={{ marginBottom: 8 }}>{post.excerpt}</Paragraph>
          <Space split={<Text type="secondary">|</Text>}>
            <Text type="secondary">By {post.author}</Text>
            <Text type="secondary">{post.date}</Text>
            <Text type="secondary">{post.readTime} read</Text>
          </Space>
        </div>
      </div>
    </Card>
  );
}

export default PostCard;
