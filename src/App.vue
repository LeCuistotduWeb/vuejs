<template>
  <div id="app">
    <div class="container-fluid text-center">
      <div class="jumbotron">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1 class="h3">VueJs</h1>
        </div>
      <HelloWorld type="success" msg="Welcome to Your Vue.js App"/>
    </div> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
