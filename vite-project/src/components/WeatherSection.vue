<template>
    <ProgressSpinner 
        v-if="forecastStore.loader"
        class="w-24 h-24 m-auto"
        strokeWidth="8"
        fill="var(--surface-ground)"
        animationDuration=".5s" aria-label="Custom ProgressSpinner"
    />

    <div v-if="forecastStore.showAverageValues">
        <Card class="shadow-lg w-[50%] min-w-80 m-auto bg-primary text-primary-text"> 
            <template #title>{{ forecastStore.averageValues.avgT }} °C</template>
            <template #content>
                <p class="m-0">
                    {{ `Max: ${forecastStore.averageValues.maxT}°C\n` }} <br />
                    {{ `Min: ${forecastStore.averageValues.minT}°C` }} <br />
                    {{ `Average humidity: ${forecastStore.averageValues.avgH} g` }} <br />
                </p>
            </template>
        </Card>
    </div>
    <div v-else class="flex gap-y-3 justify-between flex-wrap">
        <Card 
            v-for="forecast in forecastStore.forecast" 
            class="shadow-lg w-[49%] min-w-80 bg-surface-100"
        > 
            <template #title>{{ forecast.day.avgtemp_c }} °C</template>
            <template #subtitle>{{ forecast.date }}</template>
            <template #content>
                <p class="m-0">
                    {{ `Max: ${forecast.day.maxtemp_c}°C\n` }} <br />
                    {{ `Min: ${forecast.day.mintemp_c}°C` }} <br />
                    {{ `Average humidity: ${forecast.day.avghumidity} g` }} <br />
                    {{ forecast.day.condition.text }} <br />
                </p>
            </template>
        </Card>
    </div>
</template>

<script setup>
    import { useForecastStore } from '../stores/forecast-store' 
    import Card from 'primevue/card';
    import ProgressSpinner from 'primevue/progressspinner';

    const forecastStore = useForecastStore();
</script>