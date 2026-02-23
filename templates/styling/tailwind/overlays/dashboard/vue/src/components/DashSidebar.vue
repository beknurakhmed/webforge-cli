<template>
  <aside class="w-full md:w-64 bg-gray-900 text-gray-300 flex flex-col md:min-h-screen md:sticky md:top-0">
    <div class="px-6 py-5 text-xl font-bold text-white border-b border-gray-800">{{projectName}}</div>
    <nav class="flex md:flex-col flex-row overflow-x-auto md:overflow-x-visible py-2 md:py-4 gap-1">
      <RouterLink to="/" class="flex items-center gap-3 px-6 py-3 text-gray-400 font-medium no-underline transition-all hover:bg-gray-800 hover:text-white [&.router-link-exact-active]:bg-indigo-600 [&.router-link-exact-active]:text-white">
        <span class="text-lg w-6 text-center">&#x1F4CA;</span> Overview
      </RouterLink>
      <RouterLink to="/analytics" class="flex items-center gap-3 px-6 py-3 text-gray-400 font-medium no-underline transition-all hover:bg-gray-800 hover:text-white [&.router-link-exact-active]:bg-indigo-600 [&.router-link-exact-active]:text-white">
        <span class="text-lg w-6 text-center">&#x1F4C8;</span> Analytics
      </RouterLink>
      <RouterLink to="/users" class="flex items-center gap-3 px-6 py-3 text-gray-400 font-medium no-underline transition-all hover:bg-gray-800 hover:text-white [&.router-link-exact-active]:bg-indigo-600 [&.router-link-exact-active]:text-white">
        <span class="text-lg w-6 text-center">&#x1F465;</span> Users
      </RouterLink>
      <RouterLink to="/settings" class="flex items-center gap-3 px-6 py-3 text-gray-400 font-medium no-underline transition-all hover:bg-gray-800 hover:text-white [&.router-link-exact-active]:bg-indigo-600 [&.router-link-exact-active]:text-white">
        <span class="text-lg w-6 text-center">&#x2699;&#xFE0F;</span> Settings
      </RouterLink>
    </nav>
  </aside>
</template>
