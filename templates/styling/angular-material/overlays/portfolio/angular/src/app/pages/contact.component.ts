import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  template: `
    <div class="contact-container">
      <mat-card appearance="outlined" class="contact-card">
        <mat-card-header>
          <mat-card-title class="contact-title">Get in Touch</mat-card-title>
          <mat-card-subtitle>Have a project in mind? Let's work together.</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Name</mat-label>
            <input matInput [(ngModel)]="name" placeholder="Your name" />
            <mat-icon matPrefix>person</mat-icon>
          </mat-form-field>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Email</mat-label>
            <input matInput [(ngModel)]="email" type="email" placeholder="Your email" />
            <mat-icon matPrefix>email</mat-icon>
          </mat-form-field>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Subject</mat-label>
            <input matInput [(ngModel)]="subject" placeholder="Subject" />
            <mat-icon matPrefix>subject</mat-icon>
          </mat-form-field>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Message</mat-label>
            <textarea matInput [(ngModel)]="message" placeholder="Your message" rows="5"></textarea>
            <mat-icon matPrefix>chat</mat-icon>
          </mat-form-field>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary" class="full-width" (click)="sent = true">
            <mat-icon>send</mat-icon> Send Message
          </button>
        </mat-card-actions>
        @if (sent) {
          <mat-card-content>
            <p class="success-msg">
              <mat-icon class="success-icon">check_circle</mat-icon>
              Thanks! Your message has been sent.
            </p>
          </mat-card-content>
        }
      </mat-card>
    </div>
  `,
  styles: [`
    .contact-container { max-width: 560px; margin: 0 auto; padding: 48px 24px; }
    .contact-card { padding: 8px; }
    .contact-title { font-size: 1.75rem !important; font-weight: 800 !important; }
    .full-width { width: 100%; }
    mat-card-actions { padding: 0 16px 16px; }
    .success-msg { color: #4caf50; font-size: 14px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px; }
    .success-icon { font-size: 20px; width: 20px; height: 20px; }
  `]
})
export class ContactComponent {
  name = '';
  email = '';
  subject = '';
  message = '';
  sent = false;
}
