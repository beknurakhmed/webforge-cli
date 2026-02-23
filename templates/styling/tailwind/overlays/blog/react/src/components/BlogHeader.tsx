import { NavLink } from 'react-router-dom';

function BlogHeader() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <NavLink to="/" className="text-2xl font-bold text-gray-900 no-underline">
          {'{{projectName}}'}
        </NavLink>
        <nav className="flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `no-underline font-medium transition-colors duration-150 ${
                isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `no-underline font-medium transition-colors duration-150 ${
                isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'
              }`
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default BlogHeader;
