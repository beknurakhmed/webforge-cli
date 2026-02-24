<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
$text: #374151;
$bg: #f9fafb;

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  color: $text;
  background-color: $bg;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
