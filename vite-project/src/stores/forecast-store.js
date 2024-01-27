import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const url = 'http://api.weatherapi.com/v1/forecast.json?key=1147ee5723a34b199d6132044242401&days=7&aqi=no&alerts=no&q='

export const useForecastStore = defineStore('forecast', () => {
    const forecast = ref([])
    const loader = ref(false)
    const error = ref({
        status: false,
        message: ''
    })
    const showAverageValues = ref(false)

    const averageValues = computed(() => {
        let avgT = 0
        let avgH = 0
        let maxT = forecast.value[0].day.maxtemp_c
        let minT = forecast.value[0].day.mintemp_c


        forecast.value.forEach((f) => {
            avgT += f.day.avgtemp_c
            avgH += f.day.avghumidity
            if (f.day.maxtemp_c > maxT) maxT = f.day.maxtemp_c
            if (f.day.mintemp_c < minT) minT = f.day.mintemp_c
        })

        avgT = (avgT / forecast.value.length).toFixed(1)
        avgH = (avgH / forecast.value.length).toFixed(1)

        return {
            avgT,
            avgH,
            maxT,
            minT
        }
    })

    function toggleShowAverage() {
        showAverageValues.value = !showAverageValues.value
    }
    async function getForecast(location) {
        loader.value = true
        error.value.status = false
        showAverageValues.value = false

        try {
            const result = await fetch(`${url}${location}`)

            if (result.status >= 400 && result.status < 600) {
                const message = result.statusText == "Bad Request"
                    ? "You entered incorrect request"
                    : "Bad response from server"
                throw new Error(message)
            }

            const data = await result.json()

            forecast.value = data.forecast.forecastday
        }
        catch (err) {
            error.value.status = true
            error.value.message = err.message
        }

        loader.value = false
    }

    return { forecast, loader, error, showAverageValues, averageValues, getForecast, toggleShowAverage }
})