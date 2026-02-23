<template>
  <footer class="bg-gray-900 text-gray-400 py-8 px-6 mt-auto">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <p class="text-sm">&copy; 2024 {{projectName}}. All rights reserved.</p>
      <div class="flex gap-5">
        <NuxtLink to="/" class="text-gray-400 text-sm hover:text-white transition-colors">Home</NuxtLink>
        <NuxtLink to="/projects" class="text-gray-400 text-sm hover:text-white transition-colors">Projects</NuxtLink>
        <NuxtLink to="/about" class="text-gray-400 text-sm hover:text-white transition-colors">About</NuxtLink>
        <NuxtLink to="/contact" class="text-gray-400 text-sm hover:text-white transition-colors">Contact</NuxtLink>
      </div>
    </div>
  </footer>
</template>
