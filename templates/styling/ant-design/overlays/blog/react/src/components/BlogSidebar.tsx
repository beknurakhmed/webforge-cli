import { Link } from 'react-router-dom';
import { Card, Tag, Input, Button, Typography, Space } from 'antd';
import { categories } from '../data/posts';

const { Title, Paragraph } = Typography;

function BlogSidebar() {
  return (
    <aside style={{ minWidth: 280 }}>
      <Card title="Categories" style={{ marginBottom: 16 }}>
        <Space wrap>
          {categories.map((cat) => (
            <Link key={cat} to={`/category/${cat.toLowerCase()}`}>
              <Tag color="blue" style={{ cursor: 'pointer', marginBottom: 4 }}>{cat}</Tag>
            </Link>
          ))}
        </Space>
      </Card>
      <Card title="Newsletter">
        <Paragraph type="secondary">Subscribe to get the latest posts delivered to your inbox.</Paragraph>
        <Input placeholder="your@email.com" style={{ marginBottom: 12 }} />
        <Button type="primary" block>Subscribe</Button>
      </Card>
    </aside>
  );
}

export default BlogSidebar;
