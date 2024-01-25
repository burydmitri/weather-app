import { defineStore } from 'pinia'

export const useForecastStore = defineStore('forecast', {
    state: () => ({
        forecast: [
            {t: 13},
            {t: -26}
        ],
        showAverageValues: true
    }),
    getters: {
        averageValues() {
            const newForecast = {
                avgT: 0,
            }
            
            this.forecast.forEach((day) => {
                newForecast.avgT += day.t
            })

            for(let key in newForecast) {
                newForecast[key] = Math.round(newForecast[key] / this.forecast.length)
            }

            return newForecast
        }
    }
})