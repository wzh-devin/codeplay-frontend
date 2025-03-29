import { createApp } from 'vue'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store'

createApp(App).use(pinia).use(router).mount('#app')
