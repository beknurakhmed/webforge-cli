import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <aside class="w-full md:w-60 bg-gray-900 text-white py-6 px-4 flex flex-col gap-8 md:gap-8 flex-shrink-0">
        <div class="text-xl font-bold text-white px-2">{{projectName}}</div>
        <nav class="flex md:flex-col flex-row overflow-x-auto gap-1">
          <a routerLink="/" routerLinkActive="bg-indigo-600 text-white"
             [routerLinkActiveOptions]="{ exact: true }"
             class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm font-medium transition-all">
            <span class="text-lg">📊</span> Dashboard
          </a>
          <a routerLink="/contacts" routerLinkActive="bg-indigo-600 text-white"
             class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm font-medium transition-all">
            <span class="text-lg">👤</span> Contacts
          </a>
          <a routerLink="/deals" routerLinkActive="bg-indigo-600 text-white"
             class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm font-medium transition-all">
            <span class="text-lg">💼</span> Deals
          </a>
          <a routerLink="/settings" routerLinkActive="bg-indigo-600 text-white"
             class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm font-medium transition-all">
            <span class="text-lg">⚙️</span> Settings
          </a>
        </nav>
      </aside>
      <main class="flex-1 p-6 md:p-8 overflow-y-auto">
        <router-outlet />
      </main>
    </div>
  `,
  styles: []
})
export class AppComponent {}
