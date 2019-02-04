<template>
  <div id="app">
    <div class="jumbotron text-center">
      <img alt="Vue logo" src="./assets/logo.png">
      <h1 class="h3">VueJs</h1>
      <HelloWorld type="success" msg="Welcome to Your Vue.js App"/>
    </div>

    <div class="container">
      
      <!-- counter -->
      <div class="row">
        <Counter ></Counter>
      </div>
      
      <!-- chronos -->
      <div class="row">
        <Chronometer ></Chronometer>
      </div>

    </div> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import Chronometer from './components/Chronometer.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Counter,
    Chronometer,
  }
}
</script>

<style>
</style>
