<script setup lang="ts">
defineProps<{
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="flex items-start gap-3 sm:gap-4">
    <img :src="iconSrc" :alt="iconAlt" class="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
    <div class="min-w-0 flex-1">
      <h3 class="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-black dark:text-white">
        {{ title }}
      </h3>
      <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>
