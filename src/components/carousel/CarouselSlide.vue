<template>
    <div id="Carousel-slide" v-show="visible">
        <div class="carousel-text">
            Index: {{ index }}
            Visible: {{ visible }}
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0
        }
    },
    computed: {
        visible(){
            return this.index === this.$parent.index
        }
    },
    
}
</script>

<style lang="scss" scoped>
    #Carousel-slide{
        position: relative;
        .carousel-text{
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            margin-top: -0.5rem;
            text-align: center;
            color: white;
            text-shadow: 0 2px 10px black;
        }
    }
</style>