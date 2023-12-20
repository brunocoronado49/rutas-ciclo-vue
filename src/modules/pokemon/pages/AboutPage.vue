<template>
    <h1>About Page</h1>
    <hr>
    <h3>{{ name }}</h3>
    <button @click="onChangeName">Change name</button>
</template>

<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            name: 'Francisco'
        }
    },
    methods: {
        onChangeName() {
            this.name = 'Bruce'
        }
    },

    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        this.name = 'Ivanna'
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    errorCaptured() {
        console.log('errorCaptured')
    },
    renderTracked() {
        console.log('renderTracker')
    },
    renderTriggered() {
        console.log('renderTriggered')
    },
}
</script>

<style scoped>

</style>