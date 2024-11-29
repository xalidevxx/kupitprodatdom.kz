<template>
	<div>
		<div class="row">
			<h1 class="my-title">Каталог</h1>
			<v-btn
				rounded
				append-icon="mdi-chevron-right"
				color="black"
				href="https://m.takta.kz/"
				target="_blank"
			>
				Смотреть все
			</v-btn>
		</div>
		<div class="cards">
			<Card v-for="(c, i) in catalog" :key="i" :card="c" />
		</div>
		<div class="swiper">
			<v-carousel :show-arrows="false" hide-delimiter-background height="370">
				<v-carousel-item
					v-for="(c, i) in catalog"
					:key="i"
					cover
					height="400px"
				>
					<Card :card="c" />
				</v-carousel-item>
			</v-carousel>
		</div>
	</div>
</template>

<script setup lang="ts">
const catalog = [
	{
		title: '3 комнатная квартира кв, 103.0 м²',
		img: '/img/1.png',
		price: '82 000 000 тг',
		city: 'Алматы',
	},
	{
		title: '4 комнатная квартира кв, 96,5 м²',
		img: '/img/2.png',
		price: '66 000 000 тг',
		city: 'Алматы',
	},
	{
		title: '2 комнатная квартира кв, 71.0 м²',
		img: '/img/3.png',
		price: '65 000 000 тг',
		city: 'Алматы',
	},
	{
		title: '2 комнатная квартира кв, 62.0 м²',
		img: '/img/4.png',
		price: '29 500 000 тг',
		city: 'Алматы',
	},
	{
		title: '1 комнатная квартира кв, 34.0 м²',
		img: '/img/5.png',
		price: '33 000 000 тг',
		city: 'Алматы',
	},
	{
		title: '4 комнатная квартира кв, 148.0м',
		img: '/img/6.png',
		price: '53 000 000 тг',
		city: 'Алматы',
	},
];
</script>

<style lang="scss" scoped>
.row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
}

.cards {
	margin-top: 32px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 16px;
	box-sizing: border-box;
}

.swiper {
	display: none;
}

@media (max-width: 768px) {
	.cards {
		display: none;
	}

	.swiper {
		display: block;
	}
}
</style>
