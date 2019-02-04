<template>
    <div id="Todos">
       
        <h2>{{ listTitle }}</h2>

        <input type="text" @keyup.enter="addTodo" v-model="newTodo" class="form-control" placeholder="Ajouter une tâche à la liste ...">
        
        <div v-show="hasTodos">
            <input type="checkbox" class="mt-4" id="TodoSelectAll" v-model="allDone">
            <label for="TodoSelectAll">Tout selectionner</label>
        </div>

        <div class="alert alert-secondary mt-2" v-if="!hasTodos">Liste vide</div>

       <ul class="list-group">
        
        <li v-for="todo in filteredTodos" class="list-group-item" :class="{completed: todo.completed, editing: todo === editing}">
            <input type="checkbox" class="mr-2" v-model="todo.completed">
            
            <input type="text" v-model="todo.text" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" v-if="todo === editing" v-focus="todo === editing" @blur="doneEdit">
            
            <span @dblclick="editTodo(todo)" @keyup.enter="doneEdit" v-if="todo != editing">{{ todo.text }}</span>
            
            <button class="float-right btn btn-danger" @click="deleteTodo(todo)">suppr</button>
            <button class="float-right btn btn-warning mr-2" @click="editTodo(todo)">edit</button>
        </li>

        </ul>
        
        <p class="mt-2" v-show="hasTodos">la liste contient : {{ todos.length }} tâches dont {{ remaining }} non terminé</p>
        
        <div class="filters" v-show="hasTodos">
            <a href="#" @click.prevent="filter = 'all'" :class="{selected: filter === 'all'}" class="btn btn-sm my-2 mr-1">Toutes les tâches</a>
            <a href="#" @click.prevent="filter = 'done'" :class="{selected: filter === 'done'}" class="btn btn-sm my-2 mr-1">Tâches fini</a>
            <a href="#" @click.prevent="filter = 'todo'" :class="{selected: filter === 'todo'}" class="btn btn-sm my-2 mr-1">Tâches à faire</a>
        </div>

        <a href="#" @click.prevent="deleteCompleted" v-show="done" class="btn btn-danger">Supprimer les tâches terminées</a>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'Todo',
    data() {
        return {
            todos: [
                // {completed: false ,text: 'item 1'},
                // {completed: false ,text: 'item 2'},
                // {completed: false ,text: 'item 3'},
            ],
            newTodo: '',
            filter: 'all',
            editing: null,
            oldTodo: '',
        }
    },
    props: {
        listTitle: String
    },

    computed: {
        remaining(){ return this.todos.filter(todo => !todo.completed).length},
        
        done(){ return this.todos.filter(todo => todo.completed).length},

        filteredTodos(){
            if(this.filter === 'todo'){
                return this.todos.filter(todo => !todo.completed);
            }else if (this.filter === 'done'){
                return this.todos.filter(todo => todo.completed);
            }
            return this.todos;
        },
        allDone: {
            get(){
                return this.remaining === 0;
            },
            set(value){
                return this.todos.forEach((e) => e.completed = value);
            }
        },
        hasTodos(){
            return this.todos.length > 0
        }
    },
    methods: {
        addToList(){
            this.todos.push();
        },
        addTodo(){
            this.todos.push({completed: false ,text: this.newTodo});
            return this.newTodo = "";
        },
        deleteTodo(todo){
            return this.todos = this.todos.filter(i => i !== todo)
        },
        deleteCompleted(){
            return this.todos = this.todos.filter(todo => !todo.completed)
        },
        editTodo(todo){
            this.oldTodo = todo.text
            return this.editing = todo
        },
        doneEdit(todo){
            return this.editing = null
        },
        cancelEdit(){
            this.editing.text = this.oldTodo
            this.doneEdit()
        }
    },
    directives: {
        focus: (el, value) =>  {
            if(value){
                Vue.nextTick(()=> {  // permet de faire une action à la prochaine update du DOM
                    el.focus()
                })
            }
        }
    },
}
</script>

<style scoped>
.completed{
    text-decoration: line-through;
    color: lightgray;
}
.selected{
    background: rgb(219, 219, 219);
}
</style>