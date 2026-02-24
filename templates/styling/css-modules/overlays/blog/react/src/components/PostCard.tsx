import { Link } from 'react-router-dom';
import type { Post } from '../data/posts';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className={styles.postCard}>
      <div className={styles.postImage}>{post.image}</div>
      <div className={styles.postBody}>
        <Link to={`/category/${post.category.toLowerCase()}`} className={styles.postCategory}>
          {post.category}
        </Link>
        <Link to={`/post/${post.id}`} className={styles.postTitleLink}>
          <h2 className={styles.postTitle}>{post.title}</h2>
        </Link>
        <p className={styles.postExcerpt}>{post.excerpt}</p>
        <div className={styles.postMeta}>
          <span>By {post.author}</span>
          <span>{post.date}</span>
          <span>{post.readTime} read</span>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
