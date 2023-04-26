<template>
	<h1>Hello world</h1>
	<ClickCounter />
	<div>
		<ul>
			<li>
				<router-link :to="{name:'home'}">Casa</router-link>
			</li>
			<li>
				<router-link :to="{name:'about'}">About</router-link>
			</li>
		</ul>
	</div>
	<router-view />
</template>

<script setup>
	import ClickCounter from '@/components/ClickCounter.vue'
	import { RouterView, RouterLink } from 'vue-router';
</script>
