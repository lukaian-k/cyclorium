<script setup>
import { RouterLink } from 'vue-router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function openWhatsApp() {
  const phoneNumber = '5588996667930'
  const message =
    'Olá, estou interessado no serviço de montagem. Gostaria de obter mais informações!'

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`
  window.open(url, '_blank')
}

function openInstagramChat() {
  const username = 'emeson.sousa.lima'
  const url = `https://www.instagram.com/${username}/`

  window.open(url, '_blank')
}
</script>

<template>
  <div class="landing-page">
    <img
      class="landing-image"
      src="@/assets/icons-services/assembly-bicycles.svg"
      alt="Imagem Montagem de Bicicletas"
    />

    <div class="landing-content">
      <h1 class="landing-title">Montagem de Bicicletas</h1>
      <p class="landing-description">
        Realizamos uma montagem especializada de bicicletas, cuidadosamente executada para assegurar
        que sua bicicleta esteja totalmente pronta para encarar as estradas. Nossa atenção
        meticulosa aos detalhes e profissionalismo garantem que cada componente da bicicleta esteja
        ajustado e alinhado da melhor maneira possível, resultando em um desempenho superior e uma
        experiência de pedal suave. Seja você um ciclista recreativo, um entusiasta de aventuras ao
        ar livre ou um competidor sério, nossa montagem especializada proporciona a tranquilidade de
        saber que sua bicicleta está em perfeitas condições para enfrentar qualquer desafio na
        estrada.
      </p>

      <div class="contact-info">
        <p class="contact-number">
          número de contato <FontAwesomeIcon :icon="faArrowRight" />
          <a @click="openWhatsApp"> (88) 9-9666-7930 </a>
        </p>
        <button class="whatsapp-button" @click="openWhatsApp">WhatsApp</button>
        <button class="instagram-button" @click="openInstagramChat">Instagram</button>
      </div>
    </div>

    <RouterLink to="/">
      <button class="go-to-top-button">Voltar ao Início</button>
    </RouterLink>
  </div>
</template>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  padding: 20px;
}

.landing-image {
  max-width: 20%;
}

.landing-content {
  max-width: 600px;
  margin: 20px;
}

.landing-title {
  margin-bottom: 10px;

  font-size: 28px;
  font-weight: 700;
  line-height: 36px;

  color: var(--color-heading);
}

.landing-description {
  color: var(--color-text);

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.contact-info {
  margin-top: 10px;
}

.contact-number {
  font-size: 16px;
  color: var(--color-text);
}

.contact-number a {
  color: var(--shade-3);
  font-weight: 600;

  cursor: pointer;
}

.whatsapp-button,
.instagram-button {
  background-color: var(--ok);
  color: var(--white);

  margin: 10px 5px;
  padding: 10px 20px;

  border: none;
  border-radius: 4px;

  cursor: pointer;
  font-weight: bold;
}

.whatsapp-button:hover,
.instagram-button:hover {
  opacity: 0.7;
}

.go-to-top-button {
  background-color: var(--primary);
  color: var(--white);

  margin: 10px 0;
  padding: 10px 20px;

  border: none;
  border-radius: 4px;

  cursor: pointer;
  font-weight: bold;
}

.go-to-top-button:hover {
  background-color: var(--shade-2);
}

@media (max-width: 1024px) {
  .landing-image {
    max-width: 50%;
  }

  .landing-title {
    font-size: 24px;
  }

  .landing-description {
    font-size: 14px;
  }
}
</style>
