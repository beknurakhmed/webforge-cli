'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { BlogSidebar } from '../../components/BlogSidebar';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  authorAvatar: string;
}

const posts: Post[] = [
  { id: 1, title: 'Getting Started with Next.js 15', excerpt: 'Learn the fundamentals of Next.js 15 App Router.', content: 'Next.js 15 introduces powerful features that make building web applications easier than ever. The App Router provides a new way to structure your application with file-based routing, server components, and streaming.\n\nThe App Router uses a file-system based approach where folders define routes. Each folder represents a route segment that maps to a URL segment. Special files like page.tsx, layout.tsx, and loading.tsx provide the UI for each route.\n\nServer Components are the default in the App Router. They allow you to render components on the server, reducing the JavaScript bundle sent to the client. This results in faster page loads and better performance.\n\nFile-based routing is intuitive and powerful. Simply create a page.tsx file in a folder, and it becomes a route. Dynamic routes use bracket notation like [id], and you can nest routes by nesting folders.\n\nStreaming allows you to progressively render UI from the server. Work is split into chunks and streamed to the client as it becomes ready. This means users can see parts of the page before the entire content has finished loading.', author: 'Alex Rivera', date: 'Jan 15, 2025', category: 'Technology', readTime: '8 min read', image: '⚛️', authorAvatar: '👨‍💻' },
  { id: 2, title: 'Building Better User Interfaces', excerpt: 'Explore modern UI patterns and best practices.', content: 'Creating great user interfaces is both an art and a science. It requires understanding user psychology, visual design principles, and modern web technologies.\n\nStart with user research to understand who your users are and what they need. Create personas and user journeys to guide your design decisions. Every interface element should serve a purpose.\n\nConsistency is key to a good UI. Use a design system with defined colors, typography, spacing, and components. This ensures a cohesive experience across your entire application.\n\nAccessibility should be built in from the start, not added as an afterthought. Use semantic HTML, provide alt text for images, ensure sufficient color contrast, and make sure all interactive elements are keyboard accessible.\n\nPerformance directly impacts user experience. Optimize images, minimize JavaScript, and use loading states to keep users informed. A fast interface feels more responsive and professional.', author: 'Priya Sharma', date: 'Jan 12, 2025', category: 'Design', readTime: '6 min read', image: '🎨', authorAvatar: '👩‍🎨' },
  { id: 3, title: 'Design Systems That Scale', excerpt: 'Build and maintain design systems that grow.', content: 'A design system is more than a component library. It is a complete set of standards, documentation, and tools that help teams build consistent digital products.\n\nStart small and grow organically. Do not try to design every component upfront. Begin with the most commonly used elements: buttons, inputs, typography, and spacing. Add new components as needs arise.\n\nDocumentation is crucial. Each component should have clear usage guidelines, code examples, and accessibility notes. Good documentation reduces questions and ensures proper usage.\n\nVersion your design system carefully. Use semantic versioning so consumers know what to expect with each update. Provide migration guides for breaking changes.\n\nMeasure adoption and gather feedback. Track which components are most used, identify pain points, and continuously improve based on real-world usage data.', author: 'Marcus Chen', date: 'Jan 10, 2025', category: 'Design', readTime: '10 min read', image: '📐', authorAvatar: '👨' },
  { id: 4, title: 'TypeScript Tips and Tricks', excerpt: 'Advanced TypeScript patterns for better code.', content: 'TypeScript adds static typing to JavaScript, catching errors at compile time and improving developer experience. Here are some advanced patterns to level up your TypeScript code.\n\nUtility types like Partial, Required, Pick, and Omit let you transform existing types without repeating yourself. They are essential for creating flexible, reusable type definitions.\n\nConditional types allow you to create types that depend on conditions. Combined with generics, they enable powerful type-level programming that can express complex relationships.\n\nTemplate literal types let you create string types from patterns. They are perfect for defining valid CSS values, API endpoints, or any structured string format.\n\nThe satisfies operator, introduced in TypeScript 4.9, lets you validate that an expression matches a type without changing the inferred type. This is useful for catching errors while preserving narrow types.', author: 'Sofia Andersen', date: 'Jan 8, 2025', category: 'Technology', readTime: '7 min read', image: '📘', authorAvatar: '👩' },
  { id: 5, title: 'The Future of Web Development', excerpt: 'Emerging trends and technologies shaping the web.', content: 'The web is constantly evolving, and staying ahead of trends is crucial for developers. Here is a look at what is shaping the future of web development.\n\nEdge computing is bringing server-side logic closer to users. Frameworks like Next.js and platforms like Vercel and Cloudflare Workers enable code to run at the edge, reducing latency and improving performance.\n\nAI-powered development tools are changing how we write code. From code completion to automated testing, AI assistants are becoming integral to the development workflow.\n\nWeb Components are gaining traction as a framework-agnostic way to build reusable UI components. They work everywhere HTML works and can be used alongside any framework.\n\nWebAssembly continues to expand the capabilities of the web. Languages like Rust and Go can now run in the browser at near-native speed, enabling complex applications that were previously desktop-only.', author: 'Alex Rivera', date: 'Jan 3, 2025', category: 'Technology', readTime: '12 min read', image: '🌐', authorAvatar: '👨‍💻' },
  { id: 6, title: 'Mastering CSS Grid Layout', excerpt: 'A deep dive into CSS Grid with practical examples.', content: 'CSS Grid is one of the most powerful layout systems available in CSS. It allows you to create complex, responsive layouts with clean, readable code.\n\nGrid works in two dimensions: rows and columns. Unlike Flexbox which is one-dimensional, Grid lets you control both axes simultaneously. This makes it perfect for page-level layouts.\n\nThe fr unit is unique to Grid and represents a fraction of available space. It is more flexible than percentages because it accounts for gaps and fixed-size tracks automatically.\n\nGrid areas let you name regions of your layout and place items into them by name. This makes your CSS more readable and easier to maintain, especially for complex layouts.\n\nThe minmax function combined with auto-fill or auto-fit creates responsive grids without media queries. The grid automatically adjusts the number of columns based on available space.', author: 'Priya Sharma', date: 'Dec 28, 2024', category: 'Tutorial', readTime: '9 min read', image: '📏', authorAvatar: '👩‍🎨' },
];

