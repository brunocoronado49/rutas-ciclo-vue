<template>
    <div>
        <router-link :to="{ name: 'home' }">Pokemon List</router-link>
        <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }">Pokemon Id</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
    </div>
</template>

<style scoped>
    div {
        padding: 0 50px;   
    }

    div a {
        font-weight: bold;
        color: #2e3e50;
        margin: 0 15px;
    }

    a.router-link-exact-active {
        color: #42b983;
    }
</style>