import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="max-w-xl mx-auto px-6 py-12">
      <div class="bg-white rounded-2xl p-8 md:p-10 text-center shadow-sm">
        <div class="text-7xl mb-4">👩‍💻</div>
        <h1 class="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">About the Author</h1>
        <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Jane Developer</h2>
        <p class="text-base text-gray-700 leading-relaxed mb-8">
          Full-stack developer with over 8 years of experience building web applications.
          Passionate about Angular, TypeScript, and creating elegant solutions to complex problems.
          When not coding, you can find me writing tutorials and contributing to open source.
        </p>
        <div class="flex justify-center gap-12 md:gap-16">
          <div class="flex flex-col">
            <span class="text-2xl font-bold text-indigo-600">150+</span>
            <span class="text-sm text-gray-500">Articles</span>
          </div>
          <div class="flex flex-col">
            <span class="text-2xl font-bold text-indigo-600">50K+</span>
            <span class="text-sm text-gray-500">Readers</span>
          </div>
          <div class="flex flex-col">
            <span class="text-2xl font-bold text-indigo-600">8+</span>
            <span class="text-sm text-gray-500">Years</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AboutComponent {}
