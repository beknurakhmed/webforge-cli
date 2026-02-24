<script setup lang="ts">
import StatsCards from '../components/StatsCards.vue'
import ContactsTable from '../components/ContactsTable.vue'
import { contacts } from '../data'

const recentContacts = contacts.slice(0, 5)
</script>

<template>
  <div>
    <div :class="$style.pageHeader">
      <h1>Dashboard</h1>
      <p>Overview of your CRM activity</p>
    </div>
    <StatsCards :contacts="contacts" />
    <h2 :class="$style.sectionTitle">Recent Contacts</h2>
    <ContactsTable :contacts="recentContacts" />
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

.sectionTitle {
  font-size: 1.1rem;
  color: #111827;
  margin-bottom: 0.75rem;
}
</style>
