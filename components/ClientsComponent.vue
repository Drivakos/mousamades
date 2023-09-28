<template>
  <div class="parallax-clients">
    <div class="clients-title">ΜΑΣ ΕΜΠΙΣΤΕΥΟΝΤΑΙ</div>
    <carousel :transition="1500" class="clients-slider " v-bind="settings" :breakpoints="breakpoints">
      <slide v-for="slide in 4" :key="slide" >
        <img :src="`https://picsum.photos/seed/${slide}/800/300`" alt="clients slider image" class="clients-slider-img" />
        <div class="clients-slider-text">
          {{ slideTitlesArray[slide] }}
        </div>
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
    slideTitlesArray : {
      '1' : 'GEORGANTAS',
      '2' : 'XXXXXXXXXXXX',
      '3' : 'XXXXXXXXXXX',
      '4' : 'XXXXXXXXXXX'
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
