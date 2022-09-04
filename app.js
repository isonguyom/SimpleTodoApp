const {
    createApp
} = Vue
let id = 1

createApp({
    data() {
        return {
            pageTitle: 'Simple Todo App',
            createTip: "Input a task to create a todo",
            searchInput: "",
            hideCompleted: false,
            newTodo: "",
            todos: [{
                    id: id++,
                    text: "Create a landing page",
                    completed: false
                },
                {
                    id: id++,
                    text: "Learn web 3",
                    completed: true
                },
                {
                    id: id++,
                    text: "Build web 3 project",
                    completed: false
                }
            ]
        }
    },

    computed: {
        filteredTodo() {
            return this.hideCompleted ?
                this.todos
                .filter((i) => !i.completed) :
                this.todos
                .filter(todo => {
                    return todo.text.toLowerCase().includes(this.searchInput.toLowerCase())
                })
        }
    },

    methods: {
        createTodo() {
            if (newTodo != "") {
                this.todos.push({
                    id: id++,
                    text: this.newTodo,
                    completed: false
                })
            }
            this.newTodo = ""
        },
        deleteTodo(todo) {
            if (confirm("Are you sure you want to delete this todo")) {
                this.todos = this.todos.filter((i) => i !== todo)
            }
        },
    }
}).mount('#app')