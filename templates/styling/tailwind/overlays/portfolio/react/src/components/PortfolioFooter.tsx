function PortfolioFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-8 text-center mt-auto">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex gap-8 justify-center mb-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 no-underline hover:text-white transition-colors duration-150">GitHub</a>
          <a href="#" className="text-gray-400 no-underline hover:text-white transition-colors duration-150">LinkedIn</a>
          <a href="#" className="text-gray-400 no-underline hover:text-white transition-colors duration-150">Twitter</a>
        </div>
        <p className="text-sm">&copy; 2025 {'{{projectName}}'}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default PortfolioFooter;
