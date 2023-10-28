<script setup>
import ControllerLayouts from '@/components/ControllerLayouts.vue'

import DesktopHeader from '@/components/Header/DesktopHeader.vue'
import MobileHeader from '@/components/Header/MobileHeader.vue'

import DesktopCarouselHighlights from '@/components/Carousel/CarouselHighlightsDesktop.vue'
import MobileCarouselHighlights from '@/components/Carousel/CarouselHighlightsMobile.vue'

import OurServices from '@/components/OurServices/OurServicesView.vue'
import AboutUs from '@/components/AboutUs.vue'
import ContactUs from '@/components/ContactUs.vue'

import DesktopFooter from '@/components/Footer/DesktopFooter.vue'
import MobileFooter from '@/components/Footer/MobileFooter.vue'
</script>

<template>
  <header id="home">
    <ControllerLayouts
      class="bg-secondary"
      :desktopComponent="DesktopHeader"
      :mobileComponent="MobileHeader"
    />
  </header>
  <main>
    <ControllerLayouts
      class="bg-secondary"
      :desktopComponent="DesktopCarouselHighlights"
      :mobileComponent="MobileCarouselHighlights"
    />

    <OurServices id="services" />
    <AboutUs id="about-us" />
    <ContactUs id="contact" />
  </main>

  <footer>
    <ControllerLayouts :desktopComponent="DesktopFooter" :mobileComponent="MobileFooter" />
  </footer>
</template>

<style scoped>
.bg-secondary {
  background-color: var(--color-background-secondary);
  padding: 0 var(--section-gap);
}
</style>
