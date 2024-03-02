import Introduce from '@/views/Introduce.vue'
import Animation from '@/views/Animation'
import Home from '@/views/Home'
import NotFind from '@/views/NotFind'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/Home' },
    { path: '/Introduce', component: Introduce },
    { path: '/Home', component: Home },
    { path: '/Animation', component: Animation },
    { path: '*', component: NotFind }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: "exact_active"
})

export default router