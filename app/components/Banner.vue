<template>
	<div class="banner">
		<img src="/bg.png" alt="КупитьПродатьДом" loading="lazy" />
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
}

img {
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 0;
}

h1 {
	padding: 16px;
	background: white;
	border-radius: 16px;
	text-align: center;
	z-index: 2;
}

.button {
	position: absolute;
	bottom: 90px;
	z-index: 1;
}
</style>
