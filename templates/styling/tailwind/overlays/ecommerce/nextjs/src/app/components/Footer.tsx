export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-bold mb-3">🛍️ {'{{projectName}}'}</h3>
            <p className="text-sm leading-relaxed">Your one-stop shop for quality products at great prices.</p>
          </div>
          <div>
            <h4 className="text-white text-base font-semibold mb-3">Shop</h4>
            <ul className="space-y-1">
              <li className="text-sm cursor-pointer hover:text-white transition-colors">New Arrivals</li>
              <li className="text-sm cursor-pointer hover:text-white transition-colors">Best Sellers</li>
              <li className="text-sm cursor-pointer hover:text-white transition-colors">Sale Items</li>
              <li className="text-sm cursor-pointer hover:text-white transition-colors">Gift Cards</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-base font-semibold mb-3">Support</h4>
            <ul className="space-y-1">
              <li className="text-sm cursor-pointer hover:text-white transition-colors">Help Center</li>
              <li className="text-sm cursor-pointer hover:text-white transition-colors">Shipping Info</li>
              <li className="text-sm cursor-pointer hover:text-white transition-colors">Returns</li>
              <li className="text-sm cursor-pointer hover:text-white transition-colors">Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-base font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4 text-2xl">
              <span>📘</span>
              <span>🐦</span>
              <span>📷</span>
              <span>📌</span>
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
