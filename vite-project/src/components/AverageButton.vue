<template>
    <Button
        text raised
        aria-label="Submit"
        icon="pi pi-chart-bar"
        :class="{ hidden: !forecastStore.forecast.length }"
        @click="forecastStore.toggleShowAverage"
    />
</template>

<script setup>
    import 'primeicons/primeicons.css'
    import Button from 'primevue/button';
    import { useForecastStore } from '../stores/forecast-store' 

    const forecastStore = useForecastStore();
</script>