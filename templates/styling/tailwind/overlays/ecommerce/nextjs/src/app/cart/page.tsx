'use client';

import Link from 'next/link';
import { useCart } from '../components/CartProvider';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-16 px-6">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Looks like you have not added any items to your cart yet.</p>
        <Link href="/" className="inline-block px-6 py-2.5 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
        <button className="px-6 py-2.5 rounded-lg font-semibold bg-transparent text-gray-700 border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-all cursor-pointer" onClick={clearCart}>Clear Cart</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
              <div className="text-4xl w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg">{item.image}</div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="font-semibold text-indigo-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button className="w-8 h-8 border-none bg-gray-50 cursor-pointer text-base" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span className="w-9 text-center font-semibold">{item.quantity}</span>
                  <button className="w-8 h-8 border-none bg-gray-50 cursor-pointer text-base" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p className="font-bold text-gray-900 min-w-[70px] text-right">${(item.price * item.quantity).toFixed(2)}</p>
                <button className="bg-none border-none cursor-pointer text-lg" onClick={() => removeFromCart(item.id)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm sticky top-20">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
          <div className="flex justify-between py-2 text-gray-700">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 text-gray-700">
            <span>Shipping</span>
            <span>{totalPrice > 50 ? 'Free' : '$9.99'}</span>
          </div>
          <div className="flex justify-between py-2 text-gray-700">
            <span>Tax</span>
            <span>${(totalPrice * 0.08).toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-t-2 border-gray-200 mt-2 pt-4 text-lg font-bold text-gray-900">
            <span>Total</span>
            <span>${(totalPrice + (totalPrice > 50 ? 0 : 9.99) + totalPrice * 0.08).toFixed(2)}</span>
          </div>
          <button className="w-full mt-4 px-8 py-3.5 rounded-lg text-base font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer border-none text-center">Proceed to Checkout</button>
          <Link href="/" className="block text-center mt-4 text-indigo-600 font-medium">← Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}
