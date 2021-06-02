import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Forgot from './pages/Forgot.vue'
import Reset from './pages/Reset.vue'
import Dashboard from './components/pages/Dashboard.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {path:'/', component: Login},
        {path:'/register', component: Register},
        {path:'/forgot-password', component: Forgot},
        {path:'/resetPassword/:resetToken', component: Reset},
        {path:'/dashboard', component: Dashboard},
    ]
})