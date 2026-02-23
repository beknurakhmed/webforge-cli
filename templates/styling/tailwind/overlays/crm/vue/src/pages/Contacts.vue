<script setup lang="ts">
import { ref, computed } from 'vue'
import ContactsTable from '../components/ContactsTable.vue'
import { contacts } from '../data'

const search = ref('')

const filtered = computed(() =>
  contacts.filter(c =>
    c.name.toLowerCase().includes(search.value.toLowerCase()) ||
    c.company.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>

<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Contacts</h1>
      <p class="text-gray-500 text-sm">Manage your contacts and leads</p>
    </div>
    <input v-model="search" class="w-full max-w-xs py-2.5 px-4 border border-gray-300 rounded-md text-sm mb-4 focus:outline-none focus:border-indigo-600 transition-colors" placeholder="Search contacts..." />
    <ContactsTable :contacts="filtered" />
  </div>
</template>
