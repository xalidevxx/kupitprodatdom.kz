<template>
	<div class="banner">
    <img class="desktop" src="/bg.png" alt="КупитьПродатьДом" loading="lazy"/>
    <img class="mobile" src="https://i.pinimg.com/550x/6c/46/28/6c462850f81f08e80d1c38fd868f7e58.jpg"
         alt="КупитьПродатьДом" loading="lazy"/>
    <h1>
      Поможем
      <span style="color: #34c759"> купить</span>/<span style="color: #ff3b30"
    >продать
			</span>
      <br/>
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
  @media (max-width: 768px) {
    left: 0;
    right: 0;
    filter: brightness(80%);
  }

  &.desktop {
    display: block;
    @media (max-width: 575px) {
      display: none;
    }
  }

  &.mobile {
    display: none;
    @media (max-width: 575px) {
      display: block;
    }
  }
}

h1 {
  padding: 16px;
  background: white;
  border-radius: 16px;
  text-align: center;
  z-index: 2;

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
