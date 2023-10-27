<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <div class="container">
    <img src="@/assets/img-contact/img-chat.svg" alt="Imagem" />
    <div class="content">
      <div class="text">
        <h2>Contate-nos</h2>
        <p>
          Estamos sempre disponíveis para ajudá-lo! Entre em contato conosco pelo WhatsApp ou
          Instagram para obter respostas às suas dúvidas e suporte especializado. E se precisar de
          assistência a qualquer hora do dia, nosso assistente virtual está à disposição 24 horas
          para responder suas perguntas.
        </p>
      </div>
      <div class="row-icons">
        <FontAwesomeIcon class="icon" :icon="faWhatsapp" size="2x" />
        <FontAwesomeIcon class="icon" :icon="faInstagram" size="2x" />
      </div>
      <button>Pergunte ao Bot</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px var(--section-gap);
  gap: 80px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 10px;
}

.row-icons {
  display: flex;
  align-items: flex-start;

  color: var(--black);

  gap: 16px;
}

.icon {
  background-color: var(--silver);
  padding: 8px;

  border-radius: 50%;
}

img {
  max-width: 100%;
}

h2 {
  color: var(--d-grey);

  font-size: 36px;
  font-weight: 600;
  line-height: 44px;

  margin-bottom: 10px;
}

p {
  color: var(--grey);

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--primary);
  color: var(--white);

  margin-top: 20px;
  padding: 14px 32px;
  gap: 10px;

  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: var(--shade-2);
}

@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    text-align: center;

    padding: 32px 0;
    gap: 10px;
  }

  img {
    max-width: 100%;
  }

  .content {
    flex: 1;
    align-items: center;

    gap: 20px;
  }

  p {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
