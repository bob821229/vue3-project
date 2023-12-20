import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import VitePluginSass from 'vite-plugin-sass';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VitePluginSass())

app.mount('#app')
