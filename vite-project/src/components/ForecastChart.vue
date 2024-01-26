<template>
    <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
</template>

<script setup>
import Chart from 'primevue/chart';
import { ref, onMounted, watch } from "vue";

import { useForecastStore } from '../stores/forecast-store'
const forecastStore = useForecastStore();

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});
watch(
    () => forecastStore.forecast,
    () => {
        chartData.value = setChartData();
        chartOptions.value = setChartOptions();
    },
    { deep: true }
)

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    const dates = forecastStore.forecast.map((item) => (new Date(item.date)).toDateString().slice(0, 10))

    return {
        labels: dates,
        datasets: [
            {
                label: 'Weekly forecast',
                data: forecastStore.forecast.map(item => item.day.avgtemp_c),
                fill: false,
                borderColor: documentStyle.getPropertyValue('--primary-color'),
                tension: 0.4
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
</script>