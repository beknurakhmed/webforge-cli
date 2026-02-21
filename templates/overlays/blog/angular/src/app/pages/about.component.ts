import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-page">
      <div class="about-card">
        <div class="about-card__avatar">👩‍💻</div>
        <h1 class="about-card__label">About the Author</h1>
        <h2 class="about-card__name">Jane Developer</h2>
        <p class="about-card__bio">
          Full-stack developer with over 8 years of experience building web applications.
          Passionate about Angular, TypeScript, and creating elegant solutions to complex problems.
          When not coding, you can find me writing tutorials and contributing to open source.
        </p>
        <div class="about-card__stats">
          <div class="about-card__stat">
            <span class="about-card__stat-value">150+</span>
            <span class="about-card__stat-label">Articles</span>
          </div>
          <div class="about-card__stat">
            <span class="about-card__stat-value">50K+</span>
            <span class="about-card__stat-label">Readers</span>
          </div>
          <div class="about-card__stat">
            <span class="about-card__stat-value">8+</span>
            <span class="about-card__stat-label">Years</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-page {
      max-width: 640px;
      margin: 0 auto;
      padding: 48px 24px;
    }

    .about-card {
      background: #fff;
      border-radius: 16px;
      padding: 40px;
      text-align: center;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .about-card__avatar {
      font-size: 72px;
      margin-bottom: 16px;
    }

    .about-card__label {
      font-size: 14px;
      font-weight: 600;
      color: #4f46e5;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
    }

    .about-card__name {
      font-size: 28px;
      font-weight: 800;
      color: #111827;
      margin-bottom: 16px;
    }

    .about-card__bio {
      font-size: 16px;
      color: #374151;
      line-height: 1.7;
      margin-bottom: 32px;
    }

    .about-card__stats {
      display: flex;
      justify-content: center;
      gap: 48px;
    }

    .about-card__stat {
      display: flex;
      flex-direction: column;
    }

    .about-card__stat-value {
      font-size: 24px;
      font-weight: 700;
      color: #4f46e5;
    }

    .about-card__stat-label {
      font-size: 13px;
      color: #6b7280;
    }

    @media (max-width: 768px) {
      .about-card {
        padding: 24px;
      }

      .about-card__stats {
        gap: 24px;
      }

      .about-card__name {
        font-size: 22px;
      }
    }
  `]
})
export class AboutComponent {}
