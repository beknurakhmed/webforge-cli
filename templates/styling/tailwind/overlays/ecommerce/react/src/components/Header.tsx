import { NavLink } from 'react-router-dom';
import { CartItem } from '../data/products';

interface HeaderProps {
  cart: CartItem[];
}

export function Header({ cart }: HeaderProps) {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <NavLink to="/" className="text-2xl font-bold text-indigo-600 no-underline">
          🛍️ {'{{projectName}}'}
        </NavLink>
        <nav className="flex gap-6 items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `no-underline font-medium transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `no-underline font-medium transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'}`
            }
          >
            🛒 Cart
            {cartCount > 0 && (
              <span className="bg-indigo-600 text-white text-[0.7rem] font-bold px-2 py-0.5 rounded-full ml-1.5 align-super">
                {cartCount}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
