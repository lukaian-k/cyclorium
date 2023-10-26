<script setup>
import { reactive } from 'vue'

import Slide1Mobile from './PagesCarousel/Mobile/ScheduleMaintenanceCarouselMobile.vue'
import Slide2Mobile from './PagesCarousel/Mobile/ScheduleMountCarouselMobile.vue'
import Slide3Mobile from './PagesCarousel/Mobile/ScheduleConsultingCarouselMobile.vue'

let state = reactive({
  currentSlide: 0,
  timer: null
})

const slides = [Slide1Mobile, Slide2Mobile, Slide3Mobile]

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
  z-index: 1;
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
