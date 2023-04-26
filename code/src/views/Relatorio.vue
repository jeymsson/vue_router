<template>
	<h1>Subitem</h1>

	<div for="nome">
		Nome: {{ nome }}
	</div>
	<div for="item">
		Item: {{ item }}
	</div>
	<div for="fornec">
		Fornecedor: {{ fornec }}
	</div>
	<button @click="$router.push('/crud')">Voltar</button>

</template>

<script>
</script>