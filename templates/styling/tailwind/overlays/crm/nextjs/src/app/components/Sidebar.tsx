'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Dashboard', icon: '📊' },
  { href: '/contacts', label: 'Contacts', icon: '👤' },
  { href: '/deals', label: 'Deals', icon: '💼' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white fixed top-0 left-0 h-screen flex flex-col z-50 max-md:w-[70px] max-md:overflow-hidden">
      <div className="p-6 flex items-center gap-3 border-b border-gray-800 max-md:justify-center">
        <span className="text-2xl">💼</span>
        <span className="text-lg font-bold max-md:hidden">{'{{projectName}}'}</span>
      </div>
      <nav className="flex-1 py-4 px-3 flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 py-3 px-4 rounded-lg font-medium transition-all max-md:justify-center max-md:px-3 ${pathname === item.href ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="max-md:hidden">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-5 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <div className="text-2xl">👤</div>
          <div className="max-md:hidden">
            <p className="text-sm font-semibold text-white">Sales Manager</p>
            <p className="text-xs text-gray-400">Team Lead</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
