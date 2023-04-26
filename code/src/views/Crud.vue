<template>
	<form action="" method="post">
		<h1>Subitem</h1>
		<label for="nome">
			Nome:
			<input type="text" id="nome">
		</label>
		<label for="item">
			Item:
			<select id="item">
				<option value=""></option>
			</select>
		</label>
		<label for="fornec">
			Fornecedor:
			<select id="fornec">
				<option value=""></option>
			</select>
		</label>
		<button type="submit" @click="$router.push('/relatorio')">Enviar</button>

	</form>
</template>

<script>
</script>