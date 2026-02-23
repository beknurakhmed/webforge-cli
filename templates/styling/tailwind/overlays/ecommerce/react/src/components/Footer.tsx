export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-4 sm:px-8 mt-auto">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        <div>
          <h3 className="text-white text-xl mb-2">🛍️ {'{{projectName}}'}</h3>
          <p className="text-gray-400">Your one-stop shop for quality products.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-xs uppercase mb-1">Shop</h4>
            <a href="#" className="text-gray-400 no-underline text-sm hover:text-white transition-colors">All Products</a>
            <a href="#" className="text-gray-400 no-underline text-sm hover:text-white transition-colors">New Arrivals</a>
            <a href="#" className="text-gray-400 no-underline text-sm hover:text-white transition-colors">Sale</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-xs uppercase mb-1">Support</h4>
            <a href="#" className="text-gray-400 no-underline text-sm hover:text-white transition-colors">FAQ</a>
            <a href="#" className="text-gray-400 no-underline text-sm hover:text-white transition-colors">Shipping</a>
            <a href="#" className="text-gray-400 no-underline text-sm hover:text-white transition-colors">Returns</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center max-w-[1200px] mx-auto">
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} {'{{projectName}}'}. All rights reserved.</p>
      </div>
    </footer>
  );
}
