import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import styles from './PostDetail.module.css';

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <div className={styles.postDetail}><p>Post not found.</p><Link to="/">Back to Home</Link></div>;
  }

  return (
    <div className={styles.postDetail}>
      <Link to="/" className={styles.backLink}>Back to Posts</Link>
      <div>
        <span className={styles.postDetailImage}>{post.image}</span>
        <Link to={`/category/${post.category.toLowerCase()}`} className={styles.postCategory}>
          {post.category}
        </Link>
        <h1 className={styles.postDetailTitle}>{post.title}</h1>
        <div className={styles.postMeta}>
          <span>By {post.author}</span>
          <span>{post.date}</span>
          <span>{post.readTime} read</span>
        </div>
      </div>
      <div className={styles.postDetailContent}>
        <p>{post.content}</p>
      </div>
      <div className={styles.authorBio}>
        <h3>About {post.author}</h3>
        <p>A passionate developer writing about web technologies, best practices, and software engineering.</p>
      </div>
    </div>
  );
}

export default PostDetail;
