<template>
  <header class="header">
    My weater app
  </header>
  <main class="main">
    <WeatherSection :forecast="forecastStore.forecast"/>
  </main>
</template>

<script setup>
  // import { WeatherSection } from './components/weatherSection.vue'
  import WeatherSection from './components/weatherSection.vue'
  import { useForecastStore } from './stores/forecast-store';

  const forecastStore = useForecastStore();
</script>

<style scoped>
</style>
