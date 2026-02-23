<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
  setTimeout(() => {
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
    submitted.value = false;
  }, 3000);
}

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'hello@example.com' },
  { icon: '📍', label: 'Location', value: 'San Francisco, CA' },
  { icon: '🔗', label: 'GitHub', value: 'github.com/developer' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/developer' },
];
</script>

<template>
  <div class="py-8 px-6 pb-16">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h1>
        <p class="text-gray-500 text-lg">Have a project in mind? Let's talk about it.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 items-start">
        <form class="bg-white rounded-xl p-8 shadow-sm" @submit.prevent="handleSubmit">
          <div v-if="submitted" class="text-center py-8">
            <span class="text-5xl block mb-4">✅</span>
            <p class="text-lg text-emerald-800 font-medium">Thank you! Your message has been sent successfully.</p>
          </div>

          <template v-else>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="mb-5">
                <label for="name" class="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Your name"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors"
                  required
                />
              </div>
              <div class="mb-5">
                <label for="email" class="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="your@email.com"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors"
                  required
                />
              </div>
            </div>

            <div class="mb-5">
              <label for="subject" class="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                placeholder="Project inquiry"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors"
                required
              />
            </div>

            <div class="mb-5">
              <label for="message" class="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                placeholder="Tell me about your project..."
                class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-[inherit] outline-none resize-y focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors"
                required
              ></textarea>
            </div>

            <button type="submit" class="w-full bg-indigo-600 text-white border-none py-3.5 rounded-lg text-base font-semibold cursor-pointer hover:bg-indigo-700 transition-colors">Send Message</button>
          </template>
        </form>

        <div class="bg-white rounded-xl p-8 shadow-sm">
          <h2 class="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">Contact Info</h2>
          <div class="flex flex-col gap-5">
            <div v-for="info in contactInfo" :key="info.label" class="flex items-center gap-4">
              <span class="text-2xl shrink-0">{{ info.icon }}</span>
              <div>
                <p class="text-xs text-gray-500 font-medium">{{ info.label }}</p>
                <p class="text-sm text-gray-900 font-semibold">{{ info.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
