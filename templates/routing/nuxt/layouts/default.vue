<template>
  <div>
    <nav style="display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid #e5e7eb">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
    <main style="padding: 1rem">
      <slot />
    </main>
  </div>
</template>
