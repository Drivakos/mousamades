<template>
  <carousel :items-to-show="1" :autoplay="4000" :wrap-around="true" :transition="1500" class="main-slider-wrapper">
    <slide v-for="slide in 4" :key="slide" :autoplay="true">
      <img :src="`https://picsum.photos/seed/${slide}/800/300`" alt="main slider image" />
    </slide>
  </carousel>
  <div class="main-slider-text">
    ΜΟΥΣΑΜΑΔΕΣ <br>
    ΕΠΙΓΡΑΦΕΣ <br>
    ΠΕΤΡΟΣ ΔΡΙΒΑΚΟΣ
  </div>
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
}
</script>
