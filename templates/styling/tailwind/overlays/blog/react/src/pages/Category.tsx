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
    <div className="max-w-3xl mx-auto">
      <Link
        to="/"
        className="inline-block text-indigo-600 no-underline text-sm mb-6 hover:underline"
      >
        &larr; Back to Home
      </Link>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Category: {categoryName}
      </h1>
      {filtered.length === 0 ? (
        <p className="text-gray-500">No posts found in this category.</p>
      ) : (
        <div className="flex flex-col">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
