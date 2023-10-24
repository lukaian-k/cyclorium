<script setup>
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import sections from './sections.json'

let state = reactive({
  showMenu: false
})

function toggleMenu() {
  state.showMenu = !state.showMenu
}
</script>

<template>
  <header>
    <RouterLink to="/" aria-label="Página Inicial">
      <img src="@/assets/logo.svg" alt="Home" width="40" />
    </RouterLink>

    <nav>
      <span>
        <div class="mobile-menu" :class="{ active: state.showMenu }">
          <RouterLink class="item-list" v-for="item in sections" :to="item.to" :key="item.to">
            <p>{{ item.name }}</p>
          </RouterLink>
        </div>

        <font-awesome-icon class="button" @click="toggleMenu" :icon="faBars" size="2x" />
      </span>
    </nav>
  </header>
</template>

<style scoped>
header img,
nav {
  position: fixed;
  top: 0;
  margin-top: 1.2em;

  z-index: 100;
}

header img {
  left: 2em;
}

nav {
  right: 2em;
}

nav span {
  display: flex;
}

.mobile-menu {
  display: none;

  background-color: var(--color-background);
  border-radius: 5%;

  padding: 0.7em;
}

.button {
  padding-left: 10px;
}

.mobile-menu.active {
  display: block;
}

.mobile-menu.active a {
  text-decoration: none;
}

.item-list p {
  font-size: larger;
  font-weight: 400;
  color: var(--color-text);
  margin-bottom: 10px;
}
</style>
