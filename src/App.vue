<template>
  <div id="app">
    <div class="jumbotron text-center">
      <img alt="Vue logo" src="./assets/logo.png">
      <h1 class="h3">VueJs</h1>
      <HelloWorld type="success" msg="Welcome to Your Vue.js App"/>
    </div>

    <div class="container">

      <!-- Carousel -->
      <carousel>
        <carousel-slide>
          <img src="https://picsum.photos/1200/500/?image=1" alt="image ipsum" class="img-fluid">
        </carousel-slide>
        <carousel-slide>
          <img src="https://picsum.photos/1200/500/?image=2" alt="image ipsum" class="img-fluid">
        </carousel-slide>
      </carousel>
      
      <!-- Todo list -->
      <div class="row my-5">
        <div class="col-sm-10 col-md-6" v-for="(todoList, i) in todoLists" :key="i">
          <Todo :listTitle="todoList.listname"></Todo>
        </div>
      </div>
      <div class="form-group row">
        <input type="text" v-model="newListName" @keyup.enter="addList(newListName)" class="form-control col-2" placeholder="Nom de la liste">
        <button @click="addList(newListName)" class="btn btn-primary ml-2">Ajouter une liste</button>
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

    <footer class="footer bg-dark mt-4">
        <p class="text-white py-4 text-center"></p>
    </footer>

  </div>
</template>

<script>
import Carousel from './components/carousel/Carousel.vue'
import CarouselSlide from './components/carousel/CarouselSlide.vue'
import Todo from './components/Todo.vue'
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import Chronometer from './components/Chronometer.vue'

export default {
  name: 'app',
  components: {
    Carousel,
    CarouselSlide,
    Todo,
    HelloWorld,
    Counter,
    Chronometer,
  },
  data() {
    return {
      newListName: "",
      todoLists: [
        {listname: 'Default liste'},
      ],
    }
  },
  methods: {
    addList(name){
      this.todoLists.push({listname: name});
      return this.newListName = '';
    }
  },
}
</script>

<style>
</style>
