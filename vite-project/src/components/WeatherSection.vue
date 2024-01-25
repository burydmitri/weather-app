<template>
    <div v-if="showAverageValues">
        <Card class="shadow-lg w-[50%] min-w-80 m-auto"> 
            <template #title>{{ averageValues.avgT }} °C</template>
            <template #subtitle>Monday 18.09</template>
            <template #content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
        </Card>
    </div>
    <div v-else class="flex gap-3 justify-between flex-wrap">
        <Card 
            v-for="day in forecast" 
            class="shadow-lg w-[48%] min-w-80 m-auto"
        > 
            <template #title>{{ day.t }} °C</template>
            <template #subtitle>Monday 18.09</template>
            <template #content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
        </Card>
    </div>
</template>

<script setup>
    import { useForecastStore } from '../stores/forecast-store' 
    import Card from 'primevue/card';

    const {forecast, showAverageValues, averageValues} = useForecastStore();
</script>