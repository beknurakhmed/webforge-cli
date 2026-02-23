import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex flex-col md:flex-row h-screen font-sans text-gray-700">
      <aside class="w-full md:w-60 bg-gray-900 text-white p-4 md:p-6 flex-shrink-0 flex flex-col">
        <div class="text-xl font-bold mb-8 pb-4 border-b border-gray-700">{{ projectName }}</div>
        <nav class="flex md:flex-col flex-row overflow-x-auto md:overflow-x-visible gap-1 md:gap-1">
          <a
            routerLink="/"
            routerLinkActive="bg-indigo-600 text-white"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm md:text-base"
          >
            📊 Overview
          </a>
          <a routerLink="/analytics" routerLinkActive="bg-indigo-600 text-white"
            class="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm md:text-base">
            📈 Analytics
          </a>
          <a routerLink="/users" routerLinkActive="bg-indigo-600 text-white"
            class="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm md:text-base">
            👥 Users
          </a>
          <a routerLink="/settings" routerLinkActive="bg-indigo-600 text-white"
            class="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm md:text-base">
            ⚙️ Settings
          </a>
        </nav>
      </aside>
      <main class="flex-1 p-4 md:p-8 bg-gray-50 overflow-y-auto">
        <router-outlet />
      </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  projectName = '{{projectName}}';
}
