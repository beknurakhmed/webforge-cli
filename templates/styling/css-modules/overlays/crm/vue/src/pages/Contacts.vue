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
    <div :class="$style.pageHeader">
      <h1>Contacts</h1>
      <p>Manage your contacts and leads</p>
    </div>
    <input v-model="search" :class="$style.searchInput" placeholder="Search contacts..." />
    <ContactsTable :contacts="filtered" />
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

.searchInput {
  width: 100%;
  max-width: 320px;
  padding: 0.6rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.searchInput:focus {
  border-color: #4f46e5;
}
</style>
