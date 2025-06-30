<script setup lang="ts">
import type { Skill } from '~/types/skill.type'
defineProps<{
  skill: Skill
}>()
</script>

<template>
  <UCard class="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <template #header>
      <div class="flex flex-row justify-between items-center">
        <div class="flex items-center justify-center text-center gap-3">
          <img :src="skill.icon" :alt="skill.name" class="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">

          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ skill.name }}
          </h3>
        </div>
      </div>
    </template>
  </UCard>
</template>
