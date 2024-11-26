<template>
	<footer class="bg-black">
		<div class="container">
			<div class="row">
				<v-icon icon="mdi-phone-outline" />
				<a href="tel:+77479979645">
					<h5>+7 777 777-77-77</h5>
				</a>
			</div>
			<div class="row">
				<v-icon icon="mdi-map-marker-outline" />
				<a href="https://yandex.kz/maps/ru/-/CDxDzOmc" target="_blank">
					<h5>Алматы, Abylai Khan Plaza (заранее договорится о встрече)</h5>
				</a>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	height: 250px;
}

.container {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 24px;
}

.row {
	display: flex;
	align-items: center;
	gap: 16px;
}

a {
	color: white;
}
</style>
