<template>
  <li class="item" :class="{complete: todo.completed}">
    <span class="title">{{ todo.title }}</span>
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-success"
        @click="$emit('toggle-complete', todo.id)"
      >&#10004;</button>
      <button type="button" class="btn btn-warn" @click="$emit('remove-todo', todo.id)">&times;</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    todo: Object
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
.btn-success {
  background-color: green;
  margin-right: 10px;
}
.btn-warn {
  background-color: red;
}
</style>