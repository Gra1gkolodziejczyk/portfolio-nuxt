<script setup lang="ts">
defineProps<{
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="flex items-start gap-4">
    <img :src="iconSrc" :alt="iconAlt" class="w-10 h-10">
    <div>
      <h3 class="text-xl font-semibold mb-2 text-black dark:text-white">
        {{ title }}
      </h3>
      <p class="text-muted-foreground">
        {{ description }}
      </p>
    </div>
  </div>
</template>
