import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './assets/css/main.css'
import './input.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
