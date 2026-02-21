import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <div className="post-detail"><p>Post not found.</p><Link to="/">Back to Home</Link></div>;
  }

  return (
    <div className="post-detail">
      <Link to="/" className="back-link">← Back to Posts</Link>
      <div className="post-detail-header">
        <span className="post-detail-image">{post.image}</span>
        <Link to={`/category/${post.category.toLowerCase()}`} className="post-category">
          {post.category}
        </Link>
        <h1 className="post-detail-title">{post.title}</h1>
        <div className="post-meta">
          <span>By {post.author}</span>
          <span>{post.date}</span>
          <span>{post.readTime} read</span>
        </div>
      </div>
      <div className="post-detail-content">
        <p>{post.content}</p>
      </div>
      <div className="author-bio">
        <h3>About {post.author}</h3>
        <p>A passionate developer writing about web technologies, best practices, and software engineering.</p>
      </div>
    </div>
  );
}

export default PostDetail;
