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
    <Link href={`/post/${post.id}`} className={`block bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg ${featured ? 'grid md:grid-cols-2 gap-8 items-center' : ''}`}>
      <div className={`flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 ${featured ? 'h-48 md:h-72 text-4xl md:text-6xl' : 'h-44 text-4xl'}`}>{post.image}</div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-2">
          <Link href={`/category/${post.category.toLowerCase()}`} className="text-xs font-semibold text-indigo-600 uppercase tracking-wide bg-indigo-50 px-2.5 py-0.5 rounded">
            {post.category}
          </Link>
          <span className="text-xs text-gray-500">{post.readTime}</span>
        </div>
        <h3 className={`font-bold text-gray-900 mb-2 leading-snug ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>{post.title}</h3>
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-lg">{post.authorAvatar}</span>
          <span className="font-semibold text-gray-900">{post.author}</span>
          <span className="text-gray-500">{post.date}</span>
        </div>
      </div>
    </Link>
  );
}
