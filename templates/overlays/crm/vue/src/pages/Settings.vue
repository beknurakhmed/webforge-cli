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
    <div class="page-header">
      <h1>Settings</h1>
      <p>Manage your CRM preferences</p>
    </div>
    <div class="settings-form">
      <div class="form-group">
        <label>Company Name</label>
        <input v-model="companyName" type="text" />
      </div>
      <div class="form-group">
        <label>Email Address</label>
        <input v-model="email" type="email" />
      </div>
      <button class="btn-primary" @click="save">Save Changes</button>
      <p v-if="saved" style="color: #059669; margin-top: 0.75rem; font-size: 0.85rem;">Settings saved successfully!</p>
    </div>
  </div>
</template>
