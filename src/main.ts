/*
 * @Author: xuyingchao
 * @Date: 2023-11-28 14:54:40
 * @LastEditors: xuyingchao
 * @LastEditTime: 2023-12-13 10:14:41
 * @Descripttion: 
 */
import './assets/main.css'
import 'wow.js/css/libs/animate.css'
import 'aos/dist/aos.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'hover.css/css/hover-min.css'
import 'animate.css';


import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)


app.mount('#app')
