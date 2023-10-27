<template>
  <div class="container">
    <div class="logo">
      <img src="@/assets/logo/full.svg" alt="Logotipo" />
    </div>
    <div class="content">
      <h2>Quem Somos?</h2>
      <p>
        Somos apaixonados pelo ciclismo e pela qualidade de vida que ele oferece. Com sede na bela
        região de Quixere-CE e áreas vizinhas, nosso compromisso é promover a qualidade do ciclismo
        e o bem-estar das pessoas. Acreditamos em práticas sustentáveis que beneficiam o meio
        ambiente e contribuem para a popularização desse esporte incrível. Nossa jornada começou a
        partir de uma paixão sincera pelo ciclismo, e hoje, estamos dedicados a compartilhar essa
        paixão e apoiar a comunidade ciclística em sua busca por um estilo de vida saudável e
        sustentável.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px var(--section-gap);
  gap: 78px;

  background-color: var(--color-background-secondary);
}

.logo {
  max-width: 100%;
}

.content {
  display: flex;
  flex-direction: column;

  gap: 32px;
}

h2 {
  color: var(--d-grey);
  text-align: center;

  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
}

p {
  color: var(--grey);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    text-align: center;

    padding: 32px 0;
    gap: 50px;
  }

  .logo {
    max-width: 100%;
  }

  .content {
    flex: 1;
    gap: 20px;
  }

  p {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
