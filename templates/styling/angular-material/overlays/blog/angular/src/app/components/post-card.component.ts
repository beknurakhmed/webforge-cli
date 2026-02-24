import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

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
  imports: [RouterLink, MatCardModule, MatChipsModule, MatDividerModule, MatIconModule],
  template: `
    <a [routerLink]="'/post/' + post.id" class="post-link">
      <mat-card appearance="outlined" class="post-card">
        <div class="post-image">{{ post.image }}</div>
        <mat-card-header>
          <mat-card-subtitle>
            <mat-chip color="primary" highlighted>{{ post.category }}</mat-chip>
          </mat-card-subtitle>
          <mat-card-title>{{ post.title }}</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p class="post-excerpt">{{ post.excerpt }}</p>
        </mat-card-content>
        <mat-divider></mat-divider>
        <mat-card-footer class="post-meta">
          <span><mat-icon class="meta-icon">person</mat-icon> {{ post.author }}</span>
          <span><mat-icon class="meta-icon">calendar_today</mat-icon> {{ post.date }}</span>
          <span><mat-icon class="meta-icon">schedule</mat-icon> {{ post.readTime }}</span>
        </mat-card-footer>
      </mat-card>
    </a>
  `,
  styles: [`
    .post-link { text-decoration: none; color: inherit; }
    .post-card { height: 100%; transition: box-shadow 0.2s; }
    .post-card:hover { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12); }
    .post-image { font-size: 48px; text-align: center; padding: 24px; background: #f5f5f5; }
    .post-excerpt { font-size: 14px; color: #666; line-height: 1.5; }
    .post-meta { display: flex; gap: 16px; padding: 12px 16px; font-size: 12px; color: #999; }
    .post-meta span { display: flex; align-items: center; gap: 4px; }
    .meta-icon { font-size: 14px; width: 14px; height: 14px; }
  `]
})
export class PostCardComponent {
  @Input() post!: BlogPost;
}
