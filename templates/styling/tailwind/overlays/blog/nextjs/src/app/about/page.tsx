import Link from 'next/link';

const team = [
  { name: 'Alex Rivera', role: 'Lead Writer & Editor', bio: 'Full-stack developer with 10+ years of experience. Passionate about modern web technologies and developer education.', avatar: '👨‍💻' },
  { name: 'Priya Sharma', role: 'Design Writer', bio: 'UI/UX designer who loves translating complex design concepts into accessible, practical advice.', avatar: '👩‍🎨' },
  { name: 'Marcus Chen', role: 'Technical Writer', bio: 'Software architect specializing in scalable systems and design patterns. Writes about architecture and best practices.', avatar: '👨' },
  { name: 'Sofia Andersen', role: 'Tutorial Creator', bio: 'Frontend developer and educator. Creates in-depth tutorials that make complex topics approachable.', avatar: '👩' },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <section className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">About {'{{projectName}}'}</h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">We are a team of passionate developers and designers sharing knowledge about modern web development, design, and technology.</p>
      </section>

      <section className="mb-10">
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-base text-gray-700 mb-3">We believe in making technology accessible to everyone. Our articles combine practical tutorials with in-depth analysis to help developers at every level grow their skills and stay current with the latest trends.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-5xl mb-3">{member.avatar}</div>
                <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
                <p className="text-xs text-indigo-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-base text-gray-700 mb-3">Have a suggestion for a topic? Want to contribute? We would love to hear from you.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 mt-4">
            <div className="flex items-center gap-2 text-base">
              <span>📧</span>
              <span>hello@{'{{projectName}}'}.com</span>
            </div>
            <div className="flex items-center gap-2 text-base">
              <span>🐦</span>
              <span>@{'{{projectName}}'}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
