<template>
    <div id="Chronometer">
        <p>Chronomètre: {{ chrono }}</p>
        <div class="row">
            <button @click="startChronometer" class="btn btn-success mr-2">Démarer</button>
            <button @click="stopChronometer" class="btn btn-secondary mr-2">Arrêter</button>
            <button @click="resetChronometer" class="btn btn-danger mr-2">Remise a zéro</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chronometer',
    data() {
        return {
            chrono: 0,
            chronometer: null
        }
    },
    props: {
    },
    methods: {
        startChronometer(){
            return this.chronometer = setInterval(()=>{
                this.chrono++
            },500)
        },
        stopChronometer(){
            return clearInterval(this.chronometer);
        },
        resetChronometer(){
            this.stopChronometer()
            return this.chrono = null;
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>