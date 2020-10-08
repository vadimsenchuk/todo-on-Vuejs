<template>
  <form @submit.prevent="addItem">
    <input type="text" placeholder="Введите задачу" v-model="title" />
    <input
      type="submit"
      value="Создать"
      class="btn btn-primary"
      :disabled="!validate"
    />
  </form>
</template>

<script>
export default {
  name: 'AddListItem',
  data() {
    return {
      title: ''
    };
  },
  computed: {
    validate() {
      return !!this.title.trim();
    }
  },
  methods: {
    addItem() {
      const newItem = {
        title: this.title,
        completed: false,
        id: Date.now()
      };

      this.$emit('add-item', newItem);
      this.title = '';
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
}
input[type='text'] {
  padding: 10px;
}
</style>
