import { createRouter, createWebHashHistory } from 'vue-router'

import Home from "../views/IndexView.vue"
import AddView from "../views/AddView.vue"
import EditView from "../views/EditView.vue"

const routes = [
    { path: '/', name:"home", component: Home},
    { path: '/add', name:"add", component: AddView},
    { path: '/edit/:id', component: EditView}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
