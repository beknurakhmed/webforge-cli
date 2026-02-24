<script setup lang="ts">
const route = useRoute();
const postId = Number(route.params.id);

const posts = [
  { id: 1, title: 'Getting Started with Vue 3 Composition API', excerpt: 'Learn the fundamentals of Vue 3 Composition API and how it transforms the way we build components.', date: 'Jan 15, 2024', author: 'Alex Rivera', category: 'Technology', image: '💻', readTime: '5 min read', content: 'The Vue 3 Composition API represents a significant evolution in how we structure Vue components. Unlike the Options API, which organizes code by option type (data, methods, computed), the Composition API lets you organize code by logical concern.\n\nThis means related code stays together, making components easier to understand and maintain. The setup function (or <script setup>) is the entry point where you define reactive state, computed properties, and functions.\n\nKey concepts include ref() for primitive reactive values, reactive() for objects, computed() for derived state, and watch/watchEffect for side effects. These composables can be extracted into reusable functions, promoting code reuse across components.\n\nThe Composition API also provides better TypeScript support, as the type inference works naturally with standard JavaScript/TypeScript patterns.' },
  { id: 2, title: 'Modern UI Design Principles', excerpt: 'Explore the key principles that make modern user interfaces intuitive, beautiful, and accessible.', date: 'Jan 12, 2024', author: 'Sarah Chen', category: 'Design', image: '🎨', readTime: '4 min read', content: 'Great UI design is built on timeless principles that prioritize the user experience. Visual hierarchy guides users through content by establishing clear importance levels using size, color, and spacing.\n\nConsistency creates familiarity, reducing cognitive load and helping users predict how elements will behave. A consistent design system with reusable components ensures uniformity across your application.\n\nWhitespace is not empty space but a powerful design element. Proper use of whitespace improves readability, draws attention to key elements, and creates a sense of elegance.\n\nAccessibility should be woven into every design decision. This means sufficient color contrast, readable font sizes, clear focus indicators, and semantic markup that works with assistive technologies.' },
  { id: 3, title: 'Building Scalable Web Applications', excerpt: 'Best practices for building web applications that scale from hundreds to millions of users.', date: 'Jan 10, 2024', author: 'Alex Rivera', category: 'Technology', image: '🏗️', readTime: '7 min read', content: 'Building scalable web applications requires thoughtful architecture decisions from the start. Start with a modular architecture that separates concerns and allows individual components to scale independently.\n\nPerformance optimization is crucial. Implement lazy loading, code splitting, and efficient caching strategies. Use CDNs for static assets and consider server-side rendering for improved initial load times.\n\nDatabase design matters immensely at scale. Choose the right database for your use case, implement proper indexing, and plan for horizontal scaling through sharding or read replicas.\n\nMonitoring and observability help you understand system behavior. Implement comprehensive logging, metrics collection, and distributed tracing to identify bottlenecks before they become critical issues.' },
  { id: 4, title: 'The Future of Remote Work', excerpt: 'How remote work is reshaping the business landscape and what it means for teams worldwide.', date: 'Jan 8, 2024', author: 'Jordan Lee', category: 'Business', image: '🏠', readTime: '6 min read', content: 'Remote work has fundamentally changed how businesses operate and how employees structure their professional lives. The shift to distributed teams has proven that productivity is not tied to physical location.\n\nSuccessful remote teams prioritize asynchronous communication, allowing team members across time zones to contribute effectively. Written documentation becomes the backbone of organizational knowledge.\n\nCompany culture in remote settings requires intentional effort. Virtual team building, regular check-ins, and transparent communication help maintain connection and alignment.\n\nThe hybrid model is emerging as a popular middle ground, offering flexibility while maintaining in-person collaboration opportunities for creative work and team bonding.' },
  { id: 5, title: 'Color Theory for Developers', excerpt: 'A practical guide to using color effectively in your web projects without being a designer.', date: 'Jan 5, 2024', author: 'Sarah Chen', category: 'Design', image: '🌈', readTime: '5 min read', content: 'Understanding color theory helps developers make better design decisions even without formal design training. Start with the color wheel and basic relationships: complementary, analogous, and triadic color schemes.\n\nIn web design, a focused color palette typically includes a primary color for brand identity, a secondary color for accents, and neutral colors for text and backgrounds. Limiting your palette creates visual coherence.\n\nColor psychology influences user perception. Blue conveys trust, green suggests growth, red creates urgency, and purple implies luxury. Choose colors that align with your brand message.\n\nAccessibility must guide color choices. Ensure text meets WCAG contrast ratios (4.5:1 for normal text, 3:1 for large text). Never rely on color alone to convey information.' },
  { id: 6, title: 'Startup Lessons Learned', excerpt: 'Key takeaways from building and growing a tech startup in a competitive market.', date: 'Jan 3, 2024', author: 'Jordan Lee', category: 'Business', image: '🚀', readTime: '8 min read', content: 'Building a startup is a journey of constant learning and adaptation. The most important lesson is to validate your idea early with real users. Build a minimum viable product and iterate based on genuine feedback.\n\nHiring is both the most impactful and most challenging aspect of growing a startup. Look for adaptable people who share your vision and can wear multiple hats in the early stages.\n\nCash flow management can make or break a startup. Understand your burn rate, maintain a healthy runway, and be strategic about when and how to raise funding.\n\nBuilding in public and maintaining transparency with stakeholders creates trust and valuable feedback loops. Share your journey, celebrate wins, and be honest about challenges.' },
  { id: 7, title: 'TypeScript Best Practices', excerpt: 'Write cleaner, safer code with these TypeScript patterns and conventions used by top teams.', date: 'Jan 1, 2024', author: 'Alex Rivera', category: 'Technology', image: '📘', readTime: '6 min read', content: 'TypeScript adds type safety to JavaScript, catching errors at compile time rather than runtime. To get the most from TypeScript, embrace strict mode and avoid using the any type as an escape hatch.\n\nUse interfaces for object shapes and types for unions and intersections. Generic types enable reusable, type-safe abstractions. Learn to leverage utility types like Partial, Pick, Omit, and Record.\n\nProper error handling with discriminated unions provides exhaustive type checking. Instead of throwing errors, consider returning typed result objects that force callers to handle both success and failure cases.\n\nOrganize types close to where they are used. Export only the types that are part of your public API. Use barrel files judiciously to avoid circular dependency issues.' },
  { id: 8, title: 'Digital Minimalism', excerpt: 'How simplifying your digital life can boost productivity and improve well-being.', date: 'Dec 28, 2023', author: 'Jordan Lee', category: 'Lifestyle', image: '🧘', readTime: '4 min read', content: 'Digital minimalism is about being intentional with technology use. Rather than adopting every new tool, evaluate each one against your values and goals. Keep what adds genuine value; remove what merely adds noise.\n\nStart by auditing your digital habits. Track screen time, review app usage, and identify patterns of mindless consumption. This awareness is the first step toward meaningful change.\n\nCreate boundaries around technology use. Designate device-free times and spaces. Turn off non-essential notifications. Batch email and message checking rather than responding to every ping.\n\nReplace digital consumption with analog activities. Reading physical books, writing in a journal, and spending time outdoors provide the mental rest that constant connectivity prevents.' },
];

