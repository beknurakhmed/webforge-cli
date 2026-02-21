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
    <a [routerLink]="'/post/' + post.id" class="post-card">
      <div class="post-card__image">{{ post.image }}</div>
      <div class="post-card__body">
        <span class="post-card__category">{{ post.category }}</span>
        <h3 class="post-card__title">{{ post.title }}</h3>
        <p class="post-card__excerpt">{{ post.excerpt }}</p>
        <div class="post-card__meta">
          <span>{{ post.author }}</span>
          <span>{{ post.date }}</span>
          <span>{{ post.readTime }}</span>
        </div>
      </div>
    </a>
  `,
  styles: [`
    .post-card {
      display: block;
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      text-decoration: none;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .post-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    }

    .post-card__image {
      font-size: 48px;
      text-align: center;
      padding: 24px;
      background: #f3f4f6;
    }

    .post-card__body {
      padding: 20px;
    }

    .post-card__category {
      font-size: 12px;
      font-weight: 600;
      color: #4f46e5;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .post-card__title {
      font-size: 18px;
      font-weight: 700;
      color: #111827;
      margin: 8px 0;
    }

    .post-card__excerpt {
      font-size: 14px;
      color: #6b7280;
      line-height: 1.5;
      margin-bottom: 12px;
    }

    .post-card__meta {
      display: flex;
      gap: 12px;
      font-size: 12px;
      color: #9ca3af;
    }
  `]
})
export class PostCardComponent {
  @Input() post!: BlogPost;
}
