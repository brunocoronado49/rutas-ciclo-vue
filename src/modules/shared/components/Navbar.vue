<template>
    <div>
        <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
        <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }">Pokemon Id</router-link>
        <router-link :to="{ name: 'about' }">About</router-link> -->
        <CustomLink v-for="link in links" :key="link.to" :link="link" />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    name: 'Navbar',
    data() {
        return {
            links: [
                { to: 'pokemon-home', name: 'Pokemons' },
                { to: 'pokemon-id', name: 'By ID', id: 151 },
                { to: 'pokemon-about', name: 'About Pokemon' },

                { to: 'dbz-characters', name: 'Characters' },
                { to: 'dbz-about', name: 'About DBZ' },

                { to: 'https://google.com', name: 'Google' },
            ],
        }
    },
    components: {
        CustomLink: defineAsyncComponent(() => import(
            /* webpackChunkName: CustomLink */
            './CustomLink.vue'
        ))
    }
}

</script>


<style scoped>
    div {
        padding: 0 50px;   
    }

    div a {
        font-weight: bold;
        color: #2e3e50;
        margin: 0 15px;
    }

    /* a.router-link-exact-active {
        color: #42b983;
    } */
</style>