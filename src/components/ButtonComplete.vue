<template>
  <button type="button" class="btn btn-success" @click="toggleClass">
        &#10004;
    </button>
</template>

<script>
import {mapActions} from 'vuex';

export default {
	props: {
		id: {
				type: Number
		}
	},
	methods: {
		...mapActions(['toggleCompleted']),
		toggleClass() {
				this.toggleCompleted(this.id)
		}
	}
}
</script>

<style scoped>
.btn-success {
  background-color: green;
  margin-right: 10px;
}
</style>