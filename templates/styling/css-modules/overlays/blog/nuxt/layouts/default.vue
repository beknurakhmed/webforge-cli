<template>
  <div :class="$style.blogLayout">
    <BlogHeader />
    <main :class="$style.blogMain">
      <slot />
    </main>
    <BlogFooter />
  </div>
</template>

<style module>
.blogLayout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.blogMain {
  flex: 1;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
