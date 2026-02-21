import Link from 'next/link';

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
    <Link href={`/post/${post.id}`} className={`post-card ${featured ? 'featured' : ''}`}>
      <div className="post-image">{post.image}</div>
      <div className="post-content">
        <div className="post-meta">
          <Link href={`/category/${post.category.toLowerCase()}`} className="post-category">
            {post.category}
          </Link>
          <span className="post-read-time">{post.readTime}</span>
        </div>
        <h3 className="post-title">{post.title}</h3>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="post-author">
          <span className="author-avatar">{post.authorAvatar}</span>
          <span className="author-name">{post.author}</span>
          <span className="post-date">{post.date}</span>
        </div>
      </div>
    </Link>
  );
}
