import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgFor],
  template: `
    <section id="features" class="features">
      <h2>Features</h2>
      <p class="subtitle">Everything you need to build a modern web application</p>
      <div class="grid">
        <div *ngFor="let f of features" class="card">
          <span class="icon">{{ f.icon }}</span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.description }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features { padding: 5rem 2rem; max-width: 1200px; margin: 0 auto; text-align: center; }
    .features h2 { font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem; }
    .subtitle { color: #6b7280; margin-bottom: 3rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; text-align: left; }
    .card { padding: 2rem; border-radius: 12px; border: 1px solid #e5e7eb; transition: all 0.2s; }
    .card:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.08); transform: translateY(-2px); }
    .icon { font-size: 2rem; display: block; margin-bottom: 1rem; }
    .card h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; }
    .card p { color: #6b7280; line-height: 1.6; }
  `]
})
export class FeaturesComponent {
  features = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Optimized for performance with lazy loading and code splitting.' },
    { icon: '🎨', title: 'Beautiful Design', description: 'Clean, modern UI with responsive layouts.' },
    { icon: '🔒', title: 'Secure by Default', description: 'Built with security best practices.' },
    { icon: '🧩', title: 'Modular Architecture', description: 'Component-based structure for easy customization.' },
    { icon: '📱', title: 'Mobile First', description: 'Designed for mobile, scaled up for desktop.' },
    { icon: '🚀', title: 'Easy Deployment', description: 'Deploy anywhere in minutes.' },
  ];
}
