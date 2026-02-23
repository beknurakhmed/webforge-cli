function Contact() {
  return (
    <div className="max-w-[900px] mx-auto py-16 px-8">
      <h2 className="text-center text-3xl font-bold mb-2 text-gray-900">Get In Touch</h2>
      <p className="text-gray-500 text-center mb-12">Have a project in mind? Let's work together.</p>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 mt-4">
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</label>
              <input type="text" id="name" placeholder="Your name" className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm font-[inherit] focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/15" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
              <input type="email" id="email" placeholder="your@email.com" className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm font-[inherit] focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/15" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
            <input type="text" id="subject" placeholder="Project inquiry" className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm font-[inherit] focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/15" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
            <textarea id="message" rows={5} placeholder="Tell me about your project..." className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm font-[inherit] resize-y focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/15" />
          </div>
          <button type="submit" className="inline-block px-6 py-3 rounded-lg text-base font-semibold no-underline cursor-pointer transition-all duration-200 bg-indigo-600 text-white border-2 border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700">Send Message</button>
        </form>
        <div className="pt-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Info</h3>
          <div className="flex gap-3 items-center mb-5">
            <span className="text-xl">&#x1F4E7;</span>
            <p className="text-gray-700 m-0">hello@developer.com</p>
          </div>
          <div className="flex gap-3 items-center mb-5">
            <span className="text-xl">&#x1F4CD;</span>
            <p className="text-gray-700 m-0">San Francisco, CA</p>
          </div>
          <div className="flex gap-3 items-center mb-5">
            <span className="text-xl">&#x1F517;</span>
            <p className="text-gray-700 m-0">github.com/developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
