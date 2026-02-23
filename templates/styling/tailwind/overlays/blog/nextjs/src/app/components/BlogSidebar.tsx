import Link from 'next/link';

const categories = [
  { name: 'Technology', slug: 'technology', count: 12 },
  { name: 'Design', slug: 'design', count: 8 },
  { name: 'Business', slug: 'business', count: 6 },
  { name: 'Lifestyle', slug: 'lifestyle', count: 5 },
  { name: 'Tutorial', slug: 'tutorial', count: 9 },
];

const popularPosts = [
  { id: 1, title: 'Getting Started with Next.js 15', date: 'Jan 15, 2025' },
  { id: 3, title: 'Design Systems That Scale', date: 'Jan 10, 2025' },
  { id: 5, title: 'The Future of Web Development', date: 'Jan 3, 2025' },
];

export function BlogSidebar() {
  return (
    <aside className="sticky top-20">
      <div className="bg-white rounded-xl p-5 shadow-sm mb-5">
        <h3 className="text-base font-bold text-gray-900 mb-4">📂 Categories</h3>
        <ul>
          {categories.map((cat) => (
            <li key={cat.slug} className="border-b border-gray-200 last:border-b-0">
              <Link href={`/category/${cat.slug}`} className="flex justify-between py-2.5 text-sm text-gray-700 hover:text-indigo-600 transition-colors">
                <span>{cat.name}</span>
                <span className="bg-gray-50 px-2 py-0.5 rounded-full text-xs font-semibold text-gray-500">{cat.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-xl p-5 shadow-sm mb-5">
        <h3 className="text-base font-bold text-gray-900 mb-4">🔥 Popular Posts</h3>
        <ul>
          {popularPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/post/${post.id}`} className="block py-2.5 border-b border-gray-200 last:border-b-0">
                <span className="text-sm font-semibold text-gray-900 block">{post.title}</span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-xl p-5 shadow-sm">
        <h3 className="text-base font-bold text-gray-900 mb-4">📬 Newsletter</h3>
        <p className="text-sm text-gray-500 mb-3">Get the latest posts delivered to your inbox.</p>
        <input type="email" placeholder="your@email.com" className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm mb-3 focus:outline-none focus:border-indigo-600" />
        <button className="w-full px-6 py-2.5 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer border-none text-sm text-center">Subscribe</button>
      </div>
    </aside>
  );
}
