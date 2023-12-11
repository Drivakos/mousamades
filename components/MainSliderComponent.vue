<template>
  <div class="pos-rel">
    <carousel :items-to-show="1" :autoplay="4000" :wrap-around="true" :transition="1500" class="main-slider-wrapper">
      <slide v-for="slide in 7" :key="slide" :autoplay="true">
        <NuxtImg
            :src="`/mainSlider/${slide}.jpg`"
            :alt="`main ${slide} image`"
            class="main-slider-img"
        />
      </slide>
    </carousel>
    <div class="main-slider-text">
      ΜΟΥΣΑΜΑΔΕΣ <br>
      ΕΠΙΓΡΑΦΕΣ <br>
      <span>ΠΕΤΡΟΣ ΔΡΙΒΑΚΟΣ</span>
    </div>

  </div>
  <div class="main-slider-description">
    Η εταιρεία μας ιδρύθηκε το 1969, από τον Δημ. Δριβάκο. Δραστηριοποιείται στον χώρο κατασκευής Μουσαμάδων, Φορτηγών
    Αυτοκινήτων, Υπόστεγων Κάλυψης Χώρων, Επιγραφών και Αυτοκόλλητων.
    <br>Το 2014 αναλαμβάνει ο υιός Πέτρος Δριβάκος. Ο συνδυασμός του πιο σύγχρονου μηχανολογικού εξοπλισμού και της
    πολυετής πείρας, παράλληλα με τις λογικές τιμές, αποτελούν εγγύηση για κάθε εργασία που αναλαμβάνουμε.
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  }
}
</script>
