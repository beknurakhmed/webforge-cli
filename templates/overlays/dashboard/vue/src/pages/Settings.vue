<script setup lang="ts">
import { ref } from 'vue';

const siteName = ref('{{projectName}}');
const email = ref('admin@example.com');
const timezone = ref('UTC');
const notifications = ref(true);
const darkMode = ref(false);
const twoFactor = ref(true);
</script>

<template>
  <div>
    <div class="page-header">
      <h1 class="page-title">Settings</h1>
      <p class="page-subtitle">Manage your application preferences.</p>
    </div>
    <div class="settings-form">
      <div class="form-group">
        <label class="form-label">Site Name</label>
        <input v-model="siteName" type="text" class="form-input" />
      </div>
      <div class="form-group">
        <label class="form-label">Admin Email</label>
        <input v-model="email" type="email" class="form-input" />
      </div>
      <div class="form-group">
        <label class="form-label">Timezone</label>
        <select v-model="timezone" class="form-select">
          <option value="UTC">UTC</option>
          <option value="EST">Eastern (EST)</option>
          <option value="CST">Central (CST)</option>
          <option value="PST">Pacific (PST)</option>
        </select>
      </div>
      <div class="form-group">
        <div class="form-toggle">
          <div>
            <p class="toggle-label">Email Notifications</p>
            <p class="toggle-desc">Receive email alerts for important events</p>
          </div>
          <input v-model="notifications" type="checkbox" />
        </div>
        <div class="form-toggle">
          <div>
            <p class="toggle-label">Dark Mode</p>
            <p class="toggle-desc">Use dark theme across the dashboard</p>
          </div>
          <input v-model="darkMode" type="checkbox" />
        </div>
        <div class="form-toggle">
          <div>
            <p class="toggle-label">Two-Factor Auth</p>
            <p class="toggle-desc">Add an extra layer of security</p>
          </div>
          <input v-model="twoFactor" type="checkbox" />
        </div>
      </div>
      <div class="form-actions">
        <button class="btn-primary">Save Changes</button>
        <button class="btn-secondary">Cancel</button>
      </div>
    </div>
  </div>
</template>
