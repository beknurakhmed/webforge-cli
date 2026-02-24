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
  <div>
    <div :class="$style.pageHeader">
      <h1>Settings</h1>
      <p :class="$style.subtitle">Configure your CRM preferences.</p>
    </div>

    <form :class="$style.settingsForm" @submit.prevent="handleSave">
      <div :class="$style.formCard">
        <h2 :class="$style.formSectionTitle">General</h2>
        <div :class="$style.formGroup">
          <label for="companyName">Company Name</label>
          <input id="companyName" v-model="form.companyName" type="text" :class="$style.formInput" />
        </div>
        <div :class="$style.formGroup">
          <label for="email">Admin Email</label>
          <input id="email" v-model="form.email" type="email" :class="$style.formInput" />
        </div>
        <div :class="$style.formRow">
          <div :class="$style.formGroup">
            <label for="currency">Currency</label>
            <select id="currency" v-model="form.currency" :class="$style.formInput">
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (&euro;)</option>
              <option value="GBP">GBP (&pound;)</option>
            </select>
          </div>
          <div :class="$style.formGroup">
            <label for="dealRotting">Deal Rotting (days)</label>
            <input id="dealRotting" v-model="form.dealRotting" type="number" :class="$style.formInput" />
          </div>
        </div>
      </div>

      <div :class="$style.formCard">
        <h2 :class="$style.formSectionTitle">Automation</h2>
        <div :class="$style.toggleGroup">
          <div><span :class="$style.toggleLabel">Email Notifications</span><span :class="$style.toggleDesc">Get notified about deal updates and new contacts.</span></div>
          <label :class="$style.toggleSwitch"><input v-model="form.notifications" type="checkbox" /><span :class="$style.toggleSlider"></span></label>
        </div>
        <div :class="$style.toggleGroup">
          <div><span :class="$style.toggleLabel">Auto-Assign Leads</span><span :class="$style.toggleDesc">Automatically assign new leads to sales reps.</span></div>
          <label :class="$style.toggleSwitch"><input v-model="form.autoAssign" type="checkbox" /><span :class="$style.toggleSlider"></span></label>
        </div>
      </div>

      <button type="submit" :class="$style.saveBtn">Save Changes</button>
    </form>
  </div>
</template>

<style module>
.pageHeader { margin-bottom: 2rem; }
.pageHeader h1 { font-size: 1.75rem; color: #111827; margin-bottom: 0.25rem; }
.subtitle { color: #6b7280; }
.settingsForm { max-width: 700px; }
.formCard { background: white; border-radius: 10px; padding: 1.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); margin-bottom: 1.25rem; }
.formSectionTitle { font-size: 1.15rem; color: #111827; margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb; }
.formGroup { margin-bottom: 1.25rem; }
.formGroup label { display: block; font-size: 0.875rem; font-weight: 600; color: #374151; margin-bottom: 0.35rem; }
.formInput { width: 100%; padding: 0.65rem 0.875rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.95rem; outline: none; transition: border-color 0.2s; }
.formInput:focus { border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
.formRow { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.toggleGroup { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid #f3f4f6; }
.toggleGroup:last-child { border-bottom: none; }
.toggleLabel { font-weight: 600; color: #111827; font-size: 0.95rem; display: block; }
.toggleDesc { font-size: 0.8rem; color: #6b7280; }
.toggleSwitch { position: relative; width: 48px; height: 26px; cursor: pointer; }
.toggleSwitch input { opacity: 0; width: 0; height: 0; }
.toggleSlider { position: absolute; inset: 0; background: #d1d5db; border-radius: 26px; transition: background 0.2s; }
.toggleSlider::before { content: ''; position: absolute; width: 20px; height: 20px; left: 3px; bottom: 3px; background: white; border-radius: 50%; transition: transform 0.2s; }
.toggleSwitch input:checked + .toggleSlider { background: #4f46e5; }
.toggleSwitch input:checked + .toggleSlider::before { transform: translateX(22px); }
.saveBtn { background: #4f46e5; color: white; border: none; padding: 0.75rem 2rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: background 0.2s; }
.saveBtn:hover { background: #4338ca; }
</style>
