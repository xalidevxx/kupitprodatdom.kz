<template>
	<v-app>
		<Header />
		<div class="container">
			<main>
				<Banner />
				<WhyWe />
				<Condition />
				<Catalog />
			</main>
		</div>
		<Footer />
	</v-app>
</template>

<script setup lang="ts">
useHead({
	title:
		'Агентство недвижимости в Алматы – Продажа и покупка квартир и домов по лучшим условиям | kupitprodatdom.kz',
	meta: [
		{
			name: 'description',
			content:
				'Продажа и покупка недвижимости в Алматы и других городах Казахстана. Квартиры, дома и коммерческая недвижимость. Эффективное продвижение и помощь с оформлением сделок.',
		},
		{
			name: 'keywords',
			content:
				'недвижимость Алматы, продажа квартир Алматы, агентство недвижимости Алматы, купить дом Алматы, риэлтор Алматы, продажа недвижимости Казахстан, Takta.kz, квартиры в Алматы',
		},
		{
			name: 'author',
			content: 'Агентство недвижимости КупитПродатьДом',
		},
		{
			property: 'og:title',
			content:
				'Агентство недвижимости в Алматы – Продажа и покупка квартир и домов по лучшим условиям | kupitprodatdom.kz',
		},
		{
			property: 'og:description',
			content:
				'Купить или продать дом или квартиру быстро и выгодно. Мы предлагаем лучшие условия для продавцов и покупателей. С нами продажа недвижимости – это просто.',
		},
		{
			property: 'og:type',
			content: 'website',
		},
		{
			property: 'og:url',
			content: 'https://kupitprodatdom.kz/',
		},
		{
			property: 'og:image',
			content: 'https://kupitprodatdom.kz/icons/icon-512.png',
		},
		{
			name: 'twitter:card',
			content: 'https://kupitprodatdom.kz/icons/icon-512.png',
		},
		{
			name: 'twitter:title',
			content:
				'Агентство недвижимости в Алматы – Продажа и покупка квартир и домов по лучшим условиям | kupitprodatdom.kz',
		},
		{
			name: 'twitter:description',
			content:
				'Продажа и покупка недвижимости в Алматы. Мы помогаем с продвижением, рекламой и оформлением сделок. С нами легко найти свой дом.',
		},
		{
			name: 'twitter:image',
			content: 'https://kupitprodatdom.kz/icons/icon-512.png',
		},
	],
});
</script>

<style lang="scss" scoped>
main {
	margin: 64px 0;
	display: flex;
	flex-direction: column;
	gap: 64px;

	@media (max-width: 768px) {
		margin: 32px 0;
		gap: 32px;
	}
}
</style>
