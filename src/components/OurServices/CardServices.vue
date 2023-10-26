<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="centered-container">
    <div class="centered-content">
      <span class="icon">
        <img v-if="icon == 0" src="@/assets/icons-services/icon-00.png" alt="Ícone Serviços" />
        <img v-if="icon == 1" src="@/assets/icons-services/icon-01.png" alt="Ícone Serviços" />
        <img v-if="icon == 2" src="@/assets/icons-services/icon-02.png" alt="Ícone Serviços" />
      </span>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <button>
        Saiba Mais
        <FontAwesomeIcon :icon="faArrowRight" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.centered-content {
  max-width: 400px;
  text-align: center;

  background: var(--color-background);
}

.icon {
  background-color: var(--tint-5);

  padding: 28px 10px 3px 0px;
  border-radius: 18px 5px 10px 5px;
}
.icon img {
  width: 40px;
}

h3 {
  color: var(--d-grey);
  text-align: center;

  font-size: 28px;
  font-weight: 700;
  line-height: 36px;

  margin: 15px 0;
}

p {
  color: var(--grey);
  text-align: center;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

button {
  background-color: var(--primary);
  color: var(--white);

  border: none;
  border-radius: 4px;

  margin-top: 20px;
  padding: 14px 22px;

  font-size: 16px;
  cursor: pointer;

  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--shade-2);
}
</style>
