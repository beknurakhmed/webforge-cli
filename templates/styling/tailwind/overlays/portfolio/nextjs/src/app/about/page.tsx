import Link from 'next/link';
import { SkillsGrid } from '../components/SkillsGrid';

const experience = [
  { role: 'Senior Full-Stack Developer', company: 'TechCorp Inc.', period: '2022 - Present', description: 'Leading development of cloud-native applications serving 50K+ users. Architecting microservices and mentoring junior developers.', icon: '🏢' },
  { role: 'Frontend Developer', company: 'DesignStudio Co.', period: '2020 - 2022', description: 'Built responsive web applications and design systems. Improved page load performance by 40% through optimization.', icon: '💻' },
  { role: 'Junior Developer', company: 'StartupXYZ', period: '2018 - 2020', description: 'Full-stack development for a SaaS platform. Implemented features used by thousands of customers daily.', icon: '🚀' },
];

const education = [
  { degree: 'M.S. Computer Science', school: 'State University', year: '2018', icon: '🎓' },
  { degree: 'B.S. Software Engineering', school: 'Tech Institute', year: '2016', icon: '📚' },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <section className="text-center mb-12">
        <div className="text-7xl mb-4">👨‍💻</div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">About Me</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          I am a full-stack developer with over 6 years of experience building web applications.
          I am passionate about clean code, user experience, and turning complex problems into simple,
          elegant solutions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">💼 Experience</h2>
        <div className="flex flex-col gap-6">
          {experience.map((exp, i) => (
            <div key={i} className="flex gap-5 bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl flex-shrink-0">{exp.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                <p className="text-indigo-600 font-semibold text-sm">{exp.company}</p>
                <p className="text-xs text-gray-500 mb-2">{exp.period}</p>
                <p className="text-sm text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">🎓 Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {education.map((edu, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <span className="text-4xl block mb-3">{edu.icon}</span>
              <h3 className="text-base font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-sm text-gray-700">{edu.school}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
            </div>
          ))}
        </div>
      </section>

      <SkillsGrid />

      <section className="text-center p-12 bg-white rounded-xl shadow-sm mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Want to work together?</h2>
        <p className="text-gray-500 mb-6">I am always interested in hearing about new projects and opportunities.</p>
        <Link href="/contact" className="inline-block px-8 py-3.5 rounded-lg text-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Get in Touch</Link>
      </section>
    </div>
  );
}
