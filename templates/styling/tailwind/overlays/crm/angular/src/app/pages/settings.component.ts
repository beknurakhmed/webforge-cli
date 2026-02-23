import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
    <div class="bg-white rounded-xl p-7 max-w-md shadow-sm">
      <h2 class="text-lg font-semibold text-gray-900 mb-5">Company Information</h2>
      <div class="flex flex-col gap-1.5 mb-4">
        <label class="text-sm font-medium text-gray-700">Company Name</label>
        <input [(ngModel)]="companyName" placeholder="Enter company name"
          class="px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-all" />
      </div>
      <div class="flex flex-col gap-1.5 mb-4">
        <label class="text-sm font-medium text-gray-700">Email Address</label>
        <input [(ngModel)]="email" type="email" placeholder="Enter email"
          class="px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-all" />
      </div>
      <button class="mt-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-sm border-none cursor-pointer transition-colors" (click)="saved = true">Save Changes</button>
      @if (saved) {
        <p class="mt-3 text-emerald-600 text-sm font-medium">Settings saved successfully!</p>
      }
    </div>
  `,
  styles: []
})
export class SettingsComponent {
  companyName = '';
  email = '';
  saved = false;
}
