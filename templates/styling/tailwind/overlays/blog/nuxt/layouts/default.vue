<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-700">
    <BlogHeader />
    <main class="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
      <slot />
    </main>
    <BlogFooter />
  </div>
</template>
