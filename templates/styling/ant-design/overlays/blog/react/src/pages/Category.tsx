import { useParams, Link } from 'react-router-dom';
import { Typography, Button, Empty } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

const { Title } = Typography;

function Category() {
  const { slug } = useParams();
  const filtered = posts.filter(
    (p) => p.category.toLowerCase() === slug?.toLowerCase()
  );
  const categoryName = filtered.length > 0 ? filtered[0].category : slug;

  return (
    <div>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, color: '#4f46e5' }}>
        <ArrowLeftOutlined /> Back to Home
      </Link>
      <Title level={2}>Category: {categoryName}</Title>
      {filtered.length === 0 ? (
        <Empty description="No posts found in this category." />
      ) : (
        filtered.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      )}
    </div>
  );
}

export default Category;
