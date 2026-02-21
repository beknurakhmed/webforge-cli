<template>
  <div class="blog-layout">
    <BlogHeader />
    <main class="blog-main">
      <slot />
    </main>
    <BlogFooter />
  </div>
</template>

<style>
.blog-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.blog-main {
  flex: 1;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
