import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import AddRest from './components/AddRest.vue'
import UpdateRest from './components/UpdateRest.vue'

const routes = [
    {
        name: 'Home',
        component: HomeComponent,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },
    {
        name: 'Login',
        component: LogIn,
        path: '/login'
    },
    {
        name: 'AddRest',
        component: AddRest,
        path: '/add'
    },
    {
        name: 'UpdateRest',
        component: UpdateRest,
        path: '/update'
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router