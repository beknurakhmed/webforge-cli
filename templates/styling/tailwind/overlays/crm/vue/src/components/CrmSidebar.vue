<script setup lang="ts">
</script>

<template>
  <aside class="w-full md:w-60 bg-gray-900 text-white flex flex-col md:min-h-screen">
    <div class="text-xl font-bold px-6 pb-6 pt-6 border-b border-gray-800">{{projectName}}</div>
    <nav class="flex md:flex-col flex-row overflow-x-auto md:overflow-x-visible py-4 gap-1">
      <RouterLink to="/" class="flex items-center gap-3 px-6 py-3 text-gray-400 text-sm no-underline transition-all hover:bg-gray-800 hover:text-white [&.router-link-exact-active]:bg-gray-800 [&.router-link-exact-active]:text-white [&.router-link-exact-active]:border-l-[3px] [&.router-link-exact-active]:border-indigo-600">&#x1F4CA; Dashboard</RouterLink>
      <RouterLink to="/contacts" class="flex items-center gap-3 px-6 py-3 text-gray-400 text-sm no-underline transition-all hover:bg-gray-800 hover:text-white [&.router-link-exact-active]:bg-gray-800 [&.router-link-exact-active]:text-white [&.router-link-exact-active]:border-l-[3px] [&.router-link-exact-active]:border-indigo-600">&#x1F464; Contacts</RouterLink>
      <RouterLink to="/deals" class="flex items-center gap-3 px-6 py-3 text-gray-400 text-sm no-underline transition-all hover:bg-gray-800 hover:text-white [&.router-link-exact-active]:bg-gray-800 [&.router-link-exact-active]:text-white [&.router-link-exact-active]:border-l-[3px] [&.router-link-exact-active]:border-indigo-600">&#x1F4BC; Deals</RouterLink>
      <RouterLink to="/settings" class="flex items-center gap-3 px-6 py-3 text-gray-400 text-sm no-underline transition-all hover:bg-gray-800 hover:text-white [&.router-link-exact-active]:bg-gray-800 [&.router-link-exact-active]:text-white [&.router-link-exact-active]:border-l-[3px] [&.router-link-exact-active]:border-indigo-600">&#x2699;&#xFE0F; Settings</RouterLink>
    </nav>
  </aside>
</template>
