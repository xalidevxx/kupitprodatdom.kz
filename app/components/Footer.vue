<template>
	<footer>
		<div class="container">
			<div class="column">
				<div class="specs">
					<div class="row">
						<v-icon icon="mdi-phone-outline" />
						<a href="tel:+77073541561" target="_blank">
							<h5>+7 (707) 354-15-61</h5>
						</a>
					</div>
					<div class="row">
						<v-icon icon="mdi-map-marker-outline" />
						<a href="https://yandex.kz/maps/ru/-/CDxDzOmc" target="_blank">
							<h5>Алматы, Abylai Khan Plaza</h5>
							<small class="text-grey">Заранее договорится о встрече</small>
						</a>
					</div>
				</div>
				<div class="contacts">
					<Socials />
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	height: 250px;
	color: #ffffff !important;
	background-color: #1a1f36;
}

.column {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	@media (max-width: 575px) {
		flex-direction: column;
		gap: 48px;
	}
}

.contacts {
	@media (max-width: 575px) {
		margin: 0 auto;
	}
}

.specs {
	display: flex;
	flex-direction: column;
	gap: 16px;
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
	&:last-child {
		align-items: flex-start;
	}
}

a {
	color: white;
}
</style>
