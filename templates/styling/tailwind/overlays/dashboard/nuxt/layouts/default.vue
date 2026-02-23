<template>
  <div class="flex min-h-screen bg-gray-100 text-gray-700">
    <DashSidebar />
    <main class="flex-1 p-8 overflow-y-auto">
      <slot />
    </main>
  </div>
</template>
