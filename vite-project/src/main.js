import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'

import './styles/style.css'

import 'primevue/resources/themes/lara-light-indigo/theme.css'
// import 'primevue/resources/themes/md-light-deeppurple/theme.css'
// import 'primevue/resources/themes/fluent-light/theme.css'
// import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'

createApp(App).use(createPinia()).use(PrimeVue, {
    pt: {
        card: {
            class: 'shadow-lg',
            title: 'text-center text-7xl mt-16',
            subtitle: 'text-center text-s font-extralight m-0 mb-10',
            content: 'text-center'

        }
    },
    ripple: true
}).mount('#app')
