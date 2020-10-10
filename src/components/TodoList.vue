<template>
  <ul class="list">
    <TodoListItem
      class="item"
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
  </ul>
</template>

<script>
import TodoListItem from "./TodoListItem";

export default {
  name: "TodoList",
  props: {
    todos: Array
  },
  components: {
    TodoListItem
  }
};
</script>

<style scoped>
.list {
  list-style: none;
}
</style>