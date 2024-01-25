<template>
    <main class="flex justify-center">

      <AppContent />

      <AverageButton class="absolute top-5 right-5 shadow-md"/>

    </main>
</template>

<script setup>
  import AppContent from './components/AppContent.vue';
  import AverageButton from './components/AverageButton.vue'
</script>

<style scoped>
</style>
