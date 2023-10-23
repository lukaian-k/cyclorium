<script setup>
import { reactive } from 'vue'

import Slide1 from './PagesCarousel/ScheduleMaintenanceCarousel.vue'
import Slide2 from './PagesCarousel/ScheduleMountCarousel.vue'
import Slide3 from './PagesCarousel/ScheduleConsultingCarousel.vue'

let state = reactive({
  currentSlide: 0,
  timer: null
})

const slides = [Slide1, Slide2, Slide3]

function goToSlide(index) {
  state.currentSlide = index
  resetAutoSlide()
}

function nextSlide() {
  state.currentSlide = (state.currentSlide + 1) % slides.length
  resetAutoSlide()
}

function resetAutoSlide() {
  clearTimeout(state.timer)
  startAutoSlide()
}

function startAutoSlide() {
  state.timer = setInterval(() => {
    nextSlide()
  }, 5000)
}

startAutoSlide()
</script>

<template>
  <div class="carousel">
    <div class="slide-container">
      <transition name="fade" mode="out-in">
        <component :is="slides[state.currentSlide]" />
      </transition>
    </div>

    <div class="indicators">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        class="indicator"
        :class="{ active: index === state.currentSlide }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<style>
.carousel {
  padding-bottom: 60px;
}

.indicators {
  display: flex;
  justify-content: center;

  margin-top: 10px;
}

.indicator {
  width: 10px;
  height: 10px;

  background-color: var(--tint-4);
  border-radius: 50%;

  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.indicator.active {
  background-color: var(--primary);
}
</style>
