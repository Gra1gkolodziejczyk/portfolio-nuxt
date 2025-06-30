<script setup lang="ts">
import { ref } from 'vue'
import SkillGrid from './SkillGrid.vue'
import type { Skill } from '~/types/skill.type'

interface TabItem {
  key: string
  label: string
  icon?: string
}

const props = defineProps<{
  competences: Record<string, Skill[]>
  tabs: TabItem[]
}>()

const activeTab = ref(props.tabs[0]?.key || 'frontend')
</script>

<template>
  <div class="w-full">
    <!-- Navigation des onglets -->
    <div class="mb-12">
      <nav class="-mb-px flex space-x-8 justify-center">
        <button
            v-for="tab in tabs"
            :key="tab.key"
            @click="activeTab = tab.key"
            :class="[
            'py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200',
            activeTab === tab.key
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
          ]"
        >
          <div class="flex items-center space-x-2">
            <UIcon v-if="tab.icon" :name="tab.icon" class="w-4 h-4" />
            <span>{{ tab.label }}</span>
          </div>
        </button>
      </nav>
    </div>

    <!-- Contenu des onglets -->
    <div class="min-h-[400px]">
      <Transition
          name="tab-fade"
          mode="out-in"
          enter-active-class="transition-opacity duration-300"
          leave-active-class="transition-opacity duration-150"
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
      >
        <SkillGrid
            :key="activeTab"
            :skills="competences[activeTab] || []"
            :category="tabs.find(t => t.key === activeTab)?.label || ''"
        />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.3s ease;
}

.tab-fade-enter-from,
.tab-fade-leave-to {
  opacity: 0;
}
</style>
