import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/store"

import Vue3Lottie from "vue3-lottie"


createApp(App).use(store).use(Vue3Lottie).mount('#app')
