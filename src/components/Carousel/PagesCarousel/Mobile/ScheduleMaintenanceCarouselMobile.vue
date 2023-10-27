<template>
  <div class="container">
    <div class="header">
      <h1>
        Agende a sua
        <span style="color: var(--primary)">Manutenção</span>
      </h1>
      <p>Agende um horário conveniente para serviços de alta qualidade.</p>
    </div>

    <div class="image">
      <img src="@/assets/img-carousel/Illustration-maintenance.svg" alt="Imagem" height="300" />
    </div>

    <div class="footer">
      <button>Agendar Agora</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
}

.header {
  align-items: center;
  margin-top: 40px;
  gap: 20px;
  width: fit-content;

  z-index: 1;
}

.image {
  display: block;
  position: absolute;

  opacity: 0.2;
}

.footer {
  align-items: center;

  margin-top: 20px;
  gap: 10px;

  z-index: 1;
}

h1,
span {
  color: var(--neutral-d-grey);
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
}

p {
  color: var(--grey);
  font-size: 16px;
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

  padding: 14px 32px;
  gap: 10px;

  border-radius: 4px;
  border: none;
  cursor: pointer;
}
</style>
