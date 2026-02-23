const features = [
  { icon: '⚡', title: 'Lightning Fast', description: 'Optimized for performance with lazy loading and code splitting.' },
  { icon: '🎨', title: 'Beautiful Design', description: 'Clean, modern UI with responsive layouts.' },
  { icon: '🔒', title: 'Secure by Default', description: 'Built with security best practices.' },
  { icon: '🧩', title: 'Modular Architecture', description: 'Component-based structure for easy customization.' },
  { icon: '📱', title: 'Mobile First', description: 'Designed for mobile, scaled up for desktop.' },
  { icon: '🚀', title: 'Easy Deployment', description: 'Deploy anywhere in minutes.' },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">Features</h2>
      <p className="text-gray-500 mb-12">Everything you need to build a modern web application</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-xl border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-0.5">
            <span className="text-3xl block mb-4">{f.icon}</span>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{f.title}</h3>
            <p className="text-gray-500 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
