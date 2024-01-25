<template>
    <div class="w-full max-w-screen-md p-5 shadow-xl rounded-lg">

        <h1 class="text-center text-5xl text-text-color mb-20">
            My weather app
        </h1>

        <WeatherSection />

    </div>
</template>

<script setup>
  import WeatherSection from './weatherSection.vue'
</script>