export default function PostDetailPage() {
  const params = useParams();
  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) {
    return (
      <div className="text-center py-12 px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Post Not Found</h2>
        <p className="text-gray-500 mb-4">The article you are looking for does not exist.</p>
        <Link href="/" className="inline-block px-6 py-2.5 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
        <article>
          <Link href="/" className="inline-block text-indigo-600 font-medium mb-6 hover:underline">← Back to Blog</Link>
          <div className="mb-8">
            <Link href={`/category/${post.category.toLowerCase()}`} className="text-xs font-semibold text-indigo-600 uppercase tracking-wide bg-indigo-50 px-2.5 py-0.5 rounded">
              {post.category}
            </Link>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 my-3 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lg">{post.authorAvatar}</span>
                <span className="font-semibold text-gray-900">{post.author}</span>
              </div>
              <span className="text-sm text-gray-500">{post.date}</span>
              <span className="text-sm text-gray-500">{post.readTime}</span>
            </div>
          </div>
          <div className="h-48 md:h-72 flex items-center justify-center text-6xl bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl mb-8">{post.image}</div>
          <div className="text-base leading-loose">
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-5">{paragraph}</p>
            ))}
          </div>
          <div className="flex gap-2 mt-8 pt-6 border-t border-gray-200">
            <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">#{post.category.toLowerCase()}</span>
            <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">#webdev</span>
            <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">#programming</span>
          </div>
        </article>
        <BlogSidebar />
      </div>
    </div>
  );
}
