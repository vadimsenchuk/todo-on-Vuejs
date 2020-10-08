<template>
  <div class="about">
    <div class="container">
      <button
        type="button"
        class="btn btn-primary"
        @click="$router.push({ name: 'Home' })"
      >
        К списку дел
      </button>
      <li class="item" :class="{ complete: targetTodo.completed }">
        <span class="title">
          {{ todo.title }}
        </span>
        <div class="btn-group">
          <button type="button" class="btn btn-success" @click="toggleClass">
            &#10004;
          </button>
          <button type="button" class="btn btn-warn" @click="removeTodo">
            &times;
          </button>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data() {
    return {
      todo: {}
    };
  },
  computed: {
    targetTodo() {
      return this.todo;
    }
  },
  methods: {
    toggleClass() {
      this.todo.completed = !this.todo.completed;
    },
    removeTodo() {
      if (confirm()) {
        this.$router.push({ name: 'Home' });
        let todos = JSON.parse(localStorage.getItem('todos'));
        const todoIndex = todos.findIndex(item => item.id === this.todo.id);
        todos = [...todos.slice(0, todoIndex), ...todos.slice(todoIndex + 1)];
        localStorage.setItem('todos', JSON.stringify(todos));
      }
    }
  },
  mounted() {
    this.todo = JSON.parse(localStorage.getItem('todos')).find(
      todo => todo.id === this.$route.params.id
    );
  },
  updated: function() {
    let todos = JSON.parse(localStorage.getItem('todos'));
    const todoIndex = todos.findIndex(item => item.id === this.todo.id);

    todos = [
      ...todos.slice(0, todoIndex),
      this.todo,
      ...todos.slice(todoIndex + 1)
    ];
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};
</script>

<style scoped>
.item {
  display: flex;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #ccc;
  margin: 10px 0;
  justify-content: space-between;
  align-items: center;
}
.complete span {
  text-decoration: line-through;
}
</style>
