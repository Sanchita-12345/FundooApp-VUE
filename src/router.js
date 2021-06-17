import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Forgot from './pages/Forgot.vue'
import Reset from './pages/Reset.vue'
import Dashboard from './components/pages/Dashboard.vue'
import Createnote from './components/pages/Createnote.vue'
import Getnote from './components/pages/Getnote.vue'
// import { component } from 'vue/types/umd'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {path:'/', component: Login},
        {path:'/register', component: Register},
        {path:'/forgot-password', component: Forgot},
        {path:'/resetPassword/:resetToken', component: Reset},
        {
            path:'/dashboard',
            component:Dashboard,
            children:[{
                path:'/createnote',
                component:Createnote
            },
            {   path:'/getnote',
                component:Getnote
            },
        ]
        },
    ]
    
})