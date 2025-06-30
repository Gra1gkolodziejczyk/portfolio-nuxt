<script setup lang="ts">
import SkillCard from './SkillCard.vue'
import type { Skill } from '~/types/skill.type'

defineProps<{
  skills: Skill[]
  category: string
}>()
</script>

<template>
  <div class="space-y-6">
    <!-- Grille des compétences -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <SkillCard
        v-for="skill in skills"
        :key="skill.name"
        :skill="skill"
      />
    </div>
  </div>
</template>
