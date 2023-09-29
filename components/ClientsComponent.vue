<template>
  <div class="parallax-clients">
    <div class="clients-title"></div>
    <carousel :transition="1500" class="clients-slider " v-bind="settings" :breakpoints="breakpoints" :autoplay="4000" :mouseDrag="true" :touchDrag="true" :wrap-around="true">
      <slide v-for="slide in 6" :key="slide" >
        <img :src="`/clients-assets/${slide}.jpg`" alt="clients slider image" class="clients-slider-img" />
      </slide>
    </carousel>
  </div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide
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
