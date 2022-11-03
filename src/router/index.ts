import { createRouter, createWebHashHistory } from 'vue-router'

import Home from "../views/IndexView.vue"
import Add from "../views/AddView.vue"

const routes = [
    { path: '/', name:"home", component: Home},
    { path: '/add', name:"add", component: Add}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
