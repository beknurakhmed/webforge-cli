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
  <div class="contact-page">
    <div class="page-inner">
      <div class="page-header">
        <h1>Get in Touch</h1>
        <p class="subtitle">Have a project in mind? Let's talk about it.</p>
      </div>

      <div class="contact-layout">
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div v-if="submitted" class="success-message">
            <span class="success-icon">✅</span>
            <p>Thank you! Your message has been sent successfully.</p>
          </div>

          <template v-else>
            <div class="form-row">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Your name"
                  class="form-input"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="your@email.com"
                  class="form-input"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                placeholder="Project inquiry"
                class="form-input"
                required
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                placeholder="Tell me about your project..."
                class="form-input"
                required
              ></textarea>
            </div>

            <button type="submit" class="submit-btn">Send Message</button>
          </template>
        </form>

        <div class="contact-info">
          <h2>Contact Info</h2>
          <div class="info-list">
            <div v-for="info in contactInfo" :key="info.label" class="info-item">
              <span class="info-icon">{{ info.icon }}</span>
              <div>
                <p class="info-label">{{ info.label }}</p>
                <p class="info-value">{{ info.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  padding: 2rem 1.5rem 4rem;
}

.page-inner {
  max-width: 1000px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.page-header h1 {
  font-size: 2rem;
  color: #111827;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #6b7280;
  font-size: 1.1rem;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2.5rem;
  align-items: start;
}

.contact-form {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.success-message {
  text-align: center;
  padding: 2rem;
}

.success-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

.success-message p {
  font-size: 1.1rem;
  color: #065f46;
  font-weight: 500;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.35rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
  resize: vertical;
}

.form-input:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.submit-btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;
}

.submit-btn:hover {
  background: #4338ca;
}

.contact-info {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.contact-info h2 {
  font-size: 1.25rem;
  color: #111827;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e5e7eb;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.info-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.info-label {
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;
}

.info-value {
  font-size: 0.95rem;
  color: #111827;
  font-weight: 600;
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
