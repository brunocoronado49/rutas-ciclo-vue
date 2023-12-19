import { createWebHashHistory, createRouter } from 'vue-router'
import AboutPage from '../modules/pokemon/pages/AboutPage.vue'
import ListPage from '../modules/pokemon/pages/ListPage.vue'
import PokemonPage from '../modules/pokemon/pages/PokemonPage.vue'

const routes = [
    { path: '/', component: ListPage },
    { path: '/about', component: AboutPage },
    { path: '/id', component: PokemonPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
