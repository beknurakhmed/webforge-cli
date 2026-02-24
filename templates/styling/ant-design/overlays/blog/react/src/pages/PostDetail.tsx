import { useParams, Link } from 'react-router-dom';
import { Typography, Tag, Card, Divider, Button, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { posts } from '../data/posts';

const { Title, Text, Paragraph } = Typography;

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: 64 }}>
        <Paragraph>Post not found.</Paragraph>
        <Link to="/"><Button type="primary">Back to Home</Button></Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, color: '#4f46e5' }}>
        <ArrowLeftOutlined /> Back to Posts
      </Link>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <span style={{ fontSize: 64 }}>{post.image}</span>
        <div style={{ marginTop: 16 }}>
          <Link to={`/category/${post.category.toLowerCase()}`}>
            <Tag color="blue">{post.category}</Tag>
          </Link>
        </div>
        <Title level={1} style={{ marginTop: 16 }}>{post.title}</Title>
        <Space split={<Text type="secondary">|</Text>}>
          <Text type="secondary">By {post.author}</Text>
          <Text type="secondary">{post.date}</Text>
          <Text type="secondary">{post.readTime} read</Text>
        </Space>
      </div>
      <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>{post.content}</Paragraph>
      <Divider />
      <Card>
        <Title level={4}>About {post.author}</Title>
        <Paragraph type="secondary">
          A passionate developer writing about web technologies, best practices, and software engineering.
        </Paragraph>
      </Card>
    </div>
  );
}

export default PostDetail;
