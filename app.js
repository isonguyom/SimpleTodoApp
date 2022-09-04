const { createApp } = Vue
let id = 1

createApp({
  data() {
    return {
      pageTitle: 'Simple Todo App',
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

  methods: {
    createTodo() {
        if (newTodo != "") {
            this.todos.push({
              id: id++,
              text: this.newTodo,
              completed: false
            })          
        } else {
            
        }
        this.newTodo = ""
      },
      deleteTodo(todo) {
        this.todos = this.todos.filter((i) => i !== todo)
      },
  }
}).mount('#app')