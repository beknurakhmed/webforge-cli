<template>
  <footer class="bg-gray-900 text-gray-400 py-6 px-4 mt-auto">
    <div class="max-w-5xl mx-auto flex items-center justify-between">
      <p class="text-sm">&copy; 2024 {{projectName}}. All rights reserved.</p>
      <div class="flex gap-5">
        <NuxtLink to="/" class="text-gray-400 text-sm hover:text-white transition-colors">Home</NuxtLink>
        <NuxtLink to="/about" class="text-gray-400 text-sm hover:text-white transition-colors">About</NuxtLink>
      </div>
    </div>
  </footer>
</template>
