<template>
    <main class="flex justify-center">
      <div class="w-full max-w-screen-md p-5 shadow-xl rounded-lg">

        <h1 class="text-center text-5xl text-text-color">
          My weather app
        </h1>

        <WeatherSection />

      </div>
    </main>
</template>

<script setup>
  import WeatherSection from './components/weatherSection.vue'
  
</script>

<style scoped>
</style>
