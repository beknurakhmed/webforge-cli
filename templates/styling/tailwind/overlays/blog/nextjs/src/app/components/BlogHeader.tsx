'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/category/technology', label: 'Technology' },
  { href: '/category/design', label: 'Design' },
  { href: '/about', label: 'About' },
];

export function BlogHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
          <span className="text-lg">📝</span>
          <span>{'{{projectName}}'}</span>
        </Link>
        <nav className="flex gap-4 md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors py-1 border-b-2 ${pathname === item.href ? 'text-indigo-600 border-indigo-600' : 'text-gray-700 border-transparent hover:text-indigo-600'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
