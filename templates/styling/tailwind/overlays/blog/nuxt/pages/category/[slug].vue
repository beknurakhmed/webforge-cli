<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const posts = [
  { id: 1, title: 'Getting Started with Vue 3 Composition API', excerpt: 'Learn the fundamentals of Vue 3 Composition API and how it transforms the way we build components.', date: 'Jan 15, 2024', author: 'Alex Rivera', category: 'Technology', image: '💻', readTime: '5 min read' },
  { id: 2, title: 'Modern UI Design Principles', excerpt: 'Explore the key principles that make modern user interfaces intuitive, beautiful, and accessible.', date: 'Jan 12, 2024', author: 'Sarah Chen', category: 'Design', image: '🎨', readTime: '4 min read' },
  { id: 3, title: 'Building Scalable Web Applications', excerpt: 'Best practices for building web applications that scale from hundreds to millions of users.', date: 'Jan 10, 2024', author: 'Alex Rivera', category: 'Technology', image: '🏗️', readTime: '7 min read' },
  { id: 4, title: 'The Future of Remote Work', excerpt: 'How remote work is reshaping the business landscape and what it means for teams worldwide.', date: 'Jan 8, 2024', author: 'Jordan Lee', category: 'Business', image: '🏠', readTime: '6 min read' },
  { id: 5, title: 'Color Theory for Developers', excerpt: 'A practical guide to using color effectively in your web projects without being a designer.', date: 'Jan 5, 2024', author: 'Sarah Chen', category: 'Design', image: '🌈', readTime: '5 min read' },
  { id: 6, title: 'Startup Lessons Learned', excerpt: 'Key takeaways from building and growing a tech startup in a competitive market.', date: 'Jan 3, 2024', author: 'Jordan Lee', category: 'Business', image: '🚀', readTime: '8 min read' },
  { id: 7, title: 'TypeScript Best Practices', excerpt: 'Write cleaner, safer code with these TypeScript patterns and conventions used by top teams.', date: 'Jan 1, 2024', author: 'Alex Rivera', category: 'Technology', image: '📘', readTime: '6 min read' },
  { id: 8, title: 'Digital Minimalism', excerpt: 'How simplifying your digital life can boost productivity and improve well-being.', date: 'Dec 28, 2023', author: 'Jordan Lee', category: 'Lifestyle', image: '🧘', readTime: '4 min read' },
];

const categoryName = computed(() => {
  const s = slug.toString();
  return s.charAt(0).toUpperCase() + s.slice(1);
});

const filteredPosts = computed(() =>
  posts.filter(p => p.category.toLowerCase() === slug.toString().toLowerCase())
);
</script>

<template>
  <div>
    <NuxtLink to="/" class="inline-block text-indigo-600 font-medium mb-6 hover:underline">← All Posts</NuxtLink>

    <h1 class="text-3xl font-bold text-gray-900 mb-1">{{ categoryName }}</h1>
    <p class="text-gray-500 mb-8">{{ filteredPosts.length }} post{{ filteredPosts.length !== 1 ? 's' : '' }} in this category</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <PostCard v-for="post in filteredPosts" :key="post.id" :post="post" />
    </div>

    <p v-if="filteredPosts.length === 0" class="text-center text-gray-500 py-12 text-lg">
      No posts found in this category.
    </p>
  </div>
</template>
