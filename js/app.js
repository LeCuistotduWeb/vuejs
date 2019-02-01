var app = new Vue({
    el: '#app',
    data: {
        inputText: '',
        success: true,
        input: '',
        todos: ['Learn JavaScript', 'Learn Vue', 'Build something awesome']
    },
    methods: {
        reverseList(){
            return this.todos = this.todos.reverse()
        },
        onSubmit(){
            this.inputText != '' ? this.todos.push(this.inputText) : '';
            this.inputText = ''
        },
        deleteItem(item){
            this.todos.pop(item)
        },
        deleteAllItems(){
            for(todo of this.todos){
                this.todos.pop(todo)
            }
        }
    },
})