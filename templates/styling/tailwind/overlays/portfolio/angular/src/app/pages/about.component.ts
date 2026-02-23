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
    <div class="max-w-5xl mx-auto px-6 py-12">
      <div class="text-center mb-12">
        <div class="text-7xl mb-4">👨‍💻</div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">About Me</h1>
        <p class="text-base text-gray-700 leading-relaxed max-w-xl mx-auto">
          I'm a passionate full-stack developer with 6+ years of experience building scalable
          web applications. I specialize in Angular, React, and Node.js, and love turning complex
          problems into simple, beautiful solutions.
        </p>
      </div>
      <div class="mb-12">
        <h2 class="text-xl font-bold text-gray-900 mb-5">Experience</h2>
        @for (exp of experiences; track exp.role) {
          <div class="bg-white rounded-lg p-5 mb-2.5 shadow-sm">
            <div class="font-semibold text-gray-900 text-sm">{{ exp.role }}</div>
            <div class="text-gray-500 text-sm mt-1">
              {{ exp.company }} &middot; {{ exp.period }}
            </div>
          </div>
        }
      </div>
      <h2 class="text-xl font-bold text-gray-900 mb-5">Skills</h2>
      <app-skills-grid />
    </div>
  `,
  styles: []
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
