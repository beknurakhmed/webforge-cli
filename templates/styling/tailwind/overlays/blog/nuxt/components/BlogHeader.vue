<template>
  <header class="bg-gray-900 text-white px-4 sticky top-0 z-50 shadow-lg">
    <div class="max-w-5xl mx-auto flex items-center justify-between h-16">
      <NuxtLink to="/" class="text-xl font-bold text-white">📝 {{projectName}}</NuxtLink>
      <nav class="flex gap-6">
        <NuxtLink to="/" class="text-gray-300 font-medium hover:text-white transition-colors">Home</NuxtLink>
        <NuxtLink to="/about" class="text-gray-300 font-medium hover:text-white transition-colors">About</NuxtLink>
      </nav>
    </div>
  </header>
</template>
