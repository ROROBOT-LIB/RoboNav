import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Index from './views/index.vue'
import About from './views/about.vue'

import './assets/css/fonts/linecons/css/linecons.css'
import './assets/css/fonts/fontawesome/css/font-awesome.min.css'
import './assets/css/bootstrap.css'
import './assets/css/xenon-core.css'
import './assets/css/xenon-components.css'
import './assets/css/xenon-skins.css'
import './assets/css/nav.css'

const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
