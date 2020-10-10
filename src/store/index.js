import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function saveData(data) {
  localStorage.setItem('todos', JSON.stringify(data));
}

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    SET_TODOS(state, payload) {
      state.todos = [...payload]
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo)
    },
    TOGGLE_COMPLETED({todos}, id) {
      const currentTodoIndex = todos.findIndex(t => t.id === id)
      todos[currentTodoIndex].completed = !todos[currentTodoIndex].completed
    },
    REMOVE_TODO({ todos }, id) {
      const idx = todos.findIndex(t => t.id === id);
      todos = todos.splice(idx, 1)
    }
  },
  actions: {
    setTodos({commit}) {
      let data = [{
        id: 1, title: 'Сделать Todo на Vue.js', completed: true
      }]
      if (localStorage.getItem('todos') !== null ) {
        data = JSON.parse(localStorage.getItem('todos'))
      }

      commit("SET_TODOS", data)
    },
    addTodo({commit, getters}, todo) {
      commit("ADD_TODO", todo)
      saveData(getters.getAllTodos)
    },
    toggleCompleted({commit, getters}, payload) {
      commit("TOGGLE_COMPLETED", payload)
      saveData(getters.getAllTodos)
    },
    removeTodo({ commit, getters }, payload) {
      commit('REMOVE_TODO', payload)
      saveData(getters.getAllTodos)
    }
  },
  modules: {
  },
  getters: {
    getAllTodos: state => state.todos,
    getCurrentTodo: state => id => { 
      return state.todos.find(t => t.id === id)
    }
  }
})
