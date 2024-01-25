<template>
    <main class="flex justify-center">
      <div class="w-full max-w-screen-md p-5 shadow-xl rounded-lg">

        <h1 class="text-center text-5xl text-text-color mb-20" @click="toggleShowAverage">
          My weather app
        </h1>

        <WeatherSection />

      </div>
      <Button 
        aria-label="Submit"
        icon="pi pi-chart-bar"
        @click="toggleShowAverage"
        class="absolute top-5 right-5 shadow-md"
      />
    </main>
</template>

<script setup>
  import 'primeicons/primeicons.css'
  import Button from 'primevue/button';
  import WeatherSection from './components/weatherSection.vue'
  import { useForecastStore } from './stores/forecast-store' 

  const { toggleShowAverage } = useForecastStore();
</script>

<style scoped>
</style>
