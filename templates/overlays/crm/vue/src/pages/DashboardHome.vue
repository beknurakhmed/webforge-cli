<script setup lang="ts">
import StatsCards from '../components/StatsCards.vue'
import ContactsTable from '../components/ContactsTable.vue'
import { contacts } from '../data'

const recentContacts = contacts.slice(0, 5)
</script>

<template>
  <div>
    <div class="page-header">
      <h1>Dashboard</h1>
      <p>Overview of your CRM activity</p>
    </div>
    <StatsCards :contacts="contacts" />
    <h2 style="font-size: 1.1rem; color: #111827; margin-bottom: 0.75rem;">Recent Contacts</h2>
    <ContactsTable :contacts="recentContacts" />
  </div>
</template>
