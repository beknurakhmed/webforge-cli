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
  font-family: 'Georgia', 'Times New Roman', serif;
  color: $text;
  background-color: $bg;
  line-height: 1.8;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
