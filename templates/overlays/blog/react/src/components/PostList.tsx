import type { Post } from '../App';

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <main className="post-list">
      {posts.map((post) => (
        <article key={post.id} className="post-card">
          <div className="post-image">{post.image}</div>
          <div className="post-content">
            <span className="post-category">{post.category}</span>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-meta">
              <span className="post-author">By {post.author}</span>
              <span className="post-date">{post.date}</span>
              <span className="post-read-time">{post.readTime} read</span>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
}
