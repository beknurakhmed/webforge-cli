import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  standalone: true,
  template: `
    <section id="cta" class="cta">
      <h2>Ready to Get Started?</h2>
      <p>Join thousands of developers building amazing products.</p>
      <button class="btn btn-primary btn-large">Start Free Trial</button>
      <p class="note">No credit card required</p>
    </section>
  `,
  styles: [`
    .cta { background: #f9fafb; padding: 5rem 2rem; text-align: center; }
    .cta h2 { font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; }
    .cta p { color: #6b7280; margin-bottom: 2rem; }
    .note { font-size: 0.875rem; color: #9ca3af; }
    .btn { padding: 0.75rem 1.5rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; border: none; }
    .btn-primary { background: #4f46e5; color: white; }
    .btn-large { padding: 1rem 2.5rem; font-size: 1.1rem; }
  `]
})
export class CtaComponent {}
