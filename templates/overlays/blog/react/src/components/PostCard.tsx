import { Link } from 'react-router-dom';
import type { Post } from '../data/posts';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <div className="post-image">{post.image}</div>
      <div className="post-body">
        <Link to={`/category/${post.category.toLowerCase()}`} className="post-category">
          {post.category}
        </Link>
        <Link to={`/post/${post.id}`} className="post-title-link">
          <h2 className="post-title">{post.title}</h2>
        </Link>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="post-meta">
          <span>By {post.author}</span>
          <span>{post.date}</span>
          <span>{post.readTime} read</span>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
