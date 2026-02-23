import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="bg-white border-b border-gray-200 py-4 sticky top-0 z-10">
      <div class="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <a routerLink="/" class="text-xl font-bold text-indigo-600 no-underline">{{ projectName }}</a>
        <div class="flex gap-5 md:gap-7">
          <a
            routerLink="/"
            routerLinkActive="text-indigo-600"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-gray-500 hover:text-indigo-600 text-sm md:text-base font-medium no-underline transition-colors"
          >Home</a>
          <a routerLink="/projects" routerLinkActive="text-indigo-600"
            class="text-gray-500 hover:text-indigo-600 text-sm md:text-base font-medium no-underline transition-colors">Projects</a>
          <a routerLink="/about" routerLinkActive="text-indigo-600"
            class="text-gray-500 hover:text-indigo-600 text-sm md:text-base font-medium no-underline transition-colors">About</a>
          <a routerLink="/contact" routerLinkActive="text-indigo-600"
            class="text-gray-500 hover:text-indigo-600 text-sm md:text-base font-medium no-underline transition-colors">Contact</a>
        </div>
      </div>
    </nav>
    <main class="min-h-[calc(100vh-140px)] bg-gray-50"><router-outlet /></main>
    <footer class="bg-gray-900 text-gray-400 py-6 text-center text-sm">
      <div class="max-w-5xl mx-auto px-6">
        <p>&copy; 2024 {{ projectName }}. Built with passion.</p>
      </div>
    </footer>
  `,
  styles: []
})
export class AppComponent {
  projectName = '{{projectName}}';
}
