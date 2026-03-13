<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isLoading = ref(true);
const error = ref(null);

const dataItems = ref<any>([]);
const activeFilter = ref('All')
const showButton = ref(false);


// Shows the button after scrolling 700px
const handleScroll = () => { showButton.value = window.scrollY > 700; };
const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

onMounted(() => { window.addEventListener('scroll', handleScroll); });
onUnmounted(() => { window.removeEventListener('scroll', handleScroll); });

onMounted(async () => {
  try {
    const response = await fetch('/data/data-EN.json');
    if (!response.ok) throw new Error('Failed to fetch data');

    dataItems.value = await response.json();

  } catch (err: any) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <header>
    <Navbar />
  </header>

  <!-- ===================== Scroll to Top Button ===================== -->
  <button v-show="showButton" @click="scrollToTop"
    class="fixed bottom-8 right-8 z-50 p-3 bg-accent text-bg1 rounded-full shadow-lg transition-opacity duration-300 hover:bg-green-600 flex items-center justify-center cursor-pointer"
    aria-label="Back to top">
    <span  class="material-icons-outlined">
      arrow_upward
    </span>
  </button>

  <!-- ===================== HERO ===================== -->
  <section class="hero-pattern h-screen flex items-center relative overflow-hidden">
    <!-- Gem decorations -->
    <div class="absolute top-20 right-6 md:right-32 text-4xl md:text-5xl select-none animate-bounce"
      style="animation-duration: 3s">
      🟣
    </div>
    <div class="absolute top-14 right-28 md:right-64 text-3xl select-none animate-bounce"
      style="animation-duration: 4s; animation-delay: 0.5s">
      🔴
    </div>
    <div class="absolute bottom-20 right-6 md:right-40 text-4xl select-none animate-bounce"
      style="animation-duration: 3.5s; animation-delay: 1s">
      🟢
    </div>
    <div class="absolute bottom-28 right-24 md:right-72 text-3xl select-none animate-bounce"
      style="animation-duration: 4.5s; animation-delay: 0.3s">
      🔵
    </div>

    <div class="max-w-6xl mx-auto px-4 md:px-8 w-full pt-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-10">
        <!-- Left: text -->
        <div class="flex-1 max-w-lg z-10">
          <p class="font-poppins text-sm md:text-base text-fg2 mb-1">
            Hi! I'm Syafiq
          </p>
          <h1 class="section-heading text-3xl md:text-5xl leading-tight text-fg1 mb-4">
            I design visuals,<br />
            <span class="text-accent">build websites</span>, and<br />
            analyzes data.
          </h1>
          <p class="font-poppins text-sm text-fg2 mb-7">
            A creative developer based in Indonesia.
          </p>

          <div class="flex items-center gap-3 flex-wrap">
            <a href="#contact"
              class="bg-accent hover:bg-green-600 text-bg1 font-poppins text-sm font-medium px-5 py-2.5 rounded-full transition-colors shadow-md shadow-green-200">
              Contact Me
            </a>

            <a href="/cv-syafiq_ilham_sholehudin.pdf"
              class="border border-fg1 hover:border-accent text-fg1 hover:text-accent font-poppins text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
              download>
              Download CV
            </a>
          </div>
        </div>

        <!-- Right: avatar -->
        <div class="relative flex-shrink-0 z-10">
          <div class="hero-ring w-60 h-auto md:w-[400px] md:h-auto">
            <img src="/assets/img/hero-img.png" alt="Syafiq" class="w-full h-full object-cover" />
          </div>
          <span class="absolute -top-4 -left-4 text-accent text-3xl select-none font-bold">✦</span>
          <span class="absolute -bottom-3 -right-3 text-accent text-2xl select-none font-bold">✦</span>
          <span class="absolute top-4 -right-6 text-accent text-lg select-none">✦</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== ABOUT ME ===================== -->
  <section id="about" class="py-16 md:py-24 bg-bg1">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <p class="font-poppins text-xs text-accent uppercase tracking-widest mb-1">
        About
      </p>
      <h2 class="section-heading text-2xl md:text-3xl text-fg1 mb-1">
        {{ dataItems.About?.title }}
      </h2>
      <span class="section-underline mb-6 block"></span>
      <div class="max-w-5xl mt-6">
        <p class="font-poppins text-justify text-sm md:text-base text-fg2 leading-relaxed">
          {{ dataItems.About?.description }}
        </p>
      </div>
    </div>
  </section>

  <!-- ===================== FEATURED PROJECTS ===================== -->
  <section id="projects" class="py-16 md:py-24 bg-bg2">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <p class="font-poppins text-xs text-accent uppercase tracking-widest mb-1">
        Projects
      </p>
      <h2 class="section-heading text-2xl md:text-3xl text-fg1 mb-1">
        {{ dataItems.Projects?.title }}
      </h2>
      <span class="section-underline mb-8 block"></span>

      <!-- Filter Buttons -->
      <div class="flex gap-2 mb-8 flex-wrap">
        <button v-for="(category, index) in dataItems.Projects?.data.categories" :key="index"
          class="font-poppins text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 text-fg2 hover:border-accent hover:text-accent transition-colors"
          @click="activeFilter = category" :class="{
            'filter-btn active': activeFilter === category,
            'filter-btn': activeFilter !== category
          }">
          {{ category }}
        </button>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(project, index) in dataItems.Projects?.data.projects" :key="index"
          class="project-card bg-bg1 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          :class="activeFilter === 'All' || project.categories.includes(activeFilter) ? 'block' : 'hidden'">

          <div class="relative overflow-hidden w-full aspect-video">
            <img :src=project.imageUrl :alt=project.title
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            <span
              class="absolute top-3 left-3 bg-bg-dark text-fg-white text-xs font-poppins font-medium px-2.5 py-2 rounded-full">
              {{ project.categories.join(', ') }}
            </span>
          </div>

          <div class="p-4 flex flex-col">
            <h3 class="font-exo font-semibold text-fg1 mb-1">
              {{ project.title }}
            </h3>

            <p class="font-poppins text-xs text-fg2 mb-3 leading-relaxed flex-grow"> {{ project.description }}
            </p>

            <div class="flex items-center gap-1.5 mb-3">
              <img v-for="(icon, index) in project.icons" :key="index" :src="icon.url" :alt="icon.name"
                class="w-5 h-5" />
            </div>

            <div v-if="project.link" class="mt-auto">
              <a :href="project.link.url" class="font-poppins text-xs text-accent font-medium hover:underline"
                target="_blank">
                {{ project.link.text }} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== MY Skills ===================== -->
  <section id="expertise" class="py-16 md:py-24 bg-bg1">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <p class="font-poppins text-xs text-accent uppercase tracking-widest mb-1">
        Skills
      </p>
      <h2 class="section-heading text-2xl md:text-3xl text-fg1 mb-1">
        My Expertise
      </h2>
      <span class="section-underline mb-8 block"></span>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(skillCard, index) in dataItems.Skills?.data.skillCard" :key="index"
          class="skill-card bg-bg2 border border-border1 rounded-2xl p-6"
          :class="skillCard.colspan === 2 ? 'md:col-span-2' : 'md:col-span-1'">

          <h3 class="font-exo font-semibold text-fg1 text-lg mb-2">
            {{ skillCard.title }}
          </h3>
          <p class="font-poppins text-justify text-sm text-fg2 leading-relaxed mb-4">
            {{ skillCard.description }}
          </p>
          <div class="flex items-center gap-2 mb-4 flex-wrap">
            <img v-for="(icon, index) in skillCard.icons" :key="index" :src="icon.url" :alt="icon.name"
              class="w-5 h-5" />
          </div>
        </div>
      </div>

      <!-- Languages & Others -->
      <div class="mt-12">
        <h3 class="font-poppins text-sm font-semibold text-fg1 mb-5">
          Languages
        </h3>
        <div class="flex flex-col md:flex-row gap-8 mb-8">
          <div v-for="(lang, index) in dataItems.Skills?.data.skillLanguages" :key="index" class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <img :src="lang.iconUrl" :alt="lang.code" class="w-6 h-6" />
              <span class="text-fg1 mb-1.5">{{ lang.code }}</span>
              <span class="font-poppins text-xs text-fg2 font-medium">{{ lang.proficiency }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-1.5">
              <div class="progress-bar-fill" :style="{ width: lang.proficiencyLevel + '%' }"></div>
            </div>
          </div>


        </div>

        <h3 class="font-poppins text-sm font-semibold text-fg1 mb-3">
          Others
        </h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="(skill, index) in dataItems.Skills?.data.skillOther" :key="index"
            class="font-poppins text-xs bg-border1 text-fg1 px-3 py-1.5 rounded-full ">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== MY EXPERIENCES ===================== -->
  <section id="experiences" class="py-16 md:py-24 bg-bg2">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <p class="font-poppins text-xs text-accent uppercase tracking-widest mb-1">
        Experiences
      </p>
      <h2 class="section-heading text-2xl md:text-3xl text-fg1 mb-1">
        My Experiences
      </h2>
      <span class="section-underline mb-8 block"></span>

      <div class="flex flex-col gap-6">
        <div v-for="(experience, index) in dataItems.Experiences?.data.experiences" :key="index"
          class="bg-bg1 rounded-2xl p-6 shadow-sm border border-border1 hover:shadow-md transition-shadow">
          <div class="flex gap-4">
            <div class="">
              <img :src="experience.imageUrl" :alt="experience.organizer" class="w-12 h-12" />
            </div>
            <div class="flex-1">
              <p class="font-poppins font-semibold text-xs text-accent mb-1">
                {{ experience.duration }}
              </p>
              <h3 class="font-exo font-semibold text-fg1 text-lg mb-1">
                {{ experience.title }}
              </h3>
              <p class="font-poppins text-sm text-fg1 mb-1">
                {{ experience.organizer }}
              </p>
              <p class="font-poppins text-xs text-gray-400 mb-4">
                {{ experience.location }} &nbsp;•&nbsp; {{ experience.type }}
              </p>
              <p class="font-poppins text-xs text-fg1 mb-4">
                {{ experience.description }}
              </p>
              <p class="font-poppins text-xs font-semibold text-fg1 mb-2">
                Responsibilities include:
              </p>
              <ul class="font-poppins text-xs text-fg2 space-y-1 list-disc list-inside leading-relaxed">
                <li v-for="(resp, index) in experience.responsibilities" :key="index">
                  {{ resp }}
                </li>

              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>

  <!-- ===================== FOOTER ===================== -->
  <footer id="contact" class="bg-bg-dark text-bg1 py-16 md:py-20">
    <div class="max-w-6xl mx-auto px-4 md:px-8 text-center">
      <h2 class="section-heading text-accent mb-3">
        Contacts
      </h2>
      <h2 class="section-heading text-3xl md:text-4xl text-fg-white mb-3">
        {{ dataItems.Contacts?.title }}
      </h2>
      <p class="font-poppins text-sm text-gray-400 mb-10">
        {{ dataItems.Contacts?.quotes }}
      </p>

      <div class="flex items-center justify-center gap-6 mb-10">
        <a v-for="(contact, index) in dataItems.Contacts?.data.socials" :href="contact.url" :key="index"
          class="text-gray-400 hover:text-fg-white transition-colors">
          <img :src="contact.iconUrl" :alt="contact.name" class="w-6 h-6" />
        </a>

      </div>

      <p class="font-poppins text-xs text-gray-400">
        Made with ❤️ by Syafiq Ilham S.
      </p>
    </div>
  </footer>
</template>