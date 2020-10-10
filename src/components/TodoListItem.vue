<template>
  <li class="item" :class="{ complete: todo.completed }">
    <span class="title">
      <router-link :to="{ name: 'Todo', params: { id: todo.id } }">{{
        todo.title
      }}</router-link>
    </span>
    <div class="btn-group">
      <ButtonComplete :id="todo.id" />
      <ButtonDelete :id="todo.id" />
    </div>
  </li>
</template>

<script>
import ButtonComplete from '@/components/ButtonComplete'
import ButtonDelete from '@/components/ButtonDelete'

export default {
  components: {
    ButtonComplete,
    ButtonDelete
  },
  name: 'TodoListItem',
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
span a {
  color: inherit;
  text-decoration: none;
}
.complete span {
  text-decoration: line-through;
}
</style>
