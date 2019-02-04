<template>
  <div id="app">
    <div class="jumbotron text-center">
      <img alt="Vue logo" src="./assets/logo.png">
      <h1 class="h3">VueJs</h1>
      <HelloWorld type="success" msg="Welcome to Your Vue.js App"/>
    </div>

    <div class="container">
      
      <!-- Todo list -->
      <div class="row my-5">
        <div class="col-sm-10 col-md-6">
          <Todo listTitle="Liste 1"></Todo>
        </div>
        <div class="col-sm-10 col-md-6">
          <Todo listTitle="Liste 2"></Todo>
        </div>
      </div>

      <hr>
      
      <div class="row">
        <div class="col-sm-10 col-md-6">
          <!-- counter -->
          <Counter ></Counter>
        </div>
        
        <div class="col-sm-10 col-md-6">
          <!-- chronos -->
          <Chronometer ></Chronometer>
        </div>
      </div>
      
    </div> 
  </div>
</template>

<script>
import Todo from './components/Todo.vue'
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import Chronometer from './components/Chronometer.vue'

export default {
  name: 'app',
  components: {
    Todo,
    HelloWorld,
    Counter,
    Chronometer,
  },
}
</script>

<style>
</style>
