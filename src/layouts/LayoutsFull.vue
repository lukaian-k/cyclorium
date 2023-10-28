<script setup>
import { RouterView } from 'vue-router'

import DesktopHeader from '@/components/Header/DesktopHeader.vue'
import MobileHeader from '@/components/Header/MobileHeader.vue'

import DesktopFooter from '@/components/Footer/DesktopFooter.vue'
import MobileFooter from '@/components/Footer/MobileFooter.vue'

import ControllerLayouts from '@/components/ControllerLayouts.vue'
</script>

<template>
  <v-app>
    <v-header id="home">
      <ControllerLayouts
        class="bg-secondary"
        :desktopComponent="DesktopHeader"
        :mobileComponent="MobileHeader"
      />
    </v-header>

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>

    <v-footer>
      <ControllerLayouts :desktopComponent="DesktopFooter" :mobileComponent="MobileFooter" />
    </v-footer>
  </v-app>
</template>

<style scoped>
.bg-secondary {
  background-color: var(--color-background-secondary);
  padding: 0 var(--section-gap);
}
</style>
