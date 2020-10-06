<template>
  <div id="app">
    <Header />
    <div class="container">
      <AddListItem @add-item="addItem" />
      <p v-if="todos.length == 0">Нет списка дел</p>
      <div class="content" v-else>
        <button
          type="button"
          class="btn"
          @click="toggleCompleted"
        >{{ filter ? 'Показать' : 'Скрыть'}} выполненное</button>
        <TodoList
          :todos="this.filteredTodos"
          @remove-todo="removeTodo"
          @toggle-complete="toggleItemComleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import TodoList from "@/components/TodoList";
import AddListItem from "@/components/AddListItem";

export default {
  name: "App",
  components: {
    Header,
    AddListItem,
    TodoList
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Сделать Todo на Vue.js!",
          completed: true
        }
      ],
      filter: false
    };
  },
  computed: {
    filteredTodos() {
      if (!this.filter) {
        return this.todos;
      } else {
        return this.todos.filter(todo => !todo.completed);
      }
    }
  },
  methods: {
    toggleCompleted() {
      this.filter = !this.filter;
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addItem(newItem) {
      this.todos = [...this.todos, newItem];
    },
    toggleItemComleted(id) {
      const itemIndex = this.todos.findIndex(todo => todo.id == id);
      const modifiedTodo = this.todos[itemIndex];
      modifiedTodo.completed = !modifiedTodo.completed;
      this.todos = [
        ...this.todos.slice(0, itemIndex),
        modifiedTodo,
        ...this.todos.slice(itemIndex + 1)
      ];
    }
  },
  mounted: function() {
    if (localStorage.getItem("todos")) {
      this.todos = JSON.parse(localStorage.getItem("todos"));
    }
  },
  updated: function() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 18px;
  line-height: 1.4;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
}

.btn {
  border: none;
  padding: 5px;
  border-radius: 5px;
  outline: none;
}
.btn:hover {
  opacity: 0.8;
}
</style>
