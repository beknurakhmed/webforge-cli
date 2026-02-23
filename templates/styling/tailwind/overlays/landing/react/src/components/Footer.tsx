export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-8">
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-16 flex-wrap">
        <div>
          <h3 className="text-white text-2xl font-bold mb-2">{'{{projectName}}'}</h3>
          <p className="max-w-xs leading-relaxed">Building the future of the web, one project at a time.</p>
        </div>
        <div className="flex gap-16 flex-wrap">
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-sm uppercase tracking-wider mb-2 font-semibold">Product</h4>
            <a href="#features" className="text-gray-400 no-underline text-sm transition-colors hover:text-white">Features</a>
            <a href="#cta" className="text-gray-400 no-underline text-sm transition-colors hover:text-white">Pricing</a>
            <a href="#" className="text-gray-400 no-underline text-sm transition-colors hover:text-white">Documentation</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-sm uppercase tracking-wider mb-2 font-semibold">Company</h4>
            <a href="#" className="text-gray-400 no-underline text-sm transition-colors hover:text-white">About</a>
            <a href="#" className="text-gray-400 no-underline text-sm transition-colors hover:text-white">Blog</a>
            <a href="#contact" className="text-gray-400 no-underline text-sm transition-colors hover:text-white">Contact</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-sm uppercase tracking-wider mb-2 font-semibold">Legal</h4>
            <a href="#" className="text-gray-400 no-underline text-sm transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 no-underline text-sm transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 text-center max-w-6xl mx-auto">
        <p className="text-sm text-gray-500">&copy; 2025 {'{{projectName}}'}. All rights reserved.</p>
      </div>
    </footer>
  );
}
