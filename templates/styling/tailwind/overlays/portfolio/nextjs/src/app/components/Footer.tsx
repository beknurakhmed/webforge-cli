import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-3">🚀 {'{{projectName}}'}</h3>
            <p className="text-sm leading-relaxed">Building digital experiences that make a difference. Let us create something amazing together.</p>
          </div>
          <div>
            <h4 className="text-white text-base font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1">
              <li className="text-sm"><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-sm"><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li className="text-sm"><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li className="text-sm"><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-base font-semibold mb-3">Connect</h4>
            <div className="flex gap-4 text-xl">
              <span>💼</span>
              <span>🐦</span>
              <span>📂</span>
              <span>📧</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2025 {'{{projectName}}'}. Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
