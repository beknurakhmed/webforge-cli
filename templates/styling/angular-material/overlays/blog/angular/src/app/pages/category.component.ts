import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostCardComponent } from '../components/post-card.component';
import { BlogPost } from '../components/post-card.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [PostCardComponent, MatIconModule],
  template: `
    <div class="category-page">
      <h1 class="page-title">
        <mat-icon class="title-icon">label</mat-icon>
        Category: {{ slug }}
      </h1>
      <div class="posts-grid">
        @for (post of filtered; track post.id) {
          <app-post-card [post]="post" />
        }
      </div>
      @if (filtered.length === 0) {
        <div class="empty-state">
          <mat-icon class="empty-icon">search_off</mat-icon>
          <p>No posts found in this category.</p>
        </div>
      }
    </div>
  `,
  styles: [`
    .category-page { max-width: 1100px; margin: 0 auto; padding: 32px 24px; }
    .page-title {
      font-size: 1.75rem; font-weight: 700; color: #212121; margin-bottom: 24px;
      text-transform: capitalize; display: flex; align-items: center; gap: 8px;
    }
    .title-icon { font-size: 28px; width: 28px; height: 28px; color: #3f51b5; }
    .posts-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .empty-state { text-align: center; padding: 48px 0; color: #666; }
    .empty-icon { font-size: 48px; width: 48px; height: 48px; color: #bbb; }
    @media (max-width: 768px) { .posts-grid { grid-template-columns: 1fr; } }
  `]
})
export class CategoryComponent implements OnInit {
  slug = '';
  filtered: BlogPost[] = [];

  private posts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with Angular 19',
      excerpt: 'Learn the latest features...',
      content: '',
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
      content: '',
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
      content: '',
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
      content: '',
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
      content: '',
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
      content: '',
      category: 'DevOps',
      author: 'Jane Developer',
      date: '2024-11-15',
      readTime: '9 min',
      image: '🧪',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    this.filtered = this.posts.filter(
      (p: BlogPost) => p.category.toLowerCase() === this.slug.toLowerCase()
    );
  }
}
