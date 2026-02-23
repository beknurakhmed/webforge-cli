import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-sidebar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <div class="bg-white rounded-xl p-5 mb-4 shadow-sm">
      <h3 class="text-base font-bold text-gray-900 mb-3">Categories</h3>
      @for (cat of categories; track cat) {
        <a
          [routerLink]="'/category/' + cat.toLowerCase()"
          class="block py-2 text-indigo-600 hover:text-indigo-700 no-underline text-sm border-b border-gray-100 last:border-b-0 transition-colors"
        >{{ cat }}</a>
      }
    </div>
    <div class="bg-white rounded-xl p-5 shadow-sm">
      <h3 class="text-base font-bold text-gray-900 mb-3">Newsletter</h3>
      <p class="text-sm text-gray-500 mb-3">
        Get the latest posts delivered to your inbox.
      </p>
      <input
        [(ngModel)]="email"
        placeholder="Your email"
        class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm mb-2 outline-none focus:border-indigo-600 transition-colors box-border"
      />
      <button
        class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg border-none cursor-pointer transition-colors"
        (click)="subscribed = true"
      >Subscribe</button>
      @if (subscribed) {
        <p class="mt-2 text-emerald-600 text-sm">Thanks for subscribing!</p>
      }
    </div>
  `,
  styles: []
})
export class BlogSidebarComponent {
  categories: string[] = ['Angular', 'TypeScript', 'CSS', 'Node.js', 'DevOps'];
  email = '';
  subscribed = false;
}
