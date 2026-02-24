'use client';

import { useState } from 'react';
import styles from './page.module.css';

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
    <div className={styles.contactPage}>
      <div className={styles.contactHeader}>
        <h1>Get in Touch</h1>
        <p>Have a project in mind or just want to say hello? I would love to hear from you.</p>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.contactFormCard}>
          {submitted ? (
            <div className={styles.successMessage}>
              <span className={styles.successIcon}>✅</span>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
              <button className={styles.btnPrimary} onClick={() => setSubmitted(false)}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
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
              <div className={styles.formGroup}>
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
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select a subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
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
              <button type="submit" className={styles.btnPrimaryLg}>Send Message</button>
            </form>
          )}
        </div>

        <div className={styles.contactInfoSection}>
          <div className={styles.contactInfoCard}>
            <h3>Contact Information</h3>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📧</span>
              <div>
                <p className={styles.infoLabel}>Email</p>
                <p className={styles.infoValue}>hello@{'{{projectName}}'}.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📍</span>
              <div>
                <p className={styles.infoLabel}>Location</p>
                <p className={styles.infoValue}>San Francisco, CA</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🕐</span>
              <div>
                <p className={styles.infoLabel}>Availability</p>
                <p className={styles.infoValue}>Open for freelance projects</p>
              </div>
            </div>
          </div>

          <div className={styles.contactInfoCard}>
            <h3>Social Links</h3>
            <div className={styles.socialGrid}>
              <a href="#" className={styles.socialCard}>
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="#" className={styles.socialCard}>
                <span>📂</span>
                <span>GitHub</span>
              </a>
              <a href="#" className={styles.socialCard}>
                <span>🐦</span>
                <span>Twitter</span>
              </a>
              <a href="#" className={styles.socialCard}>
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
