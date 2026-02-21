import { useParams, Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

function Category() {
  const { slug } = useParams();
  const filtered = posts.filter(
    (p) => p.category.toLowerCase() === slug?.toLowerCase()
  );
  const categoryName = filtered.length > 0 ? filtered[0].category : slug;

  return (
    <div className="category-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <h1 className="category-heading">Category: {categoryName}</h1>
      {filtered.length === 0 ? (
        <p className="no-posts">No posts found in this category.</p>
      ) : (
        <div className="post-list">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
