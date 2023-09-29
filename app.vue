<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <MainSliderComponent></MainSliderComponent>
    <BuiltWithComponent></BuiltWithComponent>
    <ServicesComponent></ServicesComponent>
    <SamplesComponent></SamplesComponent>
    <ClientsComponent></ClientsComponent>
    <ContactComponent></ContactComponent>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'ΜΟΥΣΑΜΑΔΕΣ ΠΕΤΡΟΣ ΔΡΙΒΑΚΟΣ',
  meta: [
    { name: 'description', content: 'Η εταιρεία μας ιδρύθηκε το 1969, από τον Δημ. Δριβάκο. Δραστηριοποιείται στον χώρο κατασκευής Μουσαμάδων, Φορτηγών Αυτοκινήτων, Υπόστεγων Κάλυψης Χώρων, Επιγραφών και Αυτοκόλλητων.' }
  ]
})
useSeoMeta({
  title: 'ΜΟΥΣΑΜΑΔΕΣ ΠΕΤΡΟΣ ΔΡΙΒΑΚΟΣ',
  ogTitle: 'ΜΟΥΣΑΜΑΔΕΣ ΠΕΤΡΟΣ ΔΡΙΒΑΚΟΣ',
  description: 'Η εταιρεία μας ιδρύθηκε το 1969, από τον Δημ. Δριβάκο. Δραστηριοποιείται στον χώρο κατασκευής Μουσαμάδων, Φορτηγών Αυτοκινήτων, Υπόστεγων Κάλυψης Χώρων, Επιγραφών και Αυτοκόλλητων.',
  ogDescription: 'Η εταιρεία μας ιδρύθηκε το 1969, από τον Δημ. Δριβάκο. Δραστηριοποιείται στον χώρο κατασκευής Μουσαμάδων, Φορτηγών Αυτοκινήτων, Υπόστεγων Κάλυψης Χώρων, Επιγραφών και Αυτοκόλλητων.'
})
</script>