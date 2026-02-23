<template>
  <header class="bg-gradient-to-br from-indigo-500 to-purple-700 text-white pb-16">
    <nav class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <div class="text-2xl font-bold">{{projectName}}</div>
      <div class="flex gap-8">
        <a href="#features" class="text-white/90 font-medium hover:text-white transition-colors">Features</a>
        <a href="#cta" class="text-white/90 font-medium hover:text-white transition-colors">Pricing</a>
        <a href="#contact" class="text-white/90 font-medium hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
    <div class="text-center px-8 py-16 max-w-3xl mx-auto">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Build Something Amazing</h1>
      <p class="text-lg sm:text-xl opacity-90 mb-8">A modern landing page template to kickstart your next project.</p>
      <div class="flex gap-4 justify-center flex-wrap">
        <button class="px-6 py-3 rounded-lg text-base font-semibold cursor-pointer border-2 border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 hover:border-indigo-700 transition-colors">Get Started</button>
        <button class="px-6 py-3 rounded-lg text-base font-semibold cursor-pointer border-2 border-white/50 bg-transparent text-white hover:bg-white/10 transition-colors">Learn More</button>
      </div>
    </div>
  </header>
</template>
