<script setup lang="ts">
const form = reactive({
  companyName: '{{projectName}}',
  email: 'admin@example.com',
  currency: 'USD',
  dealRotting: '30',
  notifications: true,
  autoAssign: false,
});

function handleSave() {
  alert('Settings saved successfully!');
}
</script>

<template>
  <div class="settings-page">
    <div class="page-header">
      <h1>Settings</h1>
      <p class="subtitle">Configure your CRM preferences.</p>
    </div>

    <form class="settings-form" @submit.prevent="handleSave">
      <div class="form-card">
        <h2 class="form-section-title">General</h2>

        <div class="form-group">
          <label for="companyName">Company Name</label>
          <input id="companyName" v-model="form.companyName" type="text" class="form-input" />
        </div>

        <div class="form-group">
          <label for="email">Admin Email</label>
          <input id="email" v-model="form.email" type="email" class="form-input" />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="currency">Currency</label>
            <select id="currency" v-model="form.currency" class="form-input">
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (&euro;)</option>
              <option value="GBP">GBP (&pound;)</option>
            </select>
          </div>

          <div class="form-group">
            <label for="dealRotting">Deal Rotting (days)</label>
            <input id="dealRotting" v-model="form.dealRotting" type="number" class="form-input" />
          </div>
        </div>
      </div>

      <div class="form-card">
        <h2 class="form-section-title">Automation</h2>

        <div class="toggle-group">
          <div class="toggle-info">
            <span class="toggle-label">Email Notifications</span>
            <span class="toggle-desc">Get notified about deal updates and new contacts.</span>
          </div>
          <label class="toggle-switch">
            <input v-model="form.notifications" type="checkbox" />
            <span class="toggle-slider"></span>
          </label>
        </div>

        <div class="toggle-group">
          <div class="toggle-info">
            <span class="toggle-label">Auto-Assign Leads</span>
            <span class="toggle-desc">Automatically assign new leads to sales reps.</span>
          </div>
          <label class="toggle-switch">
            <input v-model="form.autoAssign" type="checkbox" />
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <button type="submit" class="save-btn">Save Changes</button>
    </form>
  </div>
</template>

<style scoped>
.page-header {
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 1.75rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.subtitle {
  color: #6b7280;
}

.settings-form {
  max-width: 700px;
}

.form-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-bottom: 1.25rem;
}

.form-section-title {
  font-size: 1.15rem;
  color: #111827;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.35rem;
}

.form-input {
  width: 100%;
  padding: 0.65rem 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.toggle-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.toggle-group:last-child {
  border-bottom: none;
}

.toggle-label {
  font-weight: 600;
  color: #111827;
  font-size: 0.95rem;
  display: block;
}

.toggle-desc {
  font-size: 0.8rem;
  color: #6b7280;
}

.toggle-switch {
  position: relative;
  width: 48px;
  height: 26px;
  cursor: pointer;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  inset: 0;
  background: #d1d5db;
  border-radius: 26px;
  transition: background 0.2s;
}

.toggle-slider::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  left: 3px;
  bottom: 3px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s;
}

.toggle-switch input:checked + .toggle-slider {
  background: #4f46e5;
}

.toggle-switch input:checked + .toggle-slider::before {
  transform: translateX(22px);
}

.save-btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.save-btn:hover {
  background: #4338ca;
}
</style>
