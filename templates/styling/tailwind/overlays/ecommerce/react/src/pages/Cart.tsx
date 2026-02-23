import { Link } from 'react-router-dom';
import { CartItem } from '../data/products';

interface CartProps {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
}

export function Cart({ cart, removeFromCart }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h2>
        <div className="text-center py-12 text-gray-500">
          <p className="text-xl mb-4">🛒 Your cart is empty</p>
          <Link to="/" className="text-indigo-600 no-underline font-medium hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Shopping Cart ({cart.length} items)
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        <div className="flex flex-col">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 py-5 border-b border-gray-200">
              <span className="text-4xl">{item.image}</span>
              <div className="flex-1">
                <Link to={`/product/${item.id}`} className="no-underline text-inherit">
                  <h4 className="m-0 text-base text-gray-900">{item.name}</h4>
                </Link>
                <p className="text-gray-500 text-sm mt-1 mb-0">Qty: {item.quantity}</p>
              </div>
              <span className="font-bold text-gray-900 min-w-[70px] text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                className="bg-transparent border-none text-red-500 cursor-pointer text-sm font-medium hover:underline"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-fit">
          <h3 className="text-lg text-gray-900 mb-4">Order Summary</h3>
          <div className="flex justify-between py-2 text-gray-700">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 text-gray-700">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between py-2 text-gray-700 border-t border-gray-200 mt-2 pt-4 text-lg">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <button className="w-full bg-indigo-600 text-white border-none py-3 rounded-lg text-base font-semibold cursor-pointer mt-4 hover:bg-indigo-700 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
