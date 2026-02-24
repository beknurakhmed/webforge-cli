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
  <div :class="$style.contactSection">
    <h1>Get In Touch</h1>
    <p :class="$style.contactSubtitle">Have a project in mind? Let's work together.</p>
    <div :class="$style.contactForm">
      <div :class="$style.formGroup">
        <label>Name</label>
        <input v-model="name" type="text" placeholder="Your name" />
      </div>
      <div :class="$style.formGroup">
        <label>Email</label>
        <input v-model="email" type="email" placeholder="your@email.com" />
      </div>
      <div :class="$style.formGroup">
        <label>Subject</label>
        <input v-model="subject" type="text" placeholder="Project inquiry" />
      </div>
      <div :class="$style.formGroup">
        <label>Message</label>
        <textarea v-model="message" placeholder="Tell me about your project..."></textarea>
      </div>
      <button :class="$style.btnPrimary" @click="submit">Send Message</button>
      <p v-if="sent" style="color: #059669; text-align: center; margin-top: 0.75rem; font-size: 0.9rem;">Message sent! I'll get back to you soon.</p>
    </div>
  </div>
</template>

<style module>
.contactSection {
  max-width: 560px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.contactSection h1 {
  font-size: 1.75rem;
  color: #111827;
  text-align: center;
  margin-bottom: 0.5rem;
}

.contactSubtitle {
  text-align: center;
  color: #6b7280;
  margin-bottom: 2rem;
}

.contactForm {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.formGroup {
  margin-bottom: 1.25rem;
}

.formGroup label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.4rem;
}

.formGroup input,
.formGroup textarea {
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
}

.formGroup input:focus,
.formGroup textarea:focus {
  border-color: #4f46e5;
}

.formGroup textarea {
  resize: vertical;
  min-height: 120px;
}

.btnPrimary {
  width: 100%;
  background: #4f46e5;
  color: #fff;
  border: none;
  padding: 0.7rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btnPrimary:hover {
  background: #4338ca;
}
</style>
