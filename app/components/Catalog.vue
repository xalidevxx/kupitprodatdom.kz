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
      <Card v-for="card in catalog" :card="card"/>
    </div>
    <div class="swiper">
      <v-carousel :show-arrows="false" cycle hide-delimiter-background height="370">
        <v-carousel-item
            v-for="card in catalog"
            cover
            height="400px"
        >
          <Card :card="card"/>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>
<script setup>
const catalog = [
  {
    title: '3 комнатная квартира кв, 103.0 м²',
    img: '/images/flat_1.png',
    price: '82 000 000 тг',
    city: 'Алматы'
  },
  {
    title: '4 комнатная квартира кв, 96,5 м²',
    img: '/images/flat_2.png',
    price: '66 000 000 тг',
    city: 'Алматы'
  },
  {
    title: '2 комнатная квартира кв, 71.0 м²',
    img: '/images/flat_3.png',
    price: '65 000 000 тг',
    city: 'Алматы'
  },
  {
    title: '2 комнатная квартира кв, 62.0 м²',
    img: '/images/flat_4.png',
    price: '29 500 000 тг',
    city: 'Алматы'
  },
  {
    title: '1 комнатная квартира кв, 34.0 м²',
    img: '/images/flat_5.png',
    price: '33 000 000 тг',
    city: 'Алматы'
  },
  {
    title: '4 комнатная квартира кв, 148.0м',
    img: '/images/flat_6.png',
    price: '53 000 000 тг',
    city: 'Алматы'
  }
]
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
  @media (max-width: 635px) {
    display: none;
  }
}

.swiper {
  display: none;
  @media (max-width: 635px) {
    display: block;
  }

  &::v-deep {
    .v-btn--active {
      .mdi-circle {
        color: #a5a5a5;
      }
    }
  }

  &::v-deep {
    .mdi-circle {
      color: #ddd;
    }
  }
}
</style>
