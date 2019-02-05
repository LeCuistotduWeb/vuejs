<template>
    <div id="carousel">
        <slot></slot>

        <button class="carousel_nav carousel_prev" @click.prevent="prev">Prev</button>
        <button class="carousel_nav carousel_next" @click.prevent="next">Next</button>

        <div class="carousel_pagination">
            <button :class="{active: n - 1 == index}" v-for="(n, i) in slidesCount" :key="i" @click="showSlide(n-1)"></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            slides: [],
        }
    },
    mounted() {
        this.slides = this.$children
        this.slides.forEach((slide, index) => {
            slide.index = index
        })
    },
    computed: {
        slidesCount(){ return this.slides.length }
    },
    methods: {
        next(){
            this.index++
            if(this.index >= this.slidesCount){
                this.index = 0
            }
        },
        prev(){
            this.index--
            if(this.index < 0){
                this.index = this.slidesCount - 1
            }
        },
        showSlide(value){
            this.index = value
        }
    },
    
}
</script>

<style lang="scss" scoped>
    #carousel{
        position: relative;
        .carousel_nav{
            position: absolute;
            top: 50%;
            margin-top: -20px;
            left: 10px;
            width: 50px;
            height: 50px;
            background-color: rgba(36, 36, 36, 0.548);
            color: rgb(255, 255, 255);
        }
        .carousel_nav.carousel_next{
            top: 50%;
            margin-top: -20px;
            left: auto;
            right: 10px;
        }
        .carousel_pagination{
            position: absolute;
            bottom: 5px;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            button{
               background-color: rgba(0, 0, 0, 0.644);
               border: none;
               border-radius: 50%;
               margin: 0 2px;
               width: 15px;
               height: 15px;
               &.active{
                   background-color: rgba(255, 255, 255, 1);
               }
            }
        }
    }
</style>