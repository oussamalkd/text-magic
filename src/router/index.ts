import { createRouter, createWebHashHistory } from 'vue-router'

import Home from "../views/IndexView.vue"
import AddView from "../views/AddView.vue"

const routes = [
    { path: '/', name:"home", component: Home},
    { path: '/add', name:"add", component: AddView}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
