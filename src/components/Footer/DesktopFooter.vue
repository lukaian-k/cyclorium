<script setup>
import { RouterLink } from 'vue-router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <footer>
    <div class="footer-content">
      <div class="left-content">
        <div class="logo">
          <RouterLink to="/">
            <img src="@/assets/logo/full-white.svg" alt="Logo do site" />
          </RouterLink>
        </div>
        <p>
          Copyright © 2023 developed by
          <a href="https://beacons.ai/lukaian" target="_blank" style="color: var(--shade-2)">
            lukaian
          </a>
        </p>
        <div class="social-icons">
          <a href="https://api.whatsapp.com/send?phone=5588996667930" target="_blank">
            <FontAwesomeIcon class="icon" :icon="faWhatsapp" />
          </a>
          <a href="https://www.instagram.com/emeson.sousa.lima/" target="_blank">
            <FontAwesomeIcon class="icon" :icon="faInstagram" />
          </a>
          <a href="" target="_blank">
            <FontAwesomeIcon class="icon" :icon="faFacebook" />
          </a>
          <a href="" target="_blank">
            <FontAwesomeIcon class="icon" :icon="faYoutube" />
          </a>
        </div>
      </div>
      <div class="right-content">
        <div class="column">
          <h3>Atalhos</h3>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about-us">Sobre Nós</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        <div class="column">
          <h3>Parceiros</h3>
          <div class="partners">
            <!-- <img src="partner1.png" alt="Parceiro 1" /> -->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--color-background-dark);
  color: var(--white);

  text-align: center;
  padding: 30px var(--section-gap);
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1200px;
  margin: 0 auto;
}

.left-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.right-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.logo img {
  max-width: 100px;
}

.social-icons {
  margin: 10px 0;
  font-size: 20px;
}

.social-icons .icon {
  background-color: var(--tint-2);
  border-radius: 50%;

  margin-right: 10px;
  padding: 5px;
}

.column {
  flex: 1;
  text-align: left;
  padding: 0 20px;
}

.column h3 {
  color: var(--white);

  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}

.column a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-top: 5px;
}

.right-content a {
  color: var(--silver);

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

a {
  text-decoration: none;
  color: inherit;
}

.partners img {
  max-width: 80px;
}
</style>
