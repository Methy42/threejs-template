import * as VueRouter from 'vue-router'

import ThreeLayout from '../layouts/ThreeLayout.vue'

import Home from '../views/Home/Index.vue'
import Login from '../views/Login/Index.vue'

const routes = [
    { path: '/', component: ThreeLayout, children: [
        { path: '', component: Home },
    ]},
    { path: '/login', component: Login },
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})
