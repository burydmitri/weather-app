<template>
    <div v-if="forecastStore.loader" class="flex gap-y-3 justify-between flex-wrap">
        <CardsSkeletons />
    </div>

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
import Message from 'primevue/message';
import AverageCard from './AverageCard.vue';
import ForecastCards from './ForecastCards.vue';
import CardsSkeletons from './CardsSkeletons.vue';

import { useForecastStore } from '../stores/forecast-store'

import ForecastChart from './ForecastChart.vue'

const forecastStore = useForecastStore();
</script>