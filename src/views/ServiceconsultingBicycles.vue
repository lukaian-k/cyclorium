<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import data from '@/assets/data.json'

function formatNumber(number) {
  number = number.replace(/^55/, '')
  const regex = /(\d{2})(\d)(\d{4})(\d{4})/

  return number.replace(regex, '($1) $2-$3-$4')
}

const numberFormat = ref(formatNumber(data.number))

function openWhatsApp() {
  const phoneNumber = data.number
  const message =
    'Olá, estou interessado no serviço de consultoria. Gostaria de obter mais informações!'

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`
  window.open(url, '_blank')
}

function openInstagramChat() {
  const username = data.usernameInstagram
  const url = `https://www.instagram.com/${username}/`

  window.open(url, '_blank')
}
</script>

<template>
  <div class="landing-page">
    <img
      class="landing-image"
      src="@/assets/icons-services/consulting-bicycles.svg"
      alt="Imagem Montagem de Bicicletas"
    />

    <div class="landing-content">
      <h1 class="landing-title">Consultoria</h1>
      <p class="landing-description">
        Nossa consultoria especializada está pronta para auxiliá-lo na busca pela bicicleta perfeita
        ou pelas peças ideais que atendam completamente às suas necessidades individuais. Com anos
        de experiência e um profundo conhecimento no mundo das bicicletas, nossa equipe dedicada
        trabalha de perto com você para entender seus objetivos, estilo de pedalada e preferências.
        Através de uma abordagem personalizada, recomendamos as melhores opções de bicicletas ou
        componentes, levando em consideração fatores como estilo de pilotagem, terreno preferido e
        orçamento. Nosso objetivo é assegurar que você encontre não apenas uma bicicleta, mas a
        bicicleta que se adapte perfeitamente a você, proporcionando uma experiência de pedalada sob
        medida que atenda a todas as suas expectativas.
      </p>

      <div class="contact-info">
        <p class="contact-number">
          número de contato <FontAwesomeIcon :icon="faArrowRight" />
          <a @click="openWhatsApp">
            {{ ' ' + numberFormat }}
          </a>
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
    max-width: 80%;
  }

  .landing-title {
    font-size: 24px;
  }

  .landing-description {
    font-size: 14px;
  }
}
</style>
