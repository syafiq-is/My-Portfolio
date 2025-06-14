<template>
  <!-- Floating Icon Buttons (Right-Aligned) -->
  <div class="fixed bottom-20 right-6 flex space-x-2 z-50">
    <button class="w-12 h-12 bg-container rounded-full shadow-lg">
      <span class="material-icons-outlined" style="font-size: 20px;">music_note</span>
    </button>
    <button class="w-12 h-12 bg-container rounded-full shadow-lg">
      <span class="material-icons-outlined" style="font-size: 20px;">arrow_upward</span>
    </button>
  </div>

  <nav
    class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-container rounded-full shadow-lg px-6 py-3 flex justify-between items-center w-[90%] max-w-md">
    <button class="flex flex-col items-center">
      <span class="text-xs">About</span>
    </button>
    <button class="flex flex-col items-center">
      <span class="text-xs">Projects</span>
    </button>
    <button class="flex flex-col items-center">
      <span class="text-xs">Skills</span>
    </button>
    <button class="flex flex-col items-center">
      <span class="text-xs">Experiences</span>
    </button>
  </nav>
</template>