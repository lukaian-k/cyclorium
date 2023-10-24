<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue'

const props = defineProps({
  desktopComponent: {
    type: Object,
    required: true
  },
  mobileComponent: {
    type: Object,
    required: true
  },
  breakpoint: {
    type: Number,
    default: 768
  }
})

const isDesktop = ref(window.innerWidth > props.breakpoint)

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

function handleResize() {
  isDesktop.value = window.innerWidth > props.breakpoint
}
</script>

<template>
  <div>
    <component :is="isDesktop ? props.desktopComponent : props.mobileComponent" />
  </div>
</template>
