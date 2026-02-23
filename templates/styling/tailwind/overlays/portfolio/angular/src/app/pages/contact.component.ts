import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="max-w-lg mx-auto px-6 py-12">
      <div class="bg-white rounded-2xl p-8 md:p-9 shadow-sm">
        <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Get in Touch</h1>
        <p class="text-sm text-gray-500 mb-7">Have a project in mind? Let's work together.</p>
        <div class="flex flex-col gap-1.5 mb-4">
          <label class="text-sm font-medium text-gray-700">Name</label>
          <input [(ngModel)]="name" placeholder="Your name"
            class="px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm outline-none font-sans focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-all" />
        </div>
        <div class="flex flex-col gap-1.5 mb-4">
          <label class="text-sm font-medium text-gray-700">Email</label>
          <input [(ngModel)]="email" type="email" placeholder="Your email"
            class="px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm outline-none font-sans focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-all" />
        </div>
        <div class="flex flex-col gap-1.5 mb-4">
          <label class="text-sm font-medium text-gray-700">Subject</label>
          <input [(ngModel)]="subject" placeholder="Subject"
            class="px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm outline-none font-sans focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-all" />
        </div>
        <div class="flex flex-col gap-1.5 mb-4">
          <label class="text-sm font-medium text-gray-700">Message</label>
          <textarea
            [(ngModel)]="message"
            placeholder="Your message"
            rows="5"
            class="px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm outline-none font-sans resize-y focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-all"
          ></textarea>
        </div>
        <button class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-base border-none cursor-pointer mt-2 transition-colors" (click)="sent = true">
          Send Message
        </button>
        @if (sent) {
          <p class="mt-4 text-emerald-600 text-sm font-medium text-center">Thanks! Your message has been sent.</p>
        }
      </div>
    </div>
  `,
  styles: []
})
export class ContactComponent {
  name = '';
  email = '';
  subject = '';
  message = '';
  sent = false;
}
