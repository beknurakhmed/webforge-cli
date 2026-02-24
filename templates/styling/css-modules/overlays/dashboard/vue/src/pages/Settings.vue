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
    <div :class="$style.pageHeader">
      <h1 :class="$style.pageTitle">Settings</h1>
      <p :class="$style.pageSubtitle">Manage your application preferences.</p>
    </div>
    <div :class="$style.settingsForm">
      <div :class="$style.formGroup">
        <label :class="$style.formLabel">Site Name</label>
        <input v-model="siteName" type="text" :class="$style.formInput" />
      </div>
      <div :class="$style.formGroup">
        <label :class="$style.formLabel">Admin Email</label>
        <input v-model="email" type="email" :class="$style.formInput" />
      </div>
      <div :class="$style.formGroup">
        <label :class="$style.formLabel">Timezone</label>
        <select v-model="timezone" :class="$style.formSelect">
          <option value="UTC">UTC</option>
          <option value="EST">Eastern (EST)</option>
          <option value="CST">Central (CST)</option>
          <option value="PST">Pacific (PST)</option>
        </select>
      </div>
      <div :class="$style.formGroup">
        <div :class="$style.formToggle">
          <div>
            <p :class="$style.toggleLabel">Email Notifications</p>
            <p :class="$style.toggleDesc">Receive email alerts for important events</p>
          </div>
          <input v-model="notifications" type="checkbox" />
        </div>
        <div :class="$style.formToggle">
          <div>
            <p :class="$style.toggleLabel">Dark Mode</p>
            <p :class="$style.toggleDesc">Use dark theme across the dashboard</p>
          </div>
          <input v-model="darkMode" type="checkbox" />
        </div>
        <div :class="$style.formToggle">
          <div>
            <p :class="$style.toggleLabel">Two-Factor Auth</p>
            <p :class="$style.toggleDesc">Add an extra layer of security</p>
          </div>
          <input v-model="twoFactor" type="checkbox" />
        </div>
      </div>
      <div :class="$style.formActions">
        <button :class="$style.btnPrimary">Save Changes</button>
        <button :class="$style.btnSecondary">Cancel</button>
      </div>
    </div>
  </div>
</template>

<style module>
.pageHeader {
  margin-bottom: 2rem;
}

.pageTitle {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
}

.pageSubtitle {
  color: #6b7280;
  margin-top: 0.25rem;
}

.settingsForm {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
}

.formGroup {
  margin-bottom: 1.5rem;
}

.formLabel {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}

.formInput {
  width: 100%;
  padding: 0.65rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #374151;
}

.formInput:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.formSelect {
  width: 100%;
  padding: 0.65rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #374151;
  background: #ffffff;
}

.formToggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.toggleLabel {
  font-weight: 500;
  color: #374151;
}

.toggleDesc {
  font-size: 0.85rem;
  color: #6b7280;
}

.btnPrimary {
  background: #4f46e5;
  color: #ffffff;
  border: none;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;
}

.btnPrimary:hover {
  background: #4338ca;
}

.btnSecondary {
  background: #ffffff;
  color: #374151;
  border: 1px solid #d1d5db;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: background 0.2s;
}

.btnSecondary:hover {
  background: #f9fafb;
}

.formActions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
