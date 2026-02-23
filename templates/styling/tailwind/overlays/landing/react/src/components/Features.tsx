const features = [
  {
    icon: '\u26A1',
    title: 'Lightning Fast',
    description: 'Optimized for performance with lazy loading, code splitting, and modern build tools.',
  },
  {
    icon: '\uD83C\uDFA8',
    title: 'Beautiful Design',
    description: 'Clean, modern UI with responsive layouts that look great on any device.',
  },
  {
    icon: '\uD83D\uDD12',
    title: 'Secure by Default',
    description: 'Built with security best practices including HTTPS, CSP headers, and input validation.',
  },
  {
    icon: '\uD83E\uDDE9',
    title: 'Modular Architecture',
    description: 'Component-based structure makes it easy to customize and extend functionality.',
  },
  {
    icon: '\uD83D\uDCF1',
    title: 'Mobile First',
    description: 'Designed for mobile devices first, then scaled up for tablets and desktops.',
  },
  {
    icon: '\uD83D\uDE80',
    title: 'Easy Deployment',
    description: 'Deploy anywhere \u2014 Vercel, Netlify, AWS, or your own server in minutes.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-8 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Features</h2>
      <p className="text-gray-500 text-lg mb-12">Everything you need to build a modern web application</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {features.map((feature, index) => (
          <div key={index} className="p-8 rounded-xl border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-0.5">
            <span className="text-3xl block mb-4">{feature.icon}</span>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
