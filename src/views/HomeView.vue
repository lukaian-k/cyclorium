<script setup>
import ControllerLayouts from '@/components/ControllerLayouts.vue'

import DesktopHeader from '@/components/Header/DesktopHeader.vue'
import MobileHeader from '@/components/Header/MobileHeader.vue'

import CarouselHighlights from '@/components/Carousel/CarouselHighlights.vue'
</script>

<template>
  <header>
    <ControllerLayouts :desktopComponent="DesktopHeader" :mobileComponent="MobileHeader" />
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
