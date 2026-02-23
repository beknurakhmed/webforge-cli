<template>
  <footer class="bg-gray-900 text-gray-300 pt-16 pb-8 px-8">
    <div class="flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-16 flex-wrap">
      <div>
        <h3 class="text-white text-2xl font-bold mb-2">{{projectName}}</h3>
        <p class="max-w-xs leading-relaxed">Building the future of the web.</p>
      </div>
      <div class="flex gap-16 flex-wrap">
        <div class="flex flex-col gap-2">
          <h4 class="text-white text-sm uppercase tracking-wider mb-2 font-semibold">Product</h4>
          <a href="#features" class="text-gray-400 no-underline text-sm transition-colors hover:text-white">Features</a>
          <a href="#cta" class="text-gray-400 no-underline text-sm transition-colors hover:text-white">Pricing</a>
        </div>
        <div class="flex flex-col gap-2">
          <h4 class="text-white text-sm uppercase tracking-wider mb-2 font-semibold">Company</h4>
          <a href="#" class="text-gray-400 no-underline text-sm transition-colors hover:text-white">About</a>
          <a href="#" class="text-gray-400 no-underline text-sm transition-colors hover:text-white">Blog</a>
        </div>
        <div class="flex flex-col gap-2">
          <h4 class="text-white text-sm uppercase tracking-wider mb-2 font-semibold">Legal</h4>
          <a href="#" class="text-gray-400 no-underline text-sm transition-colors hover:text-white">Privacy</a>
          <a href="#" class="text-gray-400 no-underline text-sm transition-colors hover:text-white">Terms</a>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-700 mt-12 pt-6 text-center max-w-6xl mx-auto">
      <p class="text-sm text-gray-500">&copy; 2025 {{projectName}}. All rights reserved.</p>
    </div>
  </footer>
</template>
