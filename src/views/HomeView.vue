<script setup>
import HeaderController from '@/components/Header/ControllerHeader.vue'
import CarouselHighlights from '@/components/Carousel/CarouselHighlights.vue'
</script>

<template>
  <header>
    <HeaderController />
  </header>
  <main>
    <CarouselHighlights />
  </main>
</template>

<style scoped>
header,
main {
  background-color: var(--color-background-secondary);
  padding: 0 var(--section-gap);
}
</style>
