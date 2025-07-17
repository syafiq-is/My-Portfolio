<script setup lang="ts">
import { NuxtImg } from '#components';

</script>

<template>
  <header>
    <Navbar />
    <BottomNav />
  </header>

  <!-- HERO SECTION -->
  <section class="h-screen">
    <img src="~/assets/img/Hero.webp"
      class="w-full h-[80%] object-cover [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
      alt="Hero image" />

    <div class="max-w-6xl mx-auto px-10">
      <div class="relative z-10 -mt-60 ">
        <div class="text-brand">
          <div class="font-light text-base">
            Full-stack web developer
          </div>
          <div class="font-black my-4">
            <div class="text-7xl">
              SYAFIQ
            </div>
            <div class="text-4xl">
              ILHAM SHOLEHUDIN
            </div>
          </div>
          <div class="font-light text-base">
            based in Indonesia
          </div>
        </div>
        <div class="mt-10">
          <a href="" class="bg-container px-5 py-3 rounded-lg hover:bg-brand hover:text-background">
            Print CV
          </a>
        </div>
        <div class="h-20"></div>
      </div>
    </div>
  </section>

  <!-- About SECTION -->
  <section id="about" class="py-24 bg-dark text-foreground">
    <div class="max-w-6xl mx-auto px-6 md:px-10">
      <h1 class="text-brand text-4xl md:text-6xl font-extrabold text-center mb-16 tracking-wide">
        WHO AM I
      </h1>

      <div class="flex flex-col-reverse md:flex-row items-center gap-10">
        <!-- Text Content -->
        <div class="text-justify max-w-prose text-lg leading-relaxed">
          <p class="mb-6">
            I'm a <span class="text-brand font-semibold">web developer</span> with a burning passion for crafting sleek,
            functional digital experiences.
          </p>
          <p class="mb-6">
            I build modern websites using <span class="text-brand">Laravel</span>, <span
              class="text-brand">NextJS</span>, and <span class="text-brand">NuxtJS</span>, and I'm always leveling up
            my skills like a good dev should.
          </p>
          <p class="mb-6">
            I'm a strong communicator and a team player, eager to bring fresh ideas to life. Whether it’s a sleek UI or
            solving gnarly bugs, I’m here for it.
          </p>
          <p class="italic text-center text-brand mt-10">— Doing My Best —</p>
        </div>

        <!-- Image -->
        <div class="flex-shrink-0">
          <img src="~/assets/img/about-pic.jpg" alt="Portrait of Syafiq"
            class="h-60 w-60 md:h-72 md:w-72 rounded-full object-cover border-4 border-brand shadow-lg hover:scale-105 transition duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  </section>


  <!-- Projects SECTION -->
  <section id="projects" class="py-16">
    <h1 class="text-brand text-3xl font-semibold text-center">Featured Projects</h1>
    <p class="text-center">Some fun projects</p>

    <ul class="mt-10 max-w-6xl mx-auto px-10 flex flex-col gap-5">
      <li class="rounded-xl overflow-clip max-w-2xl mx-auto hover-grow">
        <img src="~/assets/img/projects-exposia.png" alt="" class="h-48 w-full object-cover" />
        <div class="bg-container p-5">
          <h1 class="font-semibold text-lg text-brand mb-2">Exposia</h1>
          <p class="text-justify">A project which attempts to solves the problem of small business by providing a way
            for them to
            build a landing page in minutes. It allows to build a landing page in a modular way. They can choose the
            appropriate sections style to build a full landing page.</p>

          <ul class="mt-5 flex gap-5">
            <li class="w-10 h-10 p-2 bg-background rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/laravel.svg" alt="laravel" />
            </li>
            <li class="w-10 h-10 p-2 bg-background rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/tailwind_css.svg" alt="tailwind_css" />
            </li>
            <li class="w-10 h-10 p-2 bg-background rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/mysql.svg" alt="mysql" />
            </li>
          </ul>
        </div>
      </li>
      <li class="rounded-xl overflow-clip max-w-2xl mx-auto hover-grow">
        <img src="~/assets/img/projects-portfolio.png" alt="" class="h-48 w-full object-cover" />
        <div class="bg-container p-5">
          <h1 class="font-semibold text-lg text-brand mb-2">Portfolio</h1>
          <p class="text-justify">A commonly seen portfolio website to display and show myself, my projects, my skills,
            and
            my
            experiences</p>

          <ul class="mt-5 flex gap-2">
            <li class="w-10 h-10 p-2 bg-background rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/nuxtjs.svg" alt="nuxtjs" />
            </li>
            <li class="w-10 h-10 p-2 bg-background rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/vue.svg" alt="vue" />
            </li>
            <li class="w-10 h-10 p-2 bg-background rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/tailwind_css.svg" alt="tailwind_css" />
            </li>
          </ul>
        </div>
      </li>
      <li class="mx-auto text-brand underline"><a href="https://www.linkedin.com/in/syafiq-ilham-sholehudin-8b3a77295/"
          target="_blank">More on LinkedIn</a></li>
    </ul>
  </section>

  <!-- Skills SECTION -->
  <section id="skills" class="py-16 bg-dark">
    <div class="max-w-6xl mx-auto px-10">
      <h1 class="text-brand text-3xl font-semibold">Skills</h1>
      <p>Click them for more details</p>

      <div class="grid grid-cols-[min-content_1fr] gap-4 mt-6 text-brand">
        <!-- Row 1 -->
        <div>
          <h2 class="font-light mr-10">Hard Skills</h2>
        </div>
        <div>
          <ul class="flex space-x-2 space-y-2 flex-wrap text-sm">
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/react.svg" alt="react" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/vue.svg" alt="vue" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/nextjs.svg" alt="nextjs" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/nuxtjs.svg" alt="nuxtjs" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/laravel.svg" alt="laravel" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/javascript.svg" alt="javascript" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/typescript.svg" alt="typescript" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/python.svg" alt="python" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/php.svg" alt="php" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/html5.svg" alt="html5" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/css3.svg" alt="css3" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/tailwind_css.svg" alt="tailwind_css" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/git.svg" alt="git" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/github.svg" alt="github" />
            </li>
          </ul>

          <ul class="flex space-x-2 space-y-2 flex-wrap text-sm mt-2">
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/supabase.svg" alt="supabase" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/firebase.svg" alt="firebase" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/mysql.svg" alt="mysql" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/postgresql.svg" alt="postgresql" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/visual_studio_code.svg" alt="visual studio code" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/figma.svg" alt="figma" class="h-8" />
            </li>
            <li class="w-12 h-12 p-2 border rounded-xl flex justify-center items-center hover-raise">
              <img src="~/assets/icons/blender.svg" alt="blender" />
            </li>
          </ul>
        </div>

        <!-- Row 2 -->
        <div>
          <h2 class="font-light mr-10">Soft Skills</h2>
        </div>
        <div>
          <ul class="flex space-x-2 space-y-2 flex-wrap text-sm">
            <li class="w-fit h-fit p-2 border rounded-xl flex justify-center items-center hover-raise">
              <div>Public Speaking</div>
            </li>
            <li class="w-fit h-fit p-2 border rounded-xl flex justify-center items-center hover-raise">
              <div>Team Collaboration</div>
            </li>
          </ul>
        </div>

        <!-- Row 3 -->
        <div>
          <h2 class="font-light mr-10">Languages</h2>
        </div>
        <div>
          <ul class="flex space-x-2 space-y-2 flex-wrap text-sm">
            <li class="w-fit h-fit p-2 border rounded-xl flex justify-center items-center hover-raise">
              <div>English</div>
            </li>
            <li class="w-fit h-fit p-2 border rounded-xl flex justify-center items-center hover-raise">
              <div>Indonesia</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Experiences SECTION -->
  <section id="experiences" class="py-16">
    <div class="max-w-6xl mx-auto px-10">
      <h1 class="text-brand text-3xl font-semibold text-center">My Experiences</h1>
      <p class="text-center">Not Much but Great Experiences</p>
    </div>

    <div class="mt-10 max-w-6xl mx-auto px-10">
      <!-- Timeline Container -->
      <ul class="relative border-l-3 border-brand pl-6">
        <li class="relative mb-12">
          <!-- Dot -->
          <div class="absolute -left-[2.2rem] w-5 h-5 bg-background rounded-full border-3 border-brand"></div>

          <p class="mb-6 text-brand font-semibold">Feb 2025 - Feb 2025 • 1 Month</p>

          <img src="~/assets/img/exp-infinitera.jpg" alt="logo" class="w-20 aspect-square" />

          <!-- Job Info -->
          <h1 class="mb-3 mt-5 text-2xl font-semibold">4th Place Finalist - Infinitera 1.0 Web Programming Competition
          </h1>
          <p class="mb-3">HMTIF Unissula</p>
          <p class="mb-3 font-semibold">Achievement:</p>
          <ul class="list-disc ml-5 text-justify">
            <li>Participated in Infinitera 1.0, a national-level Web Programming Competition organized by HMTIF
              Unissula, and successfully advanced to the final round, securing 4th place.</li>
          </ul>
        </li>

        <li class="relative mb-12">
          <!-- Dot -->
          <div class="absolute -left-[2.2rem] w-5 h-5 bg-background rounded-full border-3 border-brand"></div>

          <p class="mb-6 text-brand font-semibold">Feb 2025 - Feb 2025 • 1 Month</p>

          <img src="~/assets/img/exp-AMCC.png" alt="logo" class="w-20 aspect-square" />

          <!-- Job Info -->
          <h1 class="mb-3 mt-5 text-2xl font-semibold">Event Comitee</h1>
          <p class="mb-3">Amikom Computer Club</p>
          <p class="mb-3">Yogyakarta, Indonesia • On-Site</p>
          <p class="mb-3 font-semibold">Responsibilities Include:</p>
          <ul class="list-disc ml-5 text-justify">
            <li>Contributed to the pre-planning phase, ensuring smooth event execution.</li>
            <li>Managed event flow and ensured adherence to the official rundown.</li>
            <li>Coordinated with the Documentation and Design Committee to align event materials and visuals.</li>
            <li>Collaborated with the Equipment Committee to organize prizes and merchandise.</li>
            <li>Assisted the Scientific Committee in facilitating participant engagement during the event workshop.</li>
          </ul>
        </li>

        <li class="relative mb-12">
          <!-- Dot -->
          <div class="absolute -left-[2.2rem] w-5 h-5 bg-background rounded-full border-3 border-brand"></div>

          <p class="mb-6 text-brand font-semibold">Sep 2024 - Feb 2025 • 6 Month</p>

          <img src="~/assets/img/exp-Forum_Asisten.png" alt="logo" class="w-20 aspect-square" />

          <!-- Job Info -->
          <h1 class="mb-3 mt-5 text-2xl font-semibold">Lab Teaching Assistant</h1>
          <p class="mb-3">Forum Asisten</p>
          <p class="mb-3">Yogyakarta, Indonesia • On-Site</p>
          <p class="mb-3 font-semibold">Responsibilities Include:</p>
          <ul class="list-disc ml-5 text-justify">
            <li>Coordinated the schedules of fellow lab assistants to ensure full coverage and smooth class sessions.
            </li>
            <li>Acted as a communication bridge between students and the lecturer, relaying feedback and announcements
              efficiently.</li>
            <li>Provided one-on-one and group guidance to students regarding coursework, debugging, and lab exercises.
            </li>
            <li>Took initiative to assist and manage student questions during the professor’s absence.</li>
            <li>Ensured lab sessions ran smoothly by addressing technical issues and maintaining classroom order.</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>


  <footer class="py-16 bg-container rounded-t-xl">
    <div class="max-w-6xl mx-auto px-10 mb-16">
      <p class="text-brand font-semibold">Contact Me</p>
      <h1 class="text-3xl font-semibold">Let's Connect</h1>

      <ul class="my-10 space-y-3">
        <li class="flex space-x-5 items-center">
          <div class="h-8 w-8 p-1 flex items-center justify-center">
            <img src="~/assets/icons/gmail.svg" alt="gmail icon" />
          </div>
          <a href="mailto:syafiqilham.sho@gmail.com">syafiqilham.sho@gmail.com</a>
        </li>
        <li class="flex space-x-5 items-center">
          <div class="h-8 w-8 p-1 flex items-center justify-center">
            <img src="~/assets/icons/linkedin.svg" alt="github icon" />
          </div>
          <a href="https://www.linkedin.com/in/syafiq-ilham-sholehudin-8b3a77295/" target="_blank">Syafiq Ilham
            Sholehudin</a>
        </li>
        <li class="flex space-x-5 items-center">
          <div class="h-8 w-8 p-1 flex items-center justify-center">
            <img src="~/assets/icons/github.svg" alt="github icon" />
          </div>
          <a href="https://github.com/syafiq-is" target="_blank">syafiq-is</a>
        </li>
      </ul>
    </div>
  </footer>
</template>