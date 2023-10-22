<script setup>
import HeaderController from '@/components/Header/ControllerHeader.vue'
</script>

<template>
  <header>
    <HeaderController />
  </header>
</template>

<style scoped>
header {
  background-color: var(--color-background-secondary);
  padding: 0 var(--section-gap);
}
</style>
