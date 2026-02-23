import { Link } from 'react-router-dom';
import { categories } from '../data/posts';

function BlogSidebar() {
  return (
    <aside className="flex flex-col gap-8">
      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-base font-semibold mb-3 text-gray-900">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat.toLowerCase()}`}
              className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 no-underline transition-all duration-150 hover:border-indigo-600 hover:text-indigo-600"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-base font-semibold mb-3 text-gray-900">Newsletter</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-3">
          Subscribe to get the latest posts delivered to your inbox.
        </p>
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mb-2 box-border"
        />
        <button className="w-full bg-indigo-600 text-white border-none py-2 rounded-md cursor-pointer font-semibold hover:bg-indigo-700 transition-colors duration-150">
          Subscribe
        </button>
      </div>
    </aside>
  );
}

export default BlogSidebar;
