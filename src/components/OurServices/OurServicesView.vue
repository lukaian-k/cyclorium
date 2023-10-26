<script setup>
import CardServices from './CardServices.vue'

const InfoCardsServices = [
  {
    title: 'Montagem de Bicicletas',
    description: 'Montagem especializada de bicicletas para garantir sua prontidão para a estrada.',
    icon: 0
  },
  {
    title: 'Manutenções de Bicicletas',
    description: 'Manutenção profissional para sua bicicleta, garantindo passeios seguros.',
    icon: 1
  },
  {
    title: 'Consutorias',
    description:
      'Nossa consultoria ajuda você a encontrar a bicicleta perfeita ou as peças ideais para suas necessidades',
    icon: 2
  }
]
</script>

<template>
  <div class="container">
    <div class="centered-content">
      <h2>Nossos Serviços</h2>
      <p>
        De manutenção profissional a montagem personalizada, oferecemos soluções completas para
        todas as suas necessidades de bicicleta. Conte conosco para cuidar da sua bicicleta e
        proporcionar a melhor experiência de pedalada.
      </p>
    </div>

    <div class="row">
      <div class="col" v-for="info in InfoCardsServices" :title="info.title" :key="info.title">
        <div class="component">
          <CardServices :title="info.title" :description="info.description" :icon="info.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 50px auto;
}

.centered-content {
  text-align: center;
  margin-bottom: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.col {
  text-align: center;
  flex-basis: calc(33.33% - 20px);

  margin-right: 20px;
  margin-bottom: 20px;
  padding: 20px;

  transition: transform 0.2s;
}

.col:hover {
  transform: scale(1.05);
}

.component {
  padding: 0 20px;
}

h2 {
  color: var(--d-grey);
  text-align: center;

  font-size: 36px;
  font-weight: 600;
  line-height: 44px;

  margin-bottom: 10px;
}

p {
  color: var(--grey);
  text-align: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

img {
  max-width: 100%;
}
</style>
