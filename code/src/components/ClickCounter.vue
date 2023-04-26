<template>
	<button @click="soma">Click {{ count }}</button>
</template>
<script>
	import { ref } from 'vue'
	export default {
		setup() {
			const count = ref(0);
			const soma = () => { count.value++; };
			return {
				count,
				soma,
			};
		}
	}
</script>