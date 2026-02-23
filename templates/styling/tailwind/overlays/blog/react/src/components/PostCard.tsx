import { Link } from 'react-router-dom';
import type { Post } from '../data/posts';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex flex-col sm:flex-row gap-6 py-6 border-b border-gray-100">
      <div className="text-5xl w-20 text-center shrink-0">{post.image}</div>
      <div className="flex-1">
        <Link
          to={`/category/${post.category.toLowerCase()}`}
          className="text-xs text-indigo-600 font-semibold uppercase tracking-wide no-underline hover:text-indigo-700"
        >
          {post.category}
        </Link>
        <Link to={`/post/${post.id}`} className="no-underline group">
          <h2 className="text-xl font-bold text-gray-900 mt-1 mb-2 group-hover:text-indigo-600">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-500 leading-relaxed mb-3">{post.excerpt}</p>
        <div className="flex gap-4 text-sm text-gray-400">
          <span>By {post.author}</span>
          <span>{post.date}</span>
          <span>{post.readTime} read</span>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
