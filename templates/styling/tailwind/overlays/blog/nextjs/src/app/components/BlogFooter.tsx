import Link from 'next/link';

export function BlogFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-bold mb-3">📝 {'{{projectName}}'}</h3>
            <p className="text-sm leading-relaxed">Sharing insights, tutorials, and stories about technology, design, and the web.</p>
          </div>
          <div>
            <h4 className="text-white text-base font-semibold mb-3">Categories</h4>
            <ul className="space-y-1">
              <li className="text-sm"><Link href="/category/technology" className="hover:text-white transition-colors">Technology</Link></li>
              <li className="text-sm"><Link href="/category/design" className="hover:text-white transition-colors">Design</Link></li>
              <li className="text-sm"><Link href="/category/business" className="hover:text-white transition-colors">Business</Link></li>
              <li className="text-sm"><Link href="/category/tutorial" className="hover:text-white transition-colors">Tutorials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-base font-semibold mb-3">Links</h4>
            <ul className="space-y-1">
              <li className="text-sm"><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li className="text-sm"><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-sm cursor-pointer hover:text-white transition-colors">RSS Feed</li>
              <li className="text-sm cursor-pointer hover:text-white transition-colors">Sitemap</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-base font-semibold mb-3">Connect</h4>
            <div className="flex gap-4 text-xl">
              <span>🐦</span>
              <span>📘</span>
              <span>💼</span>
              <span>📷</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2025 {'{{projectName}}'}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
