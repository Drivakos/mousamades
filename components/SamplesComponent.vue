<template>
  <div class="samples-title">ΔΕΙΓΜΑΤΑ</div>
  <carousel :transition="1500" class="samples-slider" v-bind="settings" :breakpoints="breakpoints" :mouseDrag="true" :touchDrag="true" :wrap-around="true">
    <slide v-for="slide in 4" :key="slide" >
      <img :src="`/samples-assets/${slide}.jpg`" alt="samples slider image" class="samples-slider-img" />
      <div class="samples-slider-text">
        {{ slideTitlesArray[slide] }}
      </div>
    </slide>
  </carousel>
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
    slideTitlesArray : {
      '1' : 'Αυτοκόλλητες επιγραφες',
      '2' : 'Καλύψεις Βιομηχανικών Χώρων',
      '3' : 'Μουσαμάδες',
      '4' : 'Ταμπέλες Εταιρειών και Καταστημάτων'
    },
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
