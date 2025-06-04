<template>
  <UContainer class="flex flex-row h-full w-full items-center justify-center">
    <div class="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
      <p class="text-lg text-black dark:text-white">Bonjour, je m&apos;appelle</p>
      <h1 class="text-4xl sm:text-7xl font-extrabold text-primary">Graig Kolodziejczyk</h1>
      <h2 class="text-4xl sm:text-7xl font-extrabold text-black dark:text-white">Je suis développeur Full-Stack Web et Mobile.</h2>
      <p class="mt-4 text-lg text-black dark:text-white">
        Je construis des applications complètes et responsives, mobiles ou
        web. Rien ne m&apos;arrête, je suis un entrepreneur dans l&apos;âme et
        autodidacte depuis toujours.</p>
      <div class="flex flex-row gap-4 mt-4">
        <p class="font-bold text-lg sm:pt-1">Stack techniques :</p>
        <div class='flex flex-row items-center justify-center text-center gap-2'>
          <img src="../../assets/react.svg" alt="" class="w-8 h-8">
          <img src="../../assets/tailwindcss.svg" alt="" class="w-8 h-8">
          <img src="../../assets/typescript.svg" alt="" class="w-8 h-8">
          <img src="../../assets/nestjs.svg" alt="" class="w-8 h-8">
          <img src="../../assets/prisma.svg" alt="" class="w-8 h-8">
          <img src="../../assets/nuxtjs.svg" alt="" class="w-8 h-8">
          <img src="../../assets/laravel.svg" alt="" class="w-8 h-8">
          <p class='font-bold flex items-center justify-center text-black dark:text-white'>
              ... et plus encore
            </p>
        </div>
      </div>
      <div class='flex gap-4 mt-4'>
        <UButton class="cursor-pointer" color="primary" variant="solid">
          Me contacter
        </UButton>
        <UButton class="cursor-pointer" color="primary" variant="soft">
           Voir mes projets
        </UButton>
      </div>
    </div>
    <div
      class='max-w-[1200px] flex justify-center items-center content-center text-center w-1/3'
    >
      <img
        src="../../assets/moi.png"
        alt='avatar'
        class='w-96 aspect-square object-cover rounded-full border-8 border-primary p-2 dark:border-primary max-xl:hidden'
      >
    </div>
  </UContainer>
</template>