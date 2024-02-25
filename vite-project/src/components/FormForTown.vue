<template>
  <form @submit.prevent="getForecast(value)" class="flex justify-between mb-5">
    <InputText type="text" class="w-[80%]" v-model="value" placeholder="Input your town..." />
    <Button class="pi pi-search w-[18%]" type="submit" />
  </form>
</template>

<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { useForecastStore } from '../stores/forecast-store';

import { ref } from 'vue'

const value = ref('')

const { getForecast } = useForecastStore()
</script>