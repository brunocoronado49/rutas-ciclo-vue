<template>
    <h1>Pokemon Page <span>#{{ id }}</span></h1>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>

<script>
export default {
    name: 'PokemonPage',
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            // id: this.$route.params.id
            pokemon: null
        }
    },
    created() {
        // const  { id } = this.$route.params
        // this.id = id
        // console.log(this.$attrs)
        this.getPokemon()
    },
    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(r => r.json())
                this.pokemon = pokemon
                console.log(pokemon)
            } catch (error) {
                this.$router.push('/')
                console.log('Nothing to do here.')
            }
        }
    },
    watch: {
        id() {
            this.getPokemon()
        }
    }
}
</script>

<style scoped>

</style>