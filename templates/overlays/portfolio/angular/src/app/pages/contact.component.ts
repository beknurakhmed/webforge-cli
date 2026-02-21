import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="contact-container">
      <div class="contact-form-card">
        <h1 class="contact-title">Get in Touch</h1>
        <p class="contact-description">Have a project in mind? Let's work together.</p>
        <div class="contact-field">
          <label>Name</label>
          <input [(ngModel)]="name" placeholder="Your name" />
        </div>
        <div class="contact-field">
          <label>Email</label>
          <input [(ngModel)]="email" type="email" placeholder="Your email" />
        </div>
        <div class="contact-field">
          <label>Subject</label>
          <input [(ngModel)]="subject" placeholder="Subject" />
        </div>
        <div class="contact-field">
          <label>Message</label>
          <textarea
            [(ngModel)]="message"
            placeholder="Your message"
            rows="5"
          ></textarea>
        </div>
        <button class="contact-submit-btn" (click)="sent = true">
          Send Message
        </button>
        @if (sent) {
          <p class="contact-success-message">Thanks! Your message has been sent.</p>
        }
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      max-width: 560px;
      margin: 0 auto;
      padding: 48px 24px;
    }

    .contact-form-card {
      background: #fff;
      border-radius: 16px;
      padding: 36px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .contact-title {
      font-size: 28px;
      font-weight: 800;
      color: #111827;
      margin-bottom: 8px;
    }

    .contact-description {
      font-size: 15px;
      color: #6b7280;
      margin-bottom: 28px;
    }

    .contact-field {
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .contact-field label {
      font-size: 13px;
      font-weight: 500;
      color: #374151;
    }

    .contact-field input,
    .contact-field textarea {
      padding: 10px 14px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      font-family: inherit;
      resize: vertical;
    }

    .contact-field input:focus,
    .contact-field textarea:focus {
      border-color: #4f46e5;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }

    .contact-submit-btn {
      width: 100%;
      padding: 12px;
      background: #4f46e5;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 8px;
    }

    .contact-submit-btn:hover {
      background: #4338ca;
    }

    .contact-success-message {
      margin-top: 16px;
      color: #059669;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
    }
  `]
})
export class ContactComponent {
  name = '';
  email = '';
  subject = '';
  message = '';
  sent = false;
}
