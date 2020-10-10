<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/layout/Header';

export default {
  name: 'App',
  components: {
    Header
  },
  created() {
    this.$store.dispatch("setTodos")
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
.btn-primary {
  background-color: dodgerblue;
  font-size: 1.2em;
  margin-left: 15px;
}
</style>