const post = posts.find(p => p.id === postId);
</script>

<template>
  <div v-if="post" :class="$style.postDetail">
    <NuxtLink to="/" :class="$style.backLink">&larr; Back to Posts</NuxtLink>

    <article :class="$style.article">
      <div :class="$style.articleHero">
        <span :class="$style.articleEmoji">{{ post.image }}</span>
      </div>

      <div :class="$style.articleMeta">
        <NuxtLink :to="`/category/${post.category.toLowerCase()}`" :class="$style.articleCategory">
          {{ post.category }}
        </NuxtLink>
        <span :class="$style.metaDot">&middot;</span>
        <span>{{ post.readTime }}</span>
      </div>

      <h1 :class="$style.articleTitle">{{ post.title }}</h1>

      <div :class="$style.articleAuthorLine">
        <span :class="$style.authorName">By {{ post.author }}</span>
        <span :class="$style.articleDate">{{ post.date }}</span>
      </div>

      <div :class="$style.articleContent">
        <p v-for="(paragraph, idx) in post.content.split('\n\n')" :key="idx">
          {{ paragraph }}
        </p>
      </div>
    </article>
  </div>

  <div v-else :class="$style.notFound">
    <h2>Post not found</h2>
    <NuxtLink to="/" :class="$style.backLink">&larr; Back to Posts</NuxtLink>
  </div>
</template>

<style module>
.backLink {
  display: inline-block;
  color: #4f46e5;
  margin-bottom: 1.5rem;
  font-weight: 500;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.backLink:hover {
  text-decoration: underline;
}

.article {
  max-width: 740px;
  margin: 0 auto;
}

.articleHero {
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  margin-bottom: 2rem;
}

.articleEmoji {
  font-size: 6rem;
}

.articleMeta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  color: #6b7280;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.articleCategory {
  color: #4f46e5;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
}

.articleCategory:hover {
  text-decoration: underline;
}

.metaDot {
  color: #d1d5db;
}

.articleTitle {
  font-size: 2.25rem;
  color: #111827;
  line-height: 1.3;
  margin-bottom: 1rem;
}

.articleAuthorLine {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 0.9rem;
}

.authorName {
  font-weight: 600;
  color: #374151;
}

.articleDate {
  color: #9ca3af;
}

.articleContent p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.9;
  color: #374151;
}

.notFound {
  text-align: center;
  padding: 4rem 0;
}

.notFound h2 {
  color: #111827;
  margin-bottom: 1rem;
}
</style>
