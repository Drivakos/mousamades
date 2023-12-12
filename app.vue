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
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/next"

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