export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-8">
      <div className="flex flex-wrap justify-between max-w-7xl mx-auto gap-16">
        <div>
          <h3 className="text-white text-2xl font-bold mb-2">{'{{projectName}}'}</h3>
          <p>Building the future of the web.</p>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-sm uppercase mb-2 font-semibold">Product</h4>
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#cta" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-sm uppercase mb-2 font-semibold">Company</h4>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-sm text-gray-500">&copy; 2025 {'{{projectName}}'}. All rights reserved.</p>
      </div>
    </footer>
  );
}
