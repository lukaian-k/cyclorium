<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import HeaderDesktop from './DesktopHeader.vue'
import HeaderMobile from './MobileHeader.vue'

const isDesktop = ref(window.innerWidth > 768)

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

function handleResize() {
  isDesktop.value = window.innerWidth > 768
}
</script>

<template>
  <div>
    <HeaderDesktop v-if="isDesktop" />
    <HeaderMobile v-else />
  </div>
</template>
