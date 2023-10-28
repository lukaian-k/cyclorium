<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <footer>
    <div class="footer-content">
      <div class="left-content">
        <div class="logo">
          <img src="@/assets/logo/full-white.svg" alt="Logo do site" />
        </div>
        <p>
          Copyright © 2023 developed by
          <a href="https://beacons.ai/lukaian" target="_blank" style="color: var(--shade-2)">
            lukaian
          </a>
        </p>
        <div class="social-icons">
          <FontAwesomeIcon class="icon" :icon="faWhatsapp" />
          <FontAwesomeIcon class="icon" :icon="faInstagram" />
          <FontAwesomeIcon class="icon" :icon="faFacebook" />
          <FontAwesomeIcon class="icon" :icon="faYoutube" />
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
</style>
