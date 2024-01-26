<template>
    <ProgressSpinner v-if="forecastStore.loader" class="w-24 h-24 m-auto" strokeWidth="8" fill="var(--surface-ground)"
        animationDuration=".5s" aria-label="Custom ProgressSpinner" />

    <Message v-if="forecastStore.error.status" severity="error">Error! {{ forecastStore.error.message }}</Message>

    <div v-if="forecastStore.showAverageValues && !forecastStore.error.status">
        <AverageCard :forecast="forecastStore.averageValues" />
    </div>
    <div v-else-if="!forecastStore.error.status" class="flex gap-y-3 justify-between flex-wrap">
        <ForecastCards :forecast="forecastStore.forecast" />
    </div>

    <ForecastChart v-if="forecastStore.forecast.length && !forecastStore.error.status" class="mt-10" />
</template>

<script setup>
import { useForecastStore } from '../stores/forecast-store'
import ForecastCards from './ForecastCards.vue';
import AverageCard from './AverageCard.vue';
import ProgressSpinner from 'primevue/progressspinner';
import Message from 'primevue/message';

import ForecastChart from './ForecastChart.vue'

const forecastStore = useForecastStore();
</script>