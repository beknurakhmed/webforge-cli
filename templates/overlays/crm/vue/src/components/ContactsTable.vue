<script setup lang="ts">
import type { Contact } from '../data'

defineProps<{ contacts: Contact[] }>()
</script>

<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>Phone</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.id">
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.company }}</td>
          <td>{{ contact.phone }}</td>
          <td><span class="status-badge" :class="contact.status">{{ contact.status }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
