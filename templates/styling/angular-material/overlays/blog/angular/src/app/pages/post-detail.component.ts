import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogPost } from '../components/post-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, MatDividerModule],
  template: `
    <div class="post-detail">
      <a mat-button routerLink="/" color="primary">
        <mat-icon>arrow_back</mat-icon> Back to posts
      </a>
      @if (post) {
        <mat-card appearance="outlined" class="detail-card">
          <div class="hero-image">{{ post.image }}</div>
          <mat-card-header>
            <mat-card-subtitle>
              <mat-chip color="primary" highlighted>{{ post.category }}</mat-chip>
            </mat-card-subtitle>
            <mat-card-title class="detail-title">{{ post.title }}</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="post-meta">
              <span><mat-icon class="meta-icon">person</mat-icon> By {{ post.author }}</span>
              <span><mat-icon class="meta-icon">calendar_today</mat-icon> {{ post.date }}</span>
              <span><mat-icon class="meta-icon">schedule</mat-icon> {{ post.readTime }} read</span>
            </div>
            <mat-divider></mat-divider>
            <div class="post-content">{{ post.content }}</div>
          </mat-card-content>
        </mat-card>
      }
    </div>
  `,
  styles: [`
    .post-detail { max-width: 720px; margin: 0 auto; padding: 32px 24px; }
    .detail-card { margin-top: 16px; }
    .hero-image { font-size: 64px; text-align: center; padding: 32px; background: #f5f5f5; }
    .detail-title { font-size: 2rem !important; font-weight: 800 !important; line-height: 1.2; }
    .post-meta { display: flex; gap: 16px; font-size: 14px; color: #666; margin: 16px 0; }
    .post-meta span { display: flex; align-items: center; gap: 4px; }
    .meta-icon { font-size: 16px; width: 16px; height: 16px; }
    mat-divider { margin: 16px 0; }
    .post-content { font-size: 16px; color: #424242; line-height: 1.8; }
  `]
})
export class PostDetailComponent implements OnInit {
  post: BlogPost | undefined;

  private posts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with Angular 19',
      excerpt: 'Learn the latest features...',
      content: 'Angular 19 brings standalone components as the default, improved signal-based '
        + 'reactivity, and enhanced server-side rendering. This guide walks you through the key '
        + 'changes and how to adopt them in your projects. Standalone components simplify the '
        + 'module system, making it easier to build and maintain Angular applications.',
      category: 'Angular',
      author: 'Jane Developer',
      date: '2024-12-15',
      readTime: '5 min',
      image: '🅰️',
    },
    {
      id: 2,
      title: 'TypeScript Best Practices',
      excerpt: 'Write better TypeScript...',
      content: 'TypeScript has become essential for modern web development. Follow these best '
        + 'practices: use strict mode, leverage type inference, prefer interfaces over type '
        + 'aliases for object shapes, use union types for flexibility, and always handle null '
        + 'checks properly. These patterns will make your code more maintainable and less '
        + 'error-prone.',
      category: 'TypeScript',
      author: 'John Coder',
      date: '2024-12-10',
      readTime: '7 min',
      image: '📘',
    },
    {
      id: 3,
      title: 'CSS Grid Mastery',
      excerpt: 'Master CSS Grid layouts...',
      content: 'CSS Grid is a powerful layout system that allows you to create complex, '
        + 'responsive layouts with ease. Learn about grid-template-columns, grid-template-rows, '
        + 'grid-area, and the fr unit. Master auto-fit and minmax for truly responsive grids '
        + 'without media queries.',
      category: 'CSS',
      author: 'Jane Developer',
      date: '2024-12-05',
      readTime: '6 min',
      image: '🎨',
    },
    {
      id: 4,
      title: 'RxJS Patterns',
      excerpt: 'Essential reactive patterns...',
      content: 'RxJS provides powerful tools for handling asynchronous operations. Learn '
        + 'essential patterns like switchMap for cancellation, debounceTime for search inputs, '
        + 'combineLatest for multiple streams, and shareReplay for caching. These patterns are '
        + 'fundamental for Angular development.',
      category: 'Angular',
      author: 'Mike RxJS',
      date: '2024-11-28',
      readTime: '8 min',
      image: '🔄',
    },
    {
      id: 5,
      title: 'Node.js Performance Tips',
      excerpt: 'Optimize your Node.js apps...',
      content: 'Performance optimization is crucial for Node.js applications. Use clustering '
        + 'to leverage multiple CPU cores, implement caching strategies with Redis, optimize '
        + 'database queries, use streams for large file processing, and profile your application '
        + 'to identify bottlenecks.',
      category: 'Node.js',
      author: 'John Coder',
      date: '2024-11-20',
      readTime: '6 min',
      image: '🟢',
    },
    {
      id: 6,
      title: 'Testing Strategies',
      excerpt: 'Comprehensive testing guide...',
      content: 'Testing is essential for quality software. Implement a testing pyramid with '
        + 'unit tests at the base, integration tests in the middle, and end-to-end tests at '
        + 'the top. Use Jest for unit testing, Testing Library for component tests, and Cypress '
        + 'or Playwright for E2E tests.',
      category: 'DevOps',
      author: 'Jane Developer',
      date: '2024-11-15',
      readTime: '9 min',
      image: '🧪',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.posts.find(
      (p: BlogPost) => p.id === id
    );
  }
}
