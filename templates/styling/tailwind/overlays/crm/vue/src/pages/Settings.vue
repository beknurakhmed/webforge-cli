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
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Settings</h1>
      <p class="text-gray-500 text-sm">Manage your CRM preferences</p>
    </div>
    <div class="bg-white rounded-lg p-6 max-w-lg shadow-sm">
      <div class="mb-5">
        <label class="block text-sm font-semibold text-gray-700 mb-1.5">Company Name</label>
        <input v-model="companyName" type="text" class="w-full py-2.5 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-600 transition-colors" />
      </div>
      <div class="mb-5">
        <label class="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
        <input v-model="email" type="email" class="w-full py-2.5 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-600 transition-colors" />
      </div>
      <button class="bg-indigo-600 text-white border-none py-2.5 px-6 rounded-md text-sm font-semibold cursor-pointer transition-colors hover:bg-indigo-700" @click="save">Save Changes</button>
      <p v-if="saved" class="text-emerald-600 mt-3 text-sm">Settings saved successfully!</p>
    </div>
  </div>
</template>
