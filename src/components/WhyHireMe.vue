<template>
  <section id="beneficios" class="section-padding why-hire">
    <div class="container">
      <div class="section-header text-center">
        <h2>¿Por qué contratarme?</h2>
        <p>Experiencia y confianza en cada trabajo</p>
      </div>

      <div class="reasons-grid">
        <div class="reason-item">
          <div class="icon-box">
            <i class="fa-solid fa-certificate"></i>
          </div>
          <h4>Certificado Chevrolet y VW</h4>
          <p>Cuento con especialización técnica en dos de las marcas más importantes del mercado.</p>
        </div>

        <div class="reason-item">
          <div class="icon-box">
            <i class="fa-solid fa-house-chimney-user"></i>
          </div>
          <h4>Comodidad a Domicilio</h4>
          <p>No pierdas tiempo en talleres. Yo voy donde estés para revisar y reparar tu vehículo.</p>
        </div>

        <div class="reason-item">
          <div class="icon-box">
            <i class="fa-solid fa-magnifying-glass-chart"></i>
          </div>
          <h4>Scanner de Precisión</h4>
          <p>Tecnología avanzada para diagnósticos certeros. Ahorra dinero reparando solo lo necesario.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-hire {
  background-color: var(--white);
  /* Removed dark gradient */
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-top: 50px;
}

.reason-item {
  text-align: center;
  padding: 20px;
}

.icon-box {
  width: 80px;
  height: 80px;
  background: rgba(153, 24, 24, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 2rem;
  color: var(--primary-color);
  transition: var(--transition);
}

.reason-item:hover .icon-box {
  background: var(--primary-color);
  color: var(--white);
  transform: scale(1.1);
}

h4 {
  font-size: 1.3rem;
  margin-bottom: 15px;
}
</style>
