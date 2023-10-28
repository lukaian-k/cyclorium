<script setup>
import ControllerLayouts from '@/components/ControllerLayouts.vue'

import DesktopCarouselHighlights from '@/components/Carousel/CarouselHighlightsDesktop.vue'
import MobileCarouselHighlights from '@/components/Carousel/CarouselHighlightsMobile.vue'

import OurServices from '@/components/OurServices/OurServicesView.vue'
import AboutUs from '@/components/AboutUs.vue'
import ContactUs from '@/components/ContactUs.vue'
</script>

<template>
  <ControllerLayouts
    class="bg-secondary"
    :desktopComponent="DesktopCarouselHighlights"
    :mobileComponent="MobileCarouselHighlights"
  />

  <OurServices id="services" />
  <AboutUs id="about-us" />
  <ContactUs id="contact" />
</template>

<style scoped>
.bg-secondary {
  background-color: var(--color-background-secondary);
  padding: 0 var(--section-gap);
}
</style>
