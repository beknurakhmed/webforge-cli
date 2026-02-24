import Link from 'next/link';
import styles from './PostCard.module.css';

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
    <Link href={`/post/${post.id}`} className={featured ? styles.featured : styles.postCard}>
      <div className={styles.postImage}>{post.image}</div>
      <div className={styles.postContent}>
        <div className={styles.postMeta}>
          <Link href={`/category/${post.category.toLowerCase()}`} className={styles.postCategory}>
            {post.category}
          </Link>
          <span className={styles.postReadTime}>{post.readTime}</span>
        </div>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <p className={styles.postExcerpt}>{post.excerpt}</p>
        <div className={styles.postAuthor}>
          <span className={styles.authorAvatar}>{post.authorAvatar}</span>
          <span className={styles.authorName}>{post.author}</span>
          <span className={styles.postDate}>{post.date}</span>
        </div>
      </div>
    </Link>
  );
}
