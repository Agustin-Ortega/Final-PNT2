import Vue from 'vue'
import VueRouter from 'vue-router'
import Respuestas from './componentes/Respuestas.vue'


Vue.use(VueRouter)

export const router = new VueRouter({    
    mode: 'history',    
    routes: [
        {path: '/respuestas', component: Respuestas},
    ]
})