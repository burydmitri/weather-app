import { defineStore } from 'pinia'

export const useForecastStore = defineStore('forecast', {
    state: () => ({
        forecast: [
            {t: 30},
            {t: -30}
        ]
    })
})