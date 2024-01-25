import { defineStore } from 'pinia'

const url = 'http://api.weatherapi.com/v1/forecast.json?key=1147ee5723a34b199d6132044242401&days=7&aqi=no&alerts=no&q='

export const useForecastStore = defineStore('forecast', {
    state: () => ({
        forecast: [],
        loader: false,
        showAverageValues: false
    }),
    getters: {
        averageValues() {
            let avgT = 0
            let avgH = 0
            let maxT = this.forecast[0].day.maxtemp_c
            let minT = this.forecast[0].day.mintemp_c

            
            this.forecast.forEach((forecast) => {
                avgT += forecast.day.avgtemp_c
                avgH += forecast.day.avghumidity
                if (forecast.day.maxtemp_c > maxT) maxT = forecast.day.maxtemp_c
                if (forecast.day.maxtemp_c < minT) minT = forecast.day.maxtemp_c
            })

            avgT = Math.round(avgT / this.forecast.length)
            avgH = Math.round(avgH / this.forecast.length)

            return {
                avgT,
                avgH,
                maxT,
                minT
            }
        }
    },
    actions: {
        toggleShowAverage() {
            this.showAverageValues = !this.showAverageValues
        },
        async getForecast(location) {
            this.loader = true
            const result = await fetch(`${url}${location}`)
            const data = await result.json()

            this.forecast = data.forecast.forecastday
            this.loader = false
        }
    }
})