<template>
    <UContainer class="fixed top-0 left-0 right-0 z-50 bg-white">
        <header class="py-4">
            <nav class="flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center">
                    <NuxtLink to="/" class="flex items-center space-x-2">
                        <img src="../assets/nuxtjs.svg" alt="Logo" class="w-8 h-8">
                    </NuxtLink>
                </div>

                <!-- Navigation Links - Desktop -->
                <div class="hidden md:flex items-center space-x-8">
                    <NuxtLink to="/" class="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                        Accueil
                    </NuxtLink>
                    <NuxtLink to="/about" class="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                        À propos de moi
                    </NuxtLink>
                    <NuxtLink to="/skills" class="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                        Mes compétences
                    </NuxtLink>
                    <NuxtLink to="/projects" class="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                        Mes projets
                    </NuxtLink>
                </div>

                <!-- Contact Button -->
                <div class="hidden md:block">
                    <UButton
                        to="/contact"
                        color="primary"
                        variant="solid"
                        class="font-medium"
                    >
                        Contacter-moi
                    </UButton>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <UButton
                        icon="i-heroicons-bars-3"
                        color="gray"
                        variant="ghost"
                        class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                        @click="isOpen = !isOpen"
                    />
                </div>
            </nav>

            <!-- Mobile Menu -->
            <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <div v-if="isOpen" class="md:hidden absolute left-0 right-0 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-b-lg">
                    <div class="flex flex-col space-y-4">
                        <NuxtLink 
                            v-for="(link, index) in [
                                { to: '/', text: 'Accueil' },
                                { to: '/about', text: 'À propos de moi' },
                                { to: '/skills', text: 'Mes compétences' },
                                { to: '/projects', text: 'Mes projets' }
                            ]"
                            :key="index"
                            :to="link.to"
                            class="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors px-4 py-2"
                            @click="isOpen = false"
                        >
                            {{ link.text }}
                        </NuxtLink>
                        <UButton
                            to="/contact"
                            color="primary"
                            variant="solid"
                            class="w-full"
                            @click="isOpen = false"
                        >
                            Contacter-moi
                        </UButton>
                    </div>
                </div>
            </Transition>
        </header>
    </UContainer>
</template>

<script setup>
const isOpen = ref(false)
</script>