import { Component } from '@angular/core';
import { PostCardComponent } from '../components/post-card.component';
import { BlogSidebarComponent } from '../components/blog-sidebar.component';
import { BlogPost } from '../components/post-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent, BlogSidebarComponent],
  template: `
    <div class="max-w-5xl mx-auto px-6 py-8">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div>
          <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Latest Posts</h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            @for (post of posts; track post.id) {
              <app-post-card [post]="post" />
            }
          </div>
        </div>
        <aside class="md:sticky md:top-20 self-start">
          <app-blog-sidebar />
        </aside>
      </div>
    </div>
  `,
  styles: []
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
