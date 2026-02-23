<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const sent = ref(false)

const submit = () => {
  if (name.value && email.value && message.value) {
    sent.value = true
    name.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''
    setTimeout(() => (sent.value = false), 3000)
  }
}
</script>

<template>
  <div class="max-w-lg mx-auto py-12 px-6">
    <h1 class="text-2xl font-bold text-gray-900 text-center mb-2">Get In Touch</h1>
    <p class="text-center text-gray-500 mb-8">Have a project in mind? Let's work together.</p>
    <div class="bg-white p-6 rounded-lg shadow-sm">
      <div class="mb-5">
        <label class="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
        <input v-model="name" type="text" placeholder="Your name" class="w-full py-2.5 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-600 transition-colors" />
      </div>
      <div class="mb-5">
        <label class="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
        <input v-model="email" type="email" placeholder="your@email.com" class="w-full py-2.5 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-600 transition-colors" />
      </div>
      <div class="mb-5">
        <label class="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
        <input v-model="subject" type="text" placeholder="Project inquiry" class="w-full py-2.5 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-600 transition-colors" />
      </div>
      <div class="mb-5">
        <label class="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
        <textarea v-model="message" placeholder="Tell me about your project..." class="w-full py-2.5 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-600 transition-colors resize-y min-h-[120px]"></textarea>
      </div>
      <button class="w-full bg-indigo-600 text-white border-none py-3 rounded-md text-sm font-semibold cursor-pointer transition-colors hover:bg-indigo-700" @click="submit">Send Message</button>
      <p v-if="sent" class="text-emerald-600 text-center mt-3 text-sm">Message sent! I'll get back to you soon.</p>
    </div>
  </div>
</template>
