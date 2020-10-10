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
      <li class="item" :class="{complete: todo.completed}">
        <span class="title">
          {{ todo.title }}
        </span>
        <div class="btn-group">
          <ButtonComplete :id="todo.id" />
          <ButtonDelete :id="todo.id" />
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import ButtonComplete from '@/components/ButtonComplete';
import ButtonDelete from '@/components/ButtonDelete';
import {mapGetters} from 'vuex';

export default {
  components: {
    ButtonComplete,
    ButtonDelete
  },
  name: 'Todo',
  computed: {
    ...mapGetters(['getCurrentTodo']),
    todo() {
      return this.getCurrentTodo(this.$route.params.id)
    }
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
