<script setup lang="ts">

</script>

<template>
	<main class="main">
		<button class="main__settings">Settings</button>
	</main>
</template>

<style lang="scss" scoped>
.main {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	position: relative;

	&__settings {
		color: black;
		//background-color: unset;
		border: none;
		outline: none;
		width: max-content;
		background-color: lightblue;
		position: absolute;
		top: 12px;
		right: 12px;

		&:hover {
			background-color: skyblue;
		}
	}
}
</style>