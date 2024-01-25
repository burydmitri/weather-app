<template>
    <Card v-for="f in forecast" class="shadow-lg w-[49%] min-w-80 bg-surface-100">
        <template #title>{{ f.day.avgtemp_c }} °C</template>
        <template #subtitle>{{ f.date }}</template>
        <template #content>
            <p class="m-0">
                {{ `Max: ${f.day.maxtemp_c}°C` }} <br />
                {{ `Min: ${f.day.mintemp_c}°C` }} <br />
                {{ `Average humidity: ${f.day.avghumidity} g` }} <br />
                {{ f.day.condition.text }} <br />
            </p>
        </template>
    </Card>
</template>

<script setup>
import Card from 'primevue/card';

const { forecast } = defineProps(['forecast'])
</script>