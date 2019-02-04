<template>
    <div id="Counter">
        <p>Compteur: {{ counter }}</p>
        <button @click="increment" class="btn btn-primary mr-2">Incrementer</button>
        <button @click="decrement" class="btn btn-warning mr-2">Decrementer</button>
        <button @click="reset" class="btn btn-danger mr-2">Reset</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data() {
        return {
            counter: 0,
        }
    },
    props: {
    },
    methods: {
        increment(){
            return this.counter++;
        },
        decrement(){
            return this.counter > 0 ? this.counter-- : this.counter = 0;
        },
        reset(){
            return this.counter = 0;
        },
    },
}
</script>

<style lang="scss" scoped>
    
</style>