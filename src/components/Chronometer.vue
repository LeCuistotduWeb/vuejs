<template>
    <div id="Chronometer">
        <p>Chronomètre: {{ chrono }}</p>
        <button @click="startChronometer" class="btn btn-success mr-2">Start chronomètre</button>
    </div>
</template>

<script>
export default {
    name: 'Chronometer',
    data() {
        return {
            chrono: 0,
        }
    },
    props: {
    },
    methods: {
        startChronometer(){
            return setInterval(()=>{
                this.chrono++
            },500)
        },
    },
}
</script>

<style lang="scss" scoped>
    
</style>