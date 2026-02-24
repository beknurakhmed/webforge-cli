import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatDividerModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="brand">
          <h3>{{projectName}}</h3>
          <p>Building the future of the web.</p>
        </div>
        <div class="links">
          <div class="col">
            <h4>Product</h4>
            <a mat-button href="#features">Features</a>
            <a mat-button href="#cta">Pricing</a>
          </div>
          <div class="col">
            <h4>Company</h4>
            <a mat-button href="#">About</a>
            <a mat-button href="#">Blog</a>
          </div>
        </div>
      </div>
      <mat-divider></mat-divider>
      <div class="bottom">
        <p>&copy; 2025 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer { background: #111827; color: #d1d5db; padding: 48px 24px 24px; }
    .footer-content { display: flex; justify-content: space-between; max-width: 1200px; margin: 0 auto; gap: 48px; flex-wrap: wrap; }
    .brand h3 { color: #fff; font-size: 1.5rem; margin-bottom: 8px; }
    .brand p { max-width: 300px; }
    .links { display: flex; gap: 48px; }
    .col { display: flex; flex-direction: column; }
    .col h4 { color: #fff; font-size: 0.875rem; text-transform: uppercase; margin-bottom: 8px; }
    .col a { color: #9ca3af; justify-content: flex-start; }
    .bottom { text-align: center; padding-top: 24px; }
    .bottom p { font-size: 0.875rem; color: #6b7280; }
    mat-divider { border-top-color: #374151; margin-top: 32px; }
  `]
})
export class FooterComponent {
  projectName = '{{projectName}}';
}
