<script setup lang="ts">
const search = ref('');
</script>

<template>
  <div>
    <div class="flex justify-between items-start mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 mb-1">Contacts</h1>
        <p class="text-gray-500">Manage your customer relationships.</p>
      </div>
      <button class="bg-indigo-600 text-white border-none px-5 py-2.5 rounded-lg font-semibold cursor-pointer hover:bg-indigo-700 transition-colors">+ Add Contact</button>
    </div>

    <div class="mb-5">
      <input
        v-model="search"
        type="text"
        placeholder="Search contacts..."
        class="w-full max-w-md px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
      />
    </div>

    <ContactsTable :search-query="search" />
  </div>
</template>
