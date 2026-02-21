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
    <div class="page-header">
      <h1>Contacts</h1>
      <p>Manage your contacts and leads</p>
    </div>
    <input v-model="search" class="search-input" placeholder="Search contacts..." />
    <ContactsTable :contacts="filtered" />
  </div>
</template>
