<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="left-side">
      <h1>
        Agende sua Manutenção de
        <span style="color: var(--primary)">Bicicleta</span>
      </h1>
      <p>Agende um horário conveniente para serviços de alta qualidade.</p>

      <RouterLink to="/manutencao">
        <button>Agendar Agora</button>
      </RouterLink>
    </div>

    <div class="right-side">
      <img src="@/assets/img-carousel/Illustration-maintenance.svg" alt="Imagem" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  padding: 20px;
}

.left-side {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  gap: 20px;
}

.right-side {
  flex: 1;
  text-align: right;
}

h1,
span {
  color: var(--neutral-d-grey);
  font-size: 64px;
  font-weight: 600;
  line-height: 76px;
}

p {
  font-size: 16px;
  color: var(--grey);
  font-weight: 400;
  line-height: 24px;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--primary);
  color: var(--white);
  font-size: medium;

  margin-top: 10px;
  padding: 14px 32px;
  gap: 10px;

  border-radius: 4px;
  border: none;
  cursor: pointer;
}

a {
  text-decoration: none;
}
</style>
