<template>
    <Button 
        aria-label="Submit"
        icon="pi pi-chart-bar"
        @click="toggleShowAverage"
    />
</template>

<script setup>
    import 'primeicons/primeicons.css'
    import Button from 'primevue/button';
    import { useForecastStore } from '../stores/forecast-store' 

    const { toggleShowAverage } = useForecastStore();
</script>