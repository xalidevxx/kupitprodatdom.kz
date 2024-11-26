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
