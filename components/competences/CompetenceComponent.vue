<script setup lang="ts">
import CompetenceSection from './CompetenceSection.vue';
</script>

<template>
  <UContainer class="flex h-screen w-full">
    <div class="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
      <h2 class="text-2xl sm:text-3xl lg:text-5xl mb-6 sm:mb-8 font-bold text-primary">
        Mes compétences
      </h2>
    </div>
    <CompetenceSection />
  </UContainer>
</template>