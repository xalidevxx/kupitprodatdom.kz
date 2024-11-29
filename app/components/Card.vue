<template>
	<v-card width="100%" href="https://m.takta.kz" target="_blank">
		<v-img height="240px" :src="card.img" cover />
		<v-card-title style="font-size: 16px">
			<div class="cardTop">
				<span class="price">{{ card.price }}</span>
				<span class="city">{{ card.city }}</span>
			</div>
			<span class="description">{{ card.title }}</span>
		</v-card-title>
	</v-card>
</template>

<script setup lang="ts">
defineProps<{
	card: {
		title: string;
		img: string;
		price: string;
		city: string;
	};
}>();
</script>

<style lang="scss">
.price {
	font-weight: bold;
}

.cardTop {
	display: flex;
	justify-content: space-between;
}

.city {
	font-size: 14px;
}

.description {
	font-size: 14px;
	color: #2196f3;
	font-weight: 500;
}
</style>
