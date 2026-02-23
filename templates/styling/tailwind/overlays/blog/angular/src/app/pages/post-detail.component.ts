import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogPost } from '../components/post-card.component';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="max-w-3xl mx-auto px-6 py-8">
      <a routerLink="/" class="text-indigo-600 hover:underline text-sm no-underline inline-block mb-6">&larr; Back to posts</a>
      @if (post) {
        <div class="text-6xl md:text-7xl text-center py-8 bg-gray-100 rounded-xl mb-6">{{ post.image }}</div>
        <span class="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{{ post.category }}</span>
        <h1 class="text-2xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">{{ post.title }}</h1>
        <div class="flex flex-wrap gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
          <span>By {{ post.author }}</span>
          <span>{{ post.date }}</span>
          <span>{{ post.readTime }} read</span>
        </div>
        <div class="text-base text-gray-700 leading-relaxed">{{ post.content }}</div>
      }
    </div>
  `,
  styles: []
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
