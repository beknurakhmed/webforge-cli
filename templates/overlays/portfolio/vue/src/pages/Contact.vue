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
  <div class="contact-section">
    <h1>Get In Touch</h1>
    <p class="contact-subtitle">Have a project in mind? Let's work together.</p>
    <div class="contact-form">
      <div class="form-group">
        <label>Name</label>
        <input v-model="name" type="text" placeholder="Your name" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input v-model="email" type="email" placeholder="your@email.com" />
      </div>
      <div class="form-group">
        <label>Subject</label>
        <input v-model="subject" type="text" placeholder="Project inquiry" />
      </div>
      <div class="form-group">
        <label>Message</label>
        <textarea v-model="message" placeholder="Tell me about your project..."></textarea>
      </div>
      <button class="btn-primary" @click="submit">Send Message</button>
      <p v-if="sent" style="color: #059669; text-align: center; margin-top: 0.75rem; font-size: 0.9rem;">Message sent! I'll get back to you soon.</p>
    </div>
  </div>
</template>
