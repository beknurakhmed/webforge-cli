import { Component } from '@angular/core';
import { SkillsGridComponent } from '../components/skills-grid.component';

interface Experience {
  role: string;
  company: string;
  period: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillsGridComponent],
  template: `
    <div class="about-container">
      <div class="about-profile">
        <div class="about-avatar">👨‍💻</div>
        <h1 class="about-page-title">About Me</h1>
        <p class="about-bio">
          I'm a passionate full-stack developer with 6+ years of experience building scalable
          web applications. I specialize in Angular, React, and Node.js, and love turning complex
          problems into simple, beautiful solutions.
        </p>
      </div>
      <div class="about-experience">
        <h2 class="about-section-title">Experience</h2>
        @for (exp of experiences; track exp.role) {
          <div class="experience-card">
            <div class="experience-role">{{ exp.role }}</div>
            <div class="experience-company">
              {{ exp.company }} &middot; {{ exp.period }}
            </div>
          </div>
        }
      </div>
      <h2 class="about-section-title">Skills</h2>
      <app-skills-grid />
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 48px 24px;
    }

    .about-profile {
      text-align: center;
      margin-bottom: 48px;
    }

    .about-avatar {
      font-size: 72px;
      margin-bottom: 16px;
    }

    .about-page-title {
      font-size: 32px;
      font-weight: 800;
      color: #111827;
      margin-bottom: 16px;
    }

    .about-bio {
      font-size: 16px;
      color: #374151;
      line-height: 1.7;
      max-width: 600px;
      margin: 0 auto;
    }

    .about-section-title {
      font-size: 22px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 20px;
    }

    .about-experience {
      margin-bottom: 48px;
    }

    .experience-card {
      background: #fff;
      border-radius: 10px;
      padding: 18px 20px;
      margin-bottom: 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .experience-role {
      font-weight: 600;
      color: #111827;
      font-size: 15px;
    }

    .experience-company {
      color: #6b7280;
      font-size: 14px;
      margin-top: 4px;
    }
  `]
})
export class AboutComponent {
  experiences: Experience[] = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Corp',
      period: '2022 - Present',
    },
    {
      role: 'Full-Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
    },
    {
      role: 'Junior Developer',
      company: 'WebAgency',
      period: '2018 - 2020',
    },
  ];
}
