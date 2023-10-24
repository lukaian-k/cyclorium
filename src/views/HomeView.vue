<script setup>
import ControllerLayouts from '@/components/ControllerLayouts.vue'

import DesktopHeader from '@/components/Header/DesktopHeader.vue'
import MobileHeader from '@/components/Header/MobileHeader.vue'

import DesktopCarouselHighlights from '../components/Carousel/CarouselHighlightsDesktop.vue'
import MobileCarouselHighlights from '../components/Carousel/CarouselHighlightsMobile.vue'
</script>

<template>
  <header>
    <ControllerLayouts :desktopComponent="DesktopHeader" :mobileComponent="MobileHeader" />
  </header>
  <main>
    <ControllerLayouts
      :desktopComponent="DesktopCarouselHighlights"
      :mobileComponent="MobileCarouselHighlights"
    />
  </main>
</template>

<style scoped>
header,
main {
  background-color: var(--color-background-secondary);
  padding: 0 var(--section-gap);
}
</style>
