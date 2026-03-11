<script setup>
import { ref, onMounted } from 'vue';

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}


const isDarkMode = ref(false);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

onMounted(() => {
  // Get initial value
  const savedTheme = localStorage.getItem('isDarkMode');
  isDarkMode.value = savedTheme === 'true';

  // Apply initial class
  if (isDarkMode.value) {
    document.body.classList.add('dark');
  }

  // Watch for changes
  watch(isDarkMode, (newValue) => {
    document.body.classList.toggle('dark', newValue);
    localStorage.setItem('isDarkMode', newValue);
  });
});


</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-bg1/80 backdrop-blur-md border-b border-border1 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
      <a href="#" class="nav-accent text-lg tracking-wide text-fg1 font-bold">SYAFIQ-IS</a>

      <div class="hidden md:flex items-center gap-8">
        <a href="#projects" class="font-poppins text-sm text-fg2 hover:text-accent transition-colors">Projects</a>
        <a href="#expertise" class="font-poppins text-sm text-fg2 hover:text-accent transition-colors">Skills</a>
        <a href="#experiences" class="font-poppins text-sm text-fg2 hover:text-accent transition-colors">Experiences</a>
      </div>

      <div class="flex items-center gap-3">



        <div class="hidden md:flex w-7 h-7 bg-fg1 text-bg1 rounded-full items-center justify-center px-1"
          @click="toggleDarkMode">
          <button v-if="isDarkMode" class="material-icons-outlined cursor-pointer">
            dark_mode
          </button>
          <button v-else class="material-icons-outlined cursor-pointer">
            light_mode
          </button>
        </div>
        <a href="#contact"
          class="bg-accent hover:bg-accent-dark text-bg1 text-sm font-poppins font-medium px-4 py-1.5 rounded-full transition-colors">
          Contacts
        </a>

        <!-- Mobile Menu Toggle -->
        <button id="menuToggle" class="md:hidden text-fg2 focus:outline-none ml-1" @click="toggleMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <div class="absolute top-14 left-0 right-0 bg-bg-dark/80 backdrop-blur-md items-center gap-2">
      <div class="max-w-6xl mx-auto w-full flex items-center justify-between px-4 md:px-8 py-2">

        <div class="font-poppins text-xs text-fg-white">
          Creative Designer &nbsp;|&nbsp; Web Developer &nbsp;|&nbsp; Data
          Analyst
        </div>
        <div class="hidden md:flex items-center gap-1.5 text-xs text-fg-white">
          <span class="mx-2 gap-2 flex">
            <span class="">EN</span>
          </span>
        </div>
      </div>
    </div>

    <div id="mobileMenu" class="hidden md:hidden bg-bg1 border-t border-border1 px-4 pb-4">
      <div class="flex flex-col gap-3 pt-12">
        <a href="#projects" class="font-poppins text-sm text-fg2 hover:text-accent transition-colors">Project</a>
        <a href="#expertise" class="font-poppins text-sm text-fg2 hover:text-accent transition-colors">Skills</a>
        <a href="#experiences" class="font-poppins text-sm text-fg2 hover:text-accent transition-colors">Experiences</a>
      </div>
    </div>

  </nav>
</template>
