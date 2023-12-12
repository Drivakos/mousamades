<template>
  <div lang="el">
    <HeaderComponent></HeaderComponent>
    <MainSliderComponent></MainSliderComponent>
    <BuiltWithComponent></BuiltWithComponent>
    <ServicesComponent></ServicesComponent>
    <SamplesComponent></SamplesComponent>
    <ClientsComponent></ClientsComponent>
    <ContactComponent></ContactComponent>
    <speed-insights></speed-insights>
    <analytics></analytics>
  </div>
</template>

<script setup lang="ts">
import analytics from '@vercel/analytics';
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

useHead({
  title: 'ΜΟΥΣΑΜΑΔΕΣ ΠΕΤΡΟΣ ΔΡΙΒΑΚΟΣ',
  meta: [
    { name: 'description', content: 'Η εταιρεία μας ιδρύθηκε το 1969, από τον Δημ. Δριβάκο. Δραστηριοποιείται στον χώρο κατασκευής Μουσαμάδων, Φορτηγών Αυτοκινήτων, Υπόστεγων Κάλυψης Χώρων, Επιγραφών και Αυτοκόλλητων.' }
  ],
  htmlAttrs: {
    lang: 'el'
  }
})
useSeoMeta({
  title: 'ΜΟΥΣΑΜΑΔΕΣ ΠΕΤΡΟΣ ΔΡΙΒΑΚΟΣ',
  ogTitle: 'ΜΟΥΣΑΜΑΔΕΣ ΠΕΤΡΟΣ ΔΡΙΒΑΚΟΣ',
  description: 'Η εταιρεία μας ιδρύθηκε το 1969, από τον Δημ. Δριβάκο. Δραστηριοποιείται στον χώρο κατασκευής Μουσαμάδων, Φορτηγών Αυτοκινήτων, Υπόστεγων Κάλυψης Χώρων, Επιγραφών και Αυτοκόλλητων.',
  ogDescription: 'Η εταιρεία μας ιδρύθηκε το 1969, από τον Δημ. Δριβάκο. Δραστηριοποιείται στον χώρο κατασκευής Μουσαμάδων, Φορτηγών Αυτοκινήτων, Υπόστεγων Κάλυψης Χώρων, Επιγραφών και Αυτοκόλλητων.',
  ogImage: '/ogphoto.jpg',
})
</script>