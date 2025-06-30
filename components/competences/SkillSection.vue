<script setup lang="ts">
import SkillTabs from './SkillTabs.vue';
import { useSkillsData } from '~/types/useSkillsData';

const { competences, tabs } = useSkillsData()
</script>

<template>
  <div class="relative min-w-screen min-h-screen py-16">
    <div class="flex flex-col justify-center items-center h-full">
      <h2 class="text-2xl sm:text-3xl lg:text-5xl mb-6 sm:mb-8 font-bold text-primary">
        Mes compétences
      </h2>
    </div>
    <UContainer class="max-w-7xl mx-auto px-4">
      <!-- Onglets avec compétences -->
      <SkillTabs
          :competences="competences"
          :tabs="tabs"
      />
    </UContainer>
  </div>
</template>
