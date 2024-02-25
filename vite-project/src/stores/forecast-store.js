import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const VITE_URL = import.meta.env.VITE_URL
const VITE_API_KEY = import.meta.env.VITE_API_KEY

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
        
        const params = new URLSearchParams({
            key: VITE_API_KEY,
            days: 7,
            aqi: 'no',
            alerts: 'no',
            q: location
        })
        try {
            const result = await fetch(VITE_URL + params)

            if (result.status >= 400 && result.status < 600) {
                const message = result.statusText == "Bad Request"
                    ? "You entered incorrect request"
                    : "Bad response from server"
                throw new Error(message)
            }

            const data = await result.json()

            console.log(data)

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