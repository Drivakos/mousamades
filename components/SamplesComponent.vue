<template>
  <div class="samples-title">ΔΕΙΓΜΑΤΑ</div>
  <carousel :autoplay="4000" :transition="1500" class="samples-slider" v-bind="settings" :breakpoints="breakpoints">
    <slide v-for="slide in 4" :key="slide" >
      <img :src="`https://picsum.photos/seed/${slide}/800/300`" alt="main slider image" class="samples-slider-img" />
    </slide>
  </carousel>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 3,
      snapAlign: 'start',
    },
    breakpoints: {
      0: {
        itemsToShow: 1.5,
        snapAlign: 'start',
      },
      480: {
        itemsToShow: 2.5,
        snapAlign: 'start',
      },
      1024: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
    },
  }),
}
</script>
