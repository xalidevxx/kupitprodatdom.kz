<template>
	<div class="condition">
		<h1 class="my-title">Наши условия</h1>
		<div class="row">
			<section>
				<h4>Для продавцов:</h4>
				<h5>
					Мы предлагаем самые выгодные условия -
					<span style="color: blue">Экслюзивный договор</span>
					<br />
					<br />
					Сравним наши условия с Крыша Агентом:
					<br />
					<br />
					Крыша Агент: договор -
					<b class="text-error">3 месяца</b>
					, комиссия
					<b class="text-error">440 000 тг</b>
					<br />
					<br />
					Наши условия: договор -
					<b class="text-success">1 месяц</b>
					, комиссия
					<b class="text-success">300 000 тг</b>
				</h5>
			</section>
			<section>
				<h4>Для покупателей:</h4>
				<h5>
					Мы бесплатно подберем и проконсультируем с офомлением недвижимости.
					Напишите в WhatsApp.
				</h5>
			</section>
		</div>
	</div>
</template>

<style scoped lang="scss">
.row {
	margin-top: 32px;
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	@media (max-width: 768px) {
		flex-direction: column;
		margin-top: 16px;
	}
}
</style>
