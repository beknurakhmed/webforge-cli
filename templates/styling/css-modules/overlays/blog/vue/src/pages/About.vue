<script setup lang="ts">
</script>

<template>
  <div :class="$style.aboutPage">
    <div :class="$style.aboutAvatar">👩‍💻</div>
    <h1>Jane Developer</h1>
    <p :class="$style.aboutRole">Full-Stack Developer &amp; Technical Writer</p>
    <div :class="$style.aboutBio">
      <p>Hi! I'm Jane, a passionate developer with over 8 years of experience building web applications. I write about React, TypeScript, Node.js, and modern web development practices.</p>
      <br />
      <p>When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, or exploring new technologies. I believe in writing clean, maintainable code and sharing knowledge with the community.</p>
      <br />
      <p>This blog is my space to share tutorials, best practices, and insights from real-world projects. Feel free to reach out if you have questions or want to collaborate!</p>
    </div>
  </div>
</template>

<style module>
.aboutPage {
  max-width: 680px;
  margin: 0 auto;
}

.aboutAvatar {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
}

.aboutPage h1 {
  font-size: 1.75rem;
  color: #111827;
  text-align: center;
  margin-bottom: 0.5rem;
}

.aboutRole {
  text-align: center;
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.aboutBio {
  font-size: 1rem;
  line-height: 1.8;
  color: #374151;
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
</style>
