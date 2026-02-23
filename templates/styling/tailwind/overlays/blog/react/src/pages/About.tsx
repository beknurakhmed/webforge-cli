function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4">About This Blog</h1>
      <p className="text-gray-700 leading-relaxed text-base mb-8">
        A blog dedicated to modern web development, covering topics from frontend frameworks
        to backend architectures and everything in between.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 bg-gray-50 rounded-xl p-6 sm:p-8 mb-8">
        <div className="text-5xl sm:text-left text-center">&#9997;&#65039;</div>
        <div>
          <h2 className="text-xl text-gray-900 m-0 mb-1">Jane Developer</h2>
          <p className="text-indigo-600 font-semibold mb-2">Senior Software Engineer</p>
          <p className="text-gray-500 leading-relaxed">
            With over 8 years of experience building web applications, I write about
            the tools, techniques, and practices that help developers build better software.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-xl text-gray-900 mb-2">Get in Touch</h2>
        <p className="text-gray-500 mb-4">Have a question or want to collaborate? Reach out anytime.</p>
        <ul className="list-none p-0 flex flex-col gap-2 text-gray-700">
          <li>Email: hello@devblog.com</li>
          <li>GitHub: @janedev</li>
          <li>Twitter: @janedev</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
