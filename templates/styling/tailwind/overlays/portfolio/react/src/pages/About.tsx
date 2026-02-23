import SkillsGrid from '../components/SkillsGrid';

const timeline = [
  { year: '2024 - Present', role: 'Senior Frontend Developer', company: 'Tech Corp', desc: 'Leading frontend architecture and mentoring junior developers.' },
  { year: '2022 - 2024', role: 'Frontend Developer', company: 'StartupXYZ', desc: 'Built and maintained multiple React applications from scratch.' },
  { year: '2020 - 2022', role: 'Junior Developer', company: 'Web Agency', desc: 'Developed responsive websites and learned modern frameworks.' },
];

function About() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-8">
      <h2 className="text-center text-3xl font-bold mb-2 text-gray-900">About Me</h2>
      <p className="text-gray-500 text-center mb-12">My journey as a developer</p>
      <div>
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-10 bg-gray-50 p-8 rounded-xl text-center md:text-left">
          <span className="text-5xl shrink-0 mx-auto md:mx-0">&#x1F468;&#x200D;&#x1F4BB;</span>
          <p className="text-gray-700 leading-relaxed">
            I am a passionate software engineer with a love for building beautiful, performant
            web applications. With expertise in modern JavaScript frameworks and a keen eye
            for design, I bridge the gap between functionality and aesthetics.
          </p>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Experience</h3>
        <div className="flex flex-col gap-6">
          {timeline.map((item, i) => (
            <div key={i} className="border-l-[3px] border-indigo-600 pl-5">
              <span className="text-xs text-indigo-600 font-semibold">{item.year}</span>
              <h4 className="text-base text-gray-900 my-1">{item.role}</h4>
              <span className="text-sm text-gray-500">{item.company}</span>
              <p className="text-gray-700 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 py-12 px-0 mt-12 -mx-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 px-8">Skills</h3>
        <div className="px-8">
          <SkillsGrid />
        </div>
      </div>
    </div>
  );
}

export default About;
