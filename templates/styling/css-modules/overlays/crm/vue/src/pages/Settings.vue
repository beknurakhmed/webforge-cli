<script setup lang="ts">
import { ref } from 'vue'

const companyName = ref('My Company')
const email = ref('admin@company.com')
const saved = ref(false)

const save = () => {
  saved.value = true
  setTimeout(() => (saved.value = false), 2000)
}
</script>

<template>
  <div>
    <div :class="$style.pageHeader">
      <h1>Settings</h1>
      <p>Manage your CRM preferences</p>
    </div>
    <div :class="$style.settingsForm">
      <div :class="$style.formGroup">
        <label>Company Name</label>
        <input v-model="companyName" type="text" />
      </div>
      <div :class="$style.formGroup">
        <label>Email Address</label>
        <input v-model="email" type="email" />
      </div>
      <button :class="$style.btnPrimary" @click="save">Save Changes</button>
      <p v-if="saved" style="color: #059669; margin-top: 0.75rem; font-size: 0.85rem;">Settings saved successfully!</p>
    </div>
  </div>
</template>

<style module>
.pageHeader {
  margin-bottom: 1.5rem;
}

.pageHeader h1 {
  font-size: 1.5rem;
  color: #111827;
  font-weight: 700;
}

.pageHeader p {
  color: #6b7280;
  font-size: 0.9rem;
}

.settingsForm {
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  max-width: 500px;
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

.formGroup input {
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9rem;
  outline: none;
}

.formGroup input:focus {
  border-color: #4f46e5;
}

.btnPrimary {
  background: #4f46e5;
  color: #fff;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btnPrimary:hover {
  background: #4338ca;
}
</style>
