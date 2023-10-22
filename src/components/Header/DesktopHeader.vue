<script setup>
import { RouterLink } from 'vue-router'

import sections from './sections.json'
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <RouterLink to="/" aria-label="Página Inicial">
        <div class="logo">
          <img src="@/assets/logo.svg" alt="Home" width="100" />
        </div>
      </RouterLink>

      <nav class="main-menu">
        <ul class="menu-list">
          <RouterLink class="item-list" v-for="item in sections" :to="item.to" :key="item.to">
            <li class="menu-item">
              {{ item.name }}
            </li>
          </RouterLink>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  padding: 1rem 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.logo img {
  width: auto;
  max-width: 100%;
}

.menu-list {
  list-style: none;
  display: flex;
  gap: 50px;
  margin: 0;
  padding: 0;
}

.main-menu a {
  text-decoration: none;
  color: var(--color-text);
}

.menu-item {
  font-size: large;
}
</style>
