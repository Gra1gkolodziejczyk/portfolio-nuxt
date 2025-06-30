<script setup lang="ts">
  import TopicAboutMe from './TopicAboutMe.vue';
  import intellijIcon from '~/public/intellijidea.svg';
  import valiseIcon from '~/public/valise.png';
  import linkedinIcon from '~/public/linkedin.svg';
  import bitcoinIcon from '~/public/bitcoin.svg';
  import pepperIcon from '~/public/pepper.png';
</script>

<template>
  <h2 class="text-2xl sm:text-3xl lg:text-5xl mb-6 sm:mb-8 font-bold text-primary">
    À propos de moi
  </h2>
  <div class="grid gap-4 sm:gap-6">
    <TopicAboutMe
      :icon-src="intellijIcon"
      icon-alt="intellij"
      title="Passionné de Développement"
      description="Je suis un développeur passionné par les nouvelles technologies et l'innovation. Mon enthousiasme pour le code me pousse à constamment explorer et apprendre de nouvelles choses."
    />

    <TopicAboutMe
      :icon-src="valiseIcon"
      icon-alt="valise"
      title="Freelance & Entrepreneur"
      description="Je mène une double vie professionnelle en tant que freelance et entrepreneur, toujours à la recherche de nouveaux défis et opportunités. Plusieurs projets à mon actif ! (voir mes projets)"
    />

    <TopicAboutMe
      :icon-src="linkedinIcon"
      icon-alt="linkedin"
      title="En Recherche Active"
      description="Actuellement à la fin de mes études en master 2 expert en développement logiciel, je recherche un CDI pour démarrer une nouvelle aventure professionnelle et mettre à profit mes compétences."
    />

    <TopicAboutMe
      :icon-src="bitcoinIcon"
      icon-alt="bitcoin"
      title="Trader passionné"
      description="Depuis 2020, j'investis dans le Bitcoin et je trade le Forex (EUR-USD / Gold), alliant analyse technique et gestion des risques."
    />

    <TopicAboutMe
      :icon-src="pepperIcon"
      icon-alt="pepper"
      title="Amateur de cuisine épicée"
      description="Grand amateur de cuisine épicée, j'aime découvrir de nouvelles saveurs et expérimenter avec différents styles culinaires."
    />
  </div>
</template>

