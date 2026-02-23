import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="'/post/' + post.id" class="block bg-white rounded-xl overflow-hidden no-underline shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
      <div class="text-5xl text-center py-6 bg-gray-100">{{ post.image }}</div>
      <div class="p-5">
        <span class="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{{ post.category }}</span>
        <h3 class="text-lg font-bold text-gray-900 mt-2 mb-2">{{ post.title }}</h3>
        <p class="text-sm text-gray-500 leading-relaxed mb-3">{{ post.excerpt }}</p>
        <div class="flex gap-3 text-xs text-gray-400">
          <span>{{ post.author }}</span>
          <span>{{ post.date }}</span>
          <span>{{ post.readTime }}</span>
        </div>
      </div>
    </a>
  `,
  styles: []
})
export class PostCardComponent {
  @Input() post!: BlogPost;
}
