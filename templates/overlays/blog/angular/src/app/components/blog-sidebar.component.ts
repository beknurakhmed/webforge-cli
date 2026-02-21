import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-sidebar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <div class="sidebar-widget">
      <h3 class="sidebar-widget__title">Categories</h3>
      @for (cat of categories; track cat) {
        <a
          [routerLink]="'/category/' + cat.toLowerCase()"
          class="sidebar-widget__category-link"
        >{{ cat }}</a>
      }
    </div>
    <div class="sidebar-widget">
      <h3 class="sidebar-widget__title">Newsletter</h3>
      <p class="sidebar-widget__description">
        Get the latest posts delivered to your inbox.
      </p>
      <input
        [(ngModel)]="email"
        placeholder="Your email"
        class="sidebar-widget__input"
      />
      <button
        class="sidebar-widget__subscribe-btn"
        (click)="subscribed = true"
      >Subscribe</button>
      @if (subscribed) {
        <p class="sidebar-widget__success-msg">Thanks for subscribing!</p>
      }
    </div>
  `,
  styles: [`
    .sidebar-widget {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 16px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .sidebar-widget__title {
      font-size: 16px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 12px;
    }

    .sidebar-widget__category-link {
      display: block;
      padding: 8px 0;
      color: #4f46e5;
      text-decoration: none;
      font-size: 14px;
      border-bottom: 1px solid #f3f4f6;
    }

    .sidebar-widget__category-link:hover {
      color: #4338ca;
    }

    .sidebar-widget__description {
      font-size: 13px;
      color: #6b7280;
      margin-bottom: 12px;
    }

    .sidebar-widget__input {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 14px;
      margin-bottom: 8px;
      outline: none;
      box-sizing: border-box;
    }

    .sidebar-widget__input:focus {
      border-color: #4f46e5;
    }

    .sidebar-widget__subscribe-btn {
      width: 100%;
      padding: 10px;
      background: #4f46e5;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }

    .sidebar-widget__subscribe-btn:hover {
      background: #4338ca;
    }

    .sidebar-widget__success-msg {
      margin-top: 8px;
      color: #059669;
      font-size: 13px;
    }
  `]
})
export class BlogSidebarComponent {
  categories: string[] = ['Angular', 'TypeScript', 'CSS', 'Node.js', 'DevOps'];
  email = '';
  subscribed = false;
}
