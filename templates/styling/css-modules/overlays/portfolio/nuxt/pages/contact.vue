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
  <div :class="$style.contactPage">
    <div :class="$style.pageInner">
      <div :class="$style.pageHeader">
        <h1>Get in Touch</h1>
        <p :class="$style.subtitle">Have a project in mind? Let's talk about it.</p>
      </div>

      <div :class="$style.contactLayout">
        <form :class="$style.contactForm" @submit.prevent="handleSubmit">
          <div v-if="submitted" :class="$style.successMessage">
            <span :class="$style.successIcon">✅</span>
            <p>Thank you! Your message has been sent successfully.</p>
          </div>

          <template v-else>
            <div :class="$style.formRow">
              <div :class="$style.formGroup">
                <label for="name">Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Your name"
                  :class="$style.formInput"
                  required
                />
              </div>
              <div :class="$style.formGroup">
                <label for="email">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="your@email.com"
                  :class="$style.formInput"
                  required
                />
              </div>
            </div>

            <div :class="$style.formGroup">
              <label for="subject">Subject</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                placeholder="Project inquiry"
                :class="$style.formInput"
                required
              />
            </div>

            <div :class="$style.formGroup">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                placeholder="Tell me about your project..."
                :class="$style.formInput"
                required
              ></textarea>
            </div>

            <button type="submit" :class="$style.submitBtn">Send Message</button>
          </template>
        </form>

        <div :class="$style.contactInfo">
          <h2>Contact Info</h2>
          <div :class="$style.infoList">
            <div v-for="info in contactInfo" :key="info.label" :class="$style.infoItem">
              <span :class="$style.infoIcon">{{ info.icon }}</span>
              <div>
                <p :class="$style.infoLabel">{{ info.label }}</p>
                <p :class="$style.infoValue">{{ info.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.contactPage {
  padding: 2rem 1.5rem 4rem;
}

.pageInner {
  max-width: 1000px;
  margin: 0 auto;
}

.pageHeader {
  text-align: center;
  margin-bottom: 2.5rem;
}

.pageHeader h1 {
  font-size: 2rem;
  color: #111827;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #6b7280;
  font-size: 1.1rem;
}

.contactLayout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2.5rem;
  align-items: start;
}

.contactForm {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.successMessage {
  text-align: center;
  padding: 2rem;
}

.successIcon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

.successMessage p {
  font-size: 1.1rem;
  color: #065f46;
  font-weight: 500;
}

.formRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.formGroup {
  margin-bottom: 1.25rem;
}

.formGroup label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.35rem;
}

.formInput {
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

.formInput:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.submitBtn {
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

.submitBtn:hover {
  background: #4338ca;
}

.contactInfo {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.contactInfo h2 {
  font-size: 1.25rem;
  color: #111827;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e5e7eb;
}

.infoList {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.infoItem {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.infoIcon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.infoLabel {
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;
}

.infoValue {
  font-size: 0.95rem;
  color: #111827;
  font-weight: 600;
}

@media (max-width: 768px) {
  .contactLayout {
    grid-template-columns: 1fr;
  }

  .formRow {
    grid-template-columns: 1fr;
  }
}
</style>
