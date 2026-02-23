<script setup lang="ts">
const features = [
  { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized for performance with lazy loading and code splitting.' },
  { icon: '🎨', title: 'Beautiful Design', desc: 'Clean, modern UI with responsive layouts.' },
  { icon: '🔒', title: 'Secure by Default', desc: 'Built with security best practices.' },
  { icon: '🧩', title: 'Modular Architecture', desc: 'Component-based structure for easy customization.' },
  { icon: '📱', title: 'Mobile First', desc: 'Designed for mobile, scaled up for desktop.' },
  { icon: '🚀', title: 'Easy Deployment', desc: 'Deploy anywhere in minutes.' },
];
</script>

<template>
  <section id="features" class="py-20 px-8 max-w-7xl mx-auto text-center">
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Features</h2>
    <p class="text-gray-500 mb-12">Everything you need to build a modern web application</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      <div v-for="(f, i) in features" :key="i" class="p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
        <span class="text-3xl block mb-4">{{ f.icon }}</span>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ f.title }}</h3>
        <p class="text-gray-500 leading-relaxed">{{ f.desc }}</p>
      </div>
    </div>
  </section>
</template>
