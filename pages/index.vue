<template>
  <header>
    <Navbar />
    <BottomNav />
  </header>

  <!-- HERO SECTION -->
  <section class="">
    <img src="~/assets/img/Hero.png"
      class="w-full h-[420px] object-cover [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
      alt="Hero image">

    <div class="container mx-auto px-6">
      <div class="relative z-10 -mt-20 ">
        <div class="text-brand">
          <div class="font-light text-base">
            Full-stack web developer
          </div>
          <div class="font-black">
            <div class="text-5xl">
              SYAFIQ
            </div>
            <div class="text-4xl">
              ILHAM
            </div>
          </div>
          <div class="font-light text-base">
            based in Indonesia
          </div>
        </div>
        <div class="mt-5">
          <a class="bg-container px-5 py-3 rounded-lg">
            Tell me more
          </a>
        </div>
        <div class="h-20"></div>
      </div>
    </div>
  </section>

  <!-- About SECTION -->
  <section class="py-16 bg-dark">
    <div class="container mx-auto px-6">
      <h1 class="text-brand text-3xl font-black">WHO AM I</h1>
      <p>Hi, everyone!</p>

      <img src="~/assets/img/Hero.png" alt="" class="my-10 h-40 w-40 rounded-full object-cover border-2">

      <div class="text-justify">
        <p>
          I am a web developer with strong passion about programming and web developing.
        </p>
        <br>
        <p>
          I'm capable of designing and creating a website using framework like Laravel, NextJS, and NuxtJS and
          constantly learning to expand my knowledge and skill set.
        </p>
        <br>
        <p> I have a good communication and teamwork skill and excited about the opportunities to work on innovative
          project to turn creativity into a engaging web experience.
        </p>
      </div>

      <div class="mt-10 text-brand text-center">--- Doing My Best ---</div>
    </div>
  </section>

  <!-- Projects SECTION -->
  <section class="py-16">
    <h1 class="text-brand text-2xl font-semibold text-center">Featured Projects</h1>
    <p class="text-center">Some fun projects</p>

    <ul class="px-6 mt-10 container mx-auto">
      <li class="rounded-xl overflow-clip">
        <img src="~/assets/img/Hero.png" alt="" class="h-40 w-full object-cover">
        <div class="bg-fg p-5">
          <h1 class="font-semibold text-lg">Project Name</h1>
          <p class="">Description</p>

          <ul class="mt-5">
            <li class="w-8 h-8 border rounded-full flex justify-center items-center">
              <div>S</div>
            </li>
          </ul>
        </div>
      </li>
    </ul>

  </section>

  <!-- Skills SECTION -->
  <section class="py-16 bg-dark">
    <div class="px-6 container mx-auto">
      <h1 class="text-brand text-2xl font-semibold">Skills</h1>
      <p>Click them for more details</p>

      <div class="grid grid-cols-[min-content_1fr] gap-4 mt-6 text-brand">
        <!-- Row 1 -->
        <div>
          <h2 class="font-light mr-10">Hard Skills</h2>
        </div>
        <div>
          <ul class="flex space-x-2 space-y-2 flex-wrap text-sm">
            <li class="w-8 h-8 border rounded-xl flex justify-center items-center">
              <div>S</div>
            </li>
          </ul>
        </div>

        <!-- Row 2 -->
        <div>
          <h2 class="font-light mr-10">Soft Skills</h2>
        </div>
        <div>
          <ul class="flex space-x-2 space-y-2 flex-wrap text-sm">
            <li class="w-fit h-fit p-2 border rounded-xl flex justify-center items-center">
              <div>Conversational</div>
            </li>
          </ul>
        </div>

        <!-- Row 3 -->
        <div>
          <h2 class="font-light mr-10">Languages</h2>
        </div>
        <div>
          <ul class="flex space-x-2 space-y-2 flex-wrap text-sm">
            <li class="w-fit h-fit p-2 border rounded-xl flex justify-center items-center">
              <div>English</div>
            </li>
            <li class="w-fit h-fit p-2 border rounded-xl flex justify-center items-center">
              <div>Indonesia</div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>

  <!-- Experiences SECTION -->
  <section class="py-16">
    <div class="px-6 container mx-auto">
      <h1 class="text-brand text-2xl font-semibold text-center">My Experiences</h1>
      <p class="text-center">Not Much but Great Experiences</p>
    </div>

    <div class="px-6 mt-10 container mx-auto">
      <!-- Timeline Container -->
      <ul class="relative border-l-3 border-brand pl-6">
        <!-- Timeline Items -->
        <div class="relative mb-12">
          <!-- Dot -->
          <div class="absolute -left-[27px] w-5 h-5 bg-bg rounded-full border-3 border-brand"></div>

          <p class="mb-6 text-brand font-semibold">Sep 2024 - Feb 2025 • 6 Month</p>

          <img src="~/assets/img/exp-Forum_Asisten.png" alt="logo" class="w-20 aspect-square">

          <!-- Job Info -->
          <h1 class="mb-3 mt-5 text-2xl font-semibold">Lab Teaching Assistant</h1>
          <p class="mb-3">Forum Asisten</p>
          <p class="mb-3">Yogyakarta, Indonesia • On-Site</p>
          <p class="mb-3 font-semibold">Responsibilities Include:</p>
          <ul class="list-disc ml-5 text-justify">
            <li>Managing the schedules of fellow assistants within the same course, ensuring smooth coordination.</li>
            <li>Providing guidance and support to students, assisting with coursework and technical challenges.</li>
            <li>Serve as a bridge between students and the lecturer, maintaining clear and effective communication.</li>
          </ul>
        </div>

        <div class="relative mb-12">
          <!-- Dot -->
          <div class="absolute -left-[27px] w-5 h-5 bg-bg rounded-full border-3 border-brand"></div>

          <p class="mb-6 text-brand font-semibold">Feb 2025 - Feb 2025 • 1 Month</p>

          <img src="~/assets/img/exp-AMCC.png" alt="logo" class="w-20 aspect-square">

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
        </div>
      </ul>
    </div>
  </section>


  <footer class="py-16 bg-container rounded-t-xl">
    <div class="px-6 container mx-auto mb-16">
      <p class="text-brand font-semibold">Contact Me</p>
      <h1 class="text-2xl font-semibold">Let's Connect</h1>

      <ul class="my-10 space-y-3">
        <li class="flex space-x-5">
          <img src="~/assets/icons/gmail.svg" alt="gmail icon" class="text-2xl w-5 aspect-square">
          <a href="mail:to">syafiqilham.sho@gmail.com</a>
        </li>
        <li class="flex space-x-5">
          <img src="~/assets/icons/github.svg" alt="github icon" class="text-2xl w-5 aspect-square">
          <a href="mail:to">syafiq-is</a>
        </li>
      </ul>
    </div>
  </footer>
</template>