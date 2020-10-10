<template>
  <button type="button" class="btn btn-warn" @click="deleteTodo">
		&times;
	</button>
</template>

<script>
import {mapActions} from 'vuex'

export default {
	props: {
		id: {
			type: Number,
			required: true
		}
	},
	methods: {
		...mapActions(['removeTodo']),
		deleteTodo() {
			if (confirm()) {
				this.removeTodo(this.id)
				if (this.$router.history.current.name != 'Home') {
					this.$router.push({name: 'Home'})
				}
			}
		}
	}
}
</script>

<style scoped>
.btn-warn {
  background-color: red;
}
</style>