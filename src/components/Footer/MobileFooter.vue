<script setup>
import { RouterLink } from 'vue-router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

import data from '@/assets/data.json'
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
          <a :href="data.developer.url" target="_blank" style="color: var(--shade-2)">
            {{ data.developer.name }}
          </a>
        </p>
        <div class="social-icons">
          <a :href="`https://api.whatsapp.com/send?phone=${data.number}`" target="_blank">
            <FontAwesomeIcon class="icon" :icon="faWhatsapp" />
          </a>
          <a :href="`https://www.instagram.com/${data.usernameInstagram}`" target="_blank">
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
  padding: 30px 0;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 10px;
  gap: 20px;
}

.left-content {
  text-align: center;
}

.logo img {
  max-width: 80px;
}

.social-icons {
  margin: 20px 0;
  font-size: 24px;
}

.social-icons .icon {
  padding: 8px;
}

.right-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.column {
  text-align: center;
}

.column h3 {
  font-size: 18px;
}

.partners img {
  max-width: 60px;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
