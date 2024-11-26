<template>
	<div>
		<h1 class="my-title">Почему мы?</h1>
		<div class="row">
			<section>
				<h4>Для продавцов:</h4>
				<h5>
					<ol>
						<li>Сфотографируем и снимем видеообзор объекта</li>
						<li>
							Смонтируем фото/видео и опубликуем в Instagram, TikTok, YouTube,
							Takta.kz и на наш сайт
						</li>
						<li>Подключим таргетную и контексную рекламу на всех платформах</li>
						<li>За 1 месяц найдем вам покупателей</li>
					</ol>
				</h5>
			</section>
			<section>
				<h4>Для покупателей:</h4>
				<h5>
					<a href="https://m.takta.kz/" target="_blank">Takta.kz</a>
					наш официальный партнер. В нашем каталоге более 1 млн + выбора. Мы
					найдем идеальную недвижимость для вас и поможем с оформлением.
				</h5>
			</section>
		</div>
	</div>
</template>

<style lang="scss" scoped>
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

li {
	font-size: 16px;
	font-weight: 400;
	line-height: 1.5;
}

li + li {
	margin-top: 16px;
}
</style>
