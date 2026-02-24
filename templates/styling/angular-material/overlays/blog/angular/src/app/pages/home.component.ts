import { Component } from '@angular/core';
import { PostCardComponent } from '../components/post-card.component';
import { BlogSidebarComponent } from '../components/blog-sidebar.component';
import { BlogPost } from '../components/post-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent, BlogSidebarComponent],
  template: `
    <div class="home-container">
      <div class="home-layout">
        <div class="home-posts">
          <h1 class="page-title">Latest Posts</h1>
          <div class="posts-grid">
            @for (post of posts; track post.id) {
              <app-post-card [post]="post" />
            }
          </div>
        </div>
        <aside class="home-sidebar">
          <app-blog-sidebar />
        </aside>
      </div>
    </div>
  `,
  styles: [`
    .home-container { max-width: 1100px; margin: 0 auto; padding: 32px 24px; }
    .page-title { font-size: 1.75rem; font-weight: 700; color: #212121; margin-bottom: 24px; }
    .home-layout { display: grid; grid-template-columns: 1fr 300px; gap: 32px; }
    .posts-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .home-sidebar { position: sticky; top: 80px; align-self: start; }
    @media (max-width: 768px) {
      .home-layout { grid-template-columns: 1fr; }
      .posts-grid { grid-template-columns: 1fr; }
      .home-sidebar { position: static; }
    }
  `]
})
export class HomeComponent {
  posts: BlogPost[] = [
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
}
