<script setup lang="ts">
const authors = [
  { name: 'Alex Rivera', role: 'Tech Lead & Writer', bio: 'Full-stack developer passionate about modern web technologies and teaching.', avatar: '👨‍💻' },
  { name: 'Sarah Chen', role: 'Design Editor', bio: 'UI/UX designer exploring the intersection of aesthetics and usability.', avatar: '👩‍🎨' },
  { name: 'Jordan Lee', role: 'Business & Lifestyle', bio: 'Entrepreneur and writer covering business strategy and digital wellness.', avatar: '🧑‍💼' },
];
</script>

<template>
  <div>
    <div class="text-center py-8 pb-12 max-w-2xl mx-auto">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About {{projectName}}</h1>
      <p class="text-lg text-gray-500 leading-relaxed">
        We are a team of passionate writers and developers sharing insights about
        technology, design, business, and modern living. Our mission is to provide
        thoughtful, practical content that helps you grow professionally and personally.
      </p>
    </div>

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Our Writers</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="author in authors" :key="author.name" class="bg-white rounded-xl p-8 text-center shadow-sm">
          <span class="text-5xl block mb-4">{{ author.avatar }}</span>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ author.name }}</h3>
          <p class="text-sm text-indigo-600 font-semibold mb-3">{{ author.role }}</p>
          <p class="text-sm text-gray-500 leading-relaxed">{{ author.bio }}</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl p-8 text-center shadow-sm">
          <span class="text-4xl block mb-4">📚</span>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Quality Content</h3>
          <p class="text-sm text-gray-500 leading-relaxed">Well-researched, in-depth articles that provide real value to our readers.</p>
        </div>
        <div class="bg-white rounded-xl p-8 text-center shadow-sm">
          <span class="text-4xl block mb-4">🌍</span>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Community</h3>
          <p class="text-sm text-gray-500 leading-relaxed">Building a community of learners who share knowledge and support each other.</p>
        </div>
        <div class="bg-white rounded-xl p-8 text-center shadow-sm">
          <span class="text-4xl block mb-4">💡</span>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
          <p class="text-sm text-gray-500 leading-relaxed">Staying at the forefront of technology and sharing insights from the cutting edge.</p>
        </div>
      </div>
    </section>
  </div>
</template>
