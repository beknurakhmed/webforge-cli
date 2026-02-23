<template>
  <header class="bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 text-white pb-16">
    <nav class="flex flex-col sm:flex-row justify-between items-center px-8 py-4 max-w-6xl mx-auto gap-4 sm:gap-0">
      <div class="text-2xl font-bold text-white">{{projectName}}</div>
      <div class="flex gap-8">
        <a href="#features" class="text-white/90 no-underline font-medium transition-colors hover:text-white">Features</a>
        <a href="#cta" class="text-white/90 no-underline font-medium transition-colors hover:text-white">Pricing</a>
        <a href="#contact" class="text-white/90 no-underline font-medium transition-colors hover:text-white">Contact</a>
      </div>
    </nav>
    <div class="text-center px-8 py-16 max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Build Something Amazing</h1>
      <p class="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">A modern landing page template to kickstart your next project.</p>
      <div class="flex gap-4 justify-center flex-wrap">
        <button class="px-6 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all border-2 border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 hover:border-indigo-700">Get Started</button>
        <button class="px-6 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all border-2 border-white/50 bg-transparent text-white hover:bg-white/10 hover:border-white">Learn More</button>
      </div>
    </div>
  </header>
</template>
