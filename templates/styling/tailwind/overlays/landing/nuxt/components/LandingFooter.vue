<template>
  <footer class="bg-gray-900 text-gray-300 pt-16 pb-8 px-8">
    <div class="flex flex-wrap justify-between max-w-7xl mx-auto gap-16">
      <div>
        <h3 class="text-white text-2xl font-bold mb-2">{{projectName}}</h3>
        <p>Building the future of the web.</p>
      </div>
      <div class="flex gap-16">
        <div class="flex flex-col gap-2">
          <h4 class="text-white text-sm uppercase mb-2 font-semibold tracking-wide">Product</h4>
          <a href="#features" class="text-gray-400 hover:text-white transition-colors">Features</a>
          <a href="#cta" class="text-gray-400 hover:text-white transition-colors">Pricing</a>
        </div>
        <div class="flex flex-col gap-2">
          <h4 class="text-white text-sm uppercase mb-2 font-semibold tracking-wide">Company</h4>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Blog</a>
        </div>
        <div class="flex flex-col gap-2">
          <h4 class="text-white text-sm uppercase mb-2 font-semibold tracking-wide">Legal</h4>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-700 mt-12 pt-6 text-center">
      <p class="text-sm text-gray-500">&copy; 2025 {{projectName}}. All rights reserved.</p>
    </div>
  </footer>
</template>
