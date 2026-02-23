import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import SkillsGrid from '../components/SkillsGrid';
import { projects } from '../data/projects';

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20 px-8">
        <div className="text-center max-w-[700px] mx-auto">
          <span className="text-lg text-indigo-600 font-semibold">Hi, I'm</span>
          <h1 className="text-4xl md:text-7xl font-extrabold my-2">{'{{projectName}}'}</h1>
          <p className="text-xl text-slate-400 mb-4">Frontend Developer &amp; Software Engineer</p>
          <p className="text-slate-300 leading-relaxed mb-8">
            I craft pixel-perfect, user-centric web experiences with modern technologies.
            Passionate about clean code and great design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/projects" className="inline-block px-6 py-3 rounded-lg text-base font-semibold no-underline transition-all duration-200 bg-indigo-600 text-white border-2 border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700">View My Work</Link>
            <Link to="/contact" className="inline-block px-6 py-3 rounded-lg text-base font-semibold no-underline transition-all duration-200 bg-transparent text-white border-2 border-slate-600 hover:border-white">Get In Touch</Link>
          </div>
        </div>
      </section>
      <section className="max-w-[1100px] mx-auto py-20 px-8">
        <h2 className="text-center text-3xl font-bold mb-2 text-gray-900">Featured Projects</h2>
        <p className="text-gray-500 text-center mb-12">A selection of my recent work</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section className="bg-gray-50 py-20 px-8">
        <h2 className="text-center text-3xl font-bold mb-2 text-gray-900">Skills &amp; Technologies</h2>
        <p className="text-gray-500 text-center mb-12">Technologies I work with daily</p>
        <SkillsGrid />
      </section>
    </div>
  );
}

export default Home;
