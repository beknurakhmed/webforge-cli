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
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Have a project in mind or just want to say hello? I would love to hear from you.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-form-card">
          {submitted ? (
            <div className="success-message">
              <span className="success-icon">✅</span>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
              <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select a subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-full">Send Message</button>
            </form>
          )}
        </div>

        <div className="contact-info-section">
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div>
                <p className="info-label">Email</p>
                <p className="info-value">hello@{'{{projectName}}'}.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">San Francisco, CA</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🕐</span>
              <div>
                <p className="info-label">Availability</p>
                <p className="info-value">Open for freelance projects</p>
              </div>
            </div>
          </div>

          <div className="contact-info-card">
            <h3>Social Links</h3>
            <div className="social-grid">
              <a href="#" className="social-card">
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="#" className="social-card">
                <span>📂</span>
                <span>GitHub</span>
              </a>
              <a href="#" className="social-card">
                <span>🐦</span>
                <span>Twitter</span>
              </a>
              <a href="#" className="social-card">
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
