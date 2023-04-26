<template>
	<div>
		<ul>
			<li>
				<router-link :to="{name:'home'}">Casa</router-link>
			</li>
			<li>
				<router-link :to="{name:'about'}">About</router-link>
			</li>
			<li>
				<router-link :to="{name:'crud'}">Crud</router-link>
			</li>
			<li>
				<router-link :to="{name:'relatorio'}">Rel</router-link>
			</li>
		</ul>
	</div>
	<router-view />
</template>

<script setup>
	import { RouterView, RouterLink } from 'vue-router';
</script>
