'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Get in Touch</h1>
        <p className="text-gray-500 mt-2">Have a project in mind or just want to say hello? I would love to hear from you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          {submitted ? (
            <div className="text-center py-8">
              <span className="text-5xl block mb-4">✅</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-500 mb-6">Thank you for reaching out. I will get back to you as soon as possible.</p>
              <button className="inline-block px-6 py-2.5 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer border-none" onClick={() => setSubmitted(false)}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white font-sans focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white font-sans focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white font-sans focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
                >
                  <option value="">Select a subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white font-sans resize-y focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
                />
              </div>
              <button type="submit" className="w-full px-8 py-3.5 rounded-lg text-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer border-none text-center">Send Message</button>
            </form>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="flex gap-3 mb-4">
              <span className="text-2xl flex-shrink-0">📧</span>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-semibold text-gray-900">hello@{'{{projectName}}'}.com</p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <span className="text-2xl flex-shrink-0">📍</span>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="font-semibold text-gray-900">San Francisco, CA</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl flex-shrink-0">🕐</span>
              <div>
                <p className="text-xs text-gray-500">Availability</p>
                <p className="font-semibold text-gray-900">Open for freelance projects</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Social Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <a href="#" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                <span>📂</span>
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                <span>🐦</span>
                <span>Twitter</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                <span>📸</span>
                <span>Dribbble</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
