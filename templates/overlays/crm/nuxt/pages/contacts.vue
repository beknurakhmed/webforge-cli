<script setup lang="ts">
const search = ref('');
</script>

<template>
  <div class="contacts-page">
    <div class="page-header">
      <div>
        <h1>Contacts</h1>
        <p class="subtitle">Manage your customer relationships.</p>
      </div>
      <button class="add-btn">+ Add Contact</button>
    </div>

    <div class="search-bar">
      <input
        v-model="search"
        type="text"
        placeholder="Search contacts..."
        class="search-input"
      />
    </div>

    <ContactsTable :search-query="search" />
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.page-header h1 {
  font-size: 1.75rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.subtitle {
  color: #6b7280;
}

.add-btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.add-btn:hover {
  background: #4338ca;
}

.search-bar {
  margin-bottom: 1.25rem;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 0.65rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
}

.search-input:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}
</style>
