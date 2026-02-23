<script setup lang="ts">
const features = [
  { icon: '\u26A1', title: 'Lightning Fast', description: 'Optimized for performance with lazy loading and code splitting.' },
  { icon: '\uD83C\uDFA8', title: 'Beautiful Design', description: 'Clean, modern UI with responsive layouts.' },
  { icon: '\uD83D\uDD12', title: 'Secure by Default', description: 'Built with security best practices.' },
  { icon: '\uD83E\uDDE9', title: 'Modular Architecture', description: 'Component-based structure for easy customization.' },
  { icon: '\uD83D\uDCF1', title: 'Mobile First', description: 'Designed for mobile, scaled up for desktop.' },
  { icon: '\uD83D\uDE80', title: 'Easy Deployment', description: 'Deploy anywhere in minutes.' },
];
</script>

<template>
  <section id="features" class="py-20 px-8 max-w-6xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Features</h2>
    <p class="text-gray-500 text-lg mb-12">Everything you need to build a modern web application</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      <div v-for="(f, i) in features" :key="i" class="p-8 rounded-xl border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-0.5">
        <span class="text-3xl block mb-4">{{ f.icon }}</span>
        <h3 class="text-xl font-semibold mb-2 text-gray-900">{{ f.title }}</h3>
        <p class="text-gray-500 leading-relaxed">{{ f.description }}</p>
      </div>
    </div>
  </section>
</template>
