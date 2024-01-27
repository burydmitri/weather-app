<template>
    <div v-if="loader" class="flex gap-y-3 justify-between flex-wrap">
        <CardsSkeletons />
    </div>

    <Message v-if="error.status" severity="error">Error! {{ error.message }}</Message>

    <div v-if="showAverageValues && !error.status">
        <AverageCard :forecast="averageValues" />
    </div>
    <div v-else-if="!error.status && !loader" class="flex gap-y-3 justify-between flex-wrap">
        <ForecastCards :forecast="forecast" />
    </div>

    <ForecastChart v-if="forecast.length && !error.status" class="mt-10" />
</template>

<script setup>
import { storeToRefs } from 'pinia'
import Message from 'primevue/message';
import AverageCard from './AverageCard.vue';
import ForecastCards from './ForecastCards.vue';
import ForecastChart from './ForecastChart.vue';
import CardsSkeletons from './CardsSkeletons.vue';


import { useForecastStore } from '../stores/forecast-store'

const forecastStore = useForecastStore();

const { forecast, showAverageValues, averageValues, error, loader } = storeToRefs(forecastStore)
</script>