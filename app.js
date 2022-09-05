const { createApp } = Vue
let id = 1

createApp({
  data() {
    return {
      pageTitle: 'Simple Todo App',
      searchInput: "",
      hideCompleted: false,
      toggleCompletedText: "Hide completed",
      toggleCompletedTitle: "Hide completed task",
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
    searchTodo() {
        return this.todos.filter(todo => {
            return todo.text.toLowerCase().includes(this.searchInput.toLowerCase())
          })
      },

      filteredTodo() {
        return this.hideCompleted ?
          this.searchTodo.filter((i) => !i.completed) :
          this.searchTodo
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
      toggleCompleted() {
        this.hideCompleted = !this.hideCompleted;
        this.toggleCompletedText = this.hideCompleted ? 'Show completed' : 'Hide completed';
        this.toggleCompletedTitle = this.hideCompleted ? 'Show completed task' : 'Hide completed task';
      }
  }
}).mount('#app')