<template>
	<div class="banner">
		<img src="/bg.jpg" alt="КупитьПродатьДом" loading="lazy" />
		<h1>
			Поможем
			<span style="color: #34c759"> купить</span>/<span style="color: #ff3b30"
				>продать
			</span>
			<br />
			недвижимость в Казахстане
		</h1>
		<v-btn
			rounded="xl"
			size="x-large"
			prepend-icon="mdi-whatsapp"
			color="success"
			class="button"
			href="https://wa.me/77073541561"
			target="_blank"
		>
			Написать
		</v-btn>
	</div>
</template>

<style scoped lang="scss">
.banner {
	position: relative;
	height: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 64px;
	border-radius: 40px;
	overflow: hidden;

	@media (max-width: 575px) {
		height: 450px;
		margin: 0 -16px;
		border-radius: 0;
	}
}

img {
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 0;
	filter: brightness(80%);
}

h1 {
	padding: 16px;
	background: white;
	border-radius: 16px;
	text-align: center;
	z-index: 2;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	border: 1px solid #f5f5f5;

	@media (max-width: 768px) {
		font-size: 22px;
	}

	@media (max-width: 475px) {
		font-size: 18px;
	}
}

.button {
	position: absolute;
	bottom: 90px;
	z-index: 1;
}
</style>
