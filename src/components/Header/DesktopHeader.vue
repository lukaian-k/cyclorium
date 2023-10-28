<script setup>
import { RouterLink } from 'vue-router'
import sections from './sections.json'

function handleScroll() {
  const header = document.querySelector('.site-header')
  header.classList.toggle('fixed-header', window.scrollY > 100)
}

window.addEventListener('scroll', handleScroll)
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <RouterLink to="/" aria-label="Página Inicial">
        <div class="logo">
          <img src="@/assets/logo/icon.svg" alt="Home" width="100" />
        </div>
      </RouterLink>

      <nav class="main-menu">
        <ul class="menu-list">
          <a class="item-list" v-for="item in sections" :href="item.to" :key="item.to">
            <li class="menu-item">
              {{ item.name }}
            </li>
          </a>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.fixed-header {
  position: fixed;
  inset: 0 0 auto 0;

  background-color: var(--color-background);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  z-index: 100;
}

.fixed-header .logo {
  margin-left: var(--section-gap);
}

.fixed-header nav {
  margin-right: var(--section-gap);
}

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
