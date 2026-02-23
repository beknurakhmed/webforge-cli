export function CTA() {
  return (
    <section id="cta" className="bg-gray-50 py-20 px-8 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
        <p className="text-gray-500 text-lg mb-8">Join thousands of developers who are building amazing products.</p>
        <div>
          <button className="px-10 py-4 rounded-lg text-lg font-semibold cursor-pointer transition-all border-2 border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 hover:border-indigo-700">Start Free Trial</button>
          <p className="mt-3 text-sm text-gray-400">No credit card required</p>
        </div>
      </div>
    </section>
  );
}
