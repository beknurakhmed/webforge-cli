<script setup lang="ts">
import StatsCards from '../components/StatsCards.vue'
import ContactsTable from '../components/ContactsTable.vue'
import { contacts } from '../data'

const recentContacts = contacts.slice(0, 5)
</script>

<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p class="text-gray-500 text-sm">Overview of your CRM activity</p>
    </div>
    <StatsCards :contacts="contacts" />
    <h2 class="text-lg font-semibold text-gray-900 mb-3">Recent Contacts</h2>
    <ContactsTable :contacts="recentContacts" />
  </div>
</template>
