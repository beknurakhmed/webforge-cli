<script setup lang="ts">
const experiences = [
  { role: 'Senior Frontend Developer', company: 'TechCorp', period: '2022 - Present', description: 'Leading the frontend architecture for a SaaS platform serving 100K+ users.' },
  { role: 'Full Stack Developer', company: 'StartupXYZ', period: '2020 - 2022', description: 'Built and maintained multiple web applications using Vue.js and Node.js.' },
  { role: 'Junior Developer', company: 'WebAgency', period: '2018 - 2020', description: 'Developed responsive websites and e-commerce solutions for clients.' },
];
</script>

<template>
  <div>
    <section class="bg-gradient-to-br from-gray-900 to-slate-800 text-white py-16 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col sm:flex-row items-start gap-8">
          <span class="text-7xl shrink-0">👨‍💻</span>
          <div>
            <h1 class="text-3xl sm:text-4xl font-bold mb-4">About Me</h1>
            <p class="text-gray-300 text-lg leading-relaxed mb-3">
              I'm a passionate full-stack developer with 6+ years of experience building
              web applications. I love turning complex problems into simple, elegant solutions
              and creating user experiences that delight.
            </p>
            <p class="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open source projects, or enjoying the outdoors.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-6">
      <div class="max-w-4xl mx-auto">
        <SkillsGrid />
      </div>
    </section>

    <section class="py-8 pb-16 px-6 bg-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
        <div class="relative pl-8 border-l-2 border-gray-200">
          <div v-for="exp in experiences" :key="exp.role" class="relative mb-8 last:mb-0">
            <div class="absolute -left-[calc(2rem+7px)] top-1 w-4 h-4 bg-indigo-600 rounded-full border-[3px] border-white shadow-[0_0_0_2px] shadow-indigo-600"></div>
            <div class="bg-gray-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ exp.role }}</h3>
              <p class="text-sm text-indigo-600 font-semibold mb-2">{{ exp.company }} &middot; {{ exp.period }}</p>
              <p class="text-sm text-gray-500 leading-relaxed">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
