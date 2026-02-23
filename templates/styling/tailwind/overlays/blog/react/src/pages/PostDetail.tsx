import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto">
        <p>Post not found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        to="/"
        className="inline-block text-indigo-600 no-underline text-sm mb-6 hover:underline"
      >
        &larr; Back to Posts
      </Link>
      <div>
        <span className="text-6xl block mb-4">{post.image}</span>
        <Link
          to={`/category/${post.category.toLowerCase()}`}
          className="text-xs text-indigo-600 font-semibold uppercase tracking-wide no-underline hover:text-indigo-700"
        >
          {post.category}
        </Link>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
          {post.title}
        </h1>
        <div className="flex gap-4 text-sm text-gray-400">
          <span>By {post.author}</span>
          <span>{post.date}</span>
          <span>{post.readTime} read</span>
        </div>
      </div>
      <div className="text-gray-700 leading-loose text-base mt-8 mb-8">
        <p>{post.content}</p>
      </div>
      <div className="bg-gray-50 rounded-xl p-6 mt-8">
        <h3 className="text-base text-gray-900 mb-2">About {post.author}</h3>
        <p className="text-gray-500 leading-relaxed">
          A passionate developer writing about web technologies, best practices, and software
          engineering.
        </p>
      </div>
    </div>
  );
}

export default PostDetail;
