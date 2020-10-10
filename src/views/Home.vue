<template>
  <div class="home">
    <div class="container">
      <AddListItem />
      <p v-if="todos.length == 0">Нет списка дел</p>
      <div class="content" v-else>
        <button type="button" class="btn" @click="filter = !filter">
          {{ filter ? 'Показать' : 'Скрыть' }} выполненное
        </button>
        <TodoList
          :todos="this.filteredTodos"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddListItem from '@/components/AddListItem';

export default {
  name: 'Home',
  components: {
    AddListItem,
    TodoList
  },
  data() {
    return {
      todos: [],
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
    }
  },
  mounted() {
    this.todos = this.$store.getters.getAllTodos
  }
};
</script>
