<template>
    <Card class="shadow-lg w-[50%] min-w-80 m-auto bg-primary text-primary-text">
        <template #title>{{ forecast.avgT }} °C</template>
        <template #content>
            <p class="m-0">
                {{ `Max: ${forecast.maxT}°C` }} <br />
                {{ `Min: ${forecast.minT}°C` }} <br />
                {{ `Average humidity: ${forecast.avgH} g` }} <br />
            </p>
        </template>
    </Card>
</template>

<script setup>
import Card from 'primevue/card';

const { forecast } = defineProps(['forecast'])
</script>