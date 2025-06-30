<script setup lang="ts">
import AboutMe from './components/about/AboutMe.vue';
import AccueilComponent from './components/accueil/AccueilComponent.vue';
import Header from './layout/HeaderLayout.vue';
import SkillComponent from "~/components/competences/SkillComponent.vue";
</script>

<template>
  <div class="w-full h-screen">
    <Header />
    <AccueilComponent />
    <AboutMe />
    <SkillComponent />
  </div>
</template>
