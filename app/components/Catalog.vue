<template>
	<div>
		<div class="row">
			<h1 class="my-title">Каталог</h1>
			<v-btn
				rounded
				append-icon="mdi-chevron-right"
				color="black"
				href="https://takta.kz/"
				target="_blank"
			>
				Смотреть все
			</v-btn>
		</div>
		<div class="cards">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.row {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.cards {
	margin-top: 32px;
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	justify-content: space-between;
}
</style>
