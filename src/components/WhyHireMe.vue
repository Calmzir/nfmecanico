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
          <h4>Certificaciones</h4>
          <p>Mecánico certificado en Chevrolet y Volkswagen. Tu vehículo en manos de un experto calificado.</p>
        </div>

        <div class="reason-item">
          <div class="icon-box">
            <i class="fa-solid fa-house-chimney-user"></i>
          </div>
          <h4>Servicio a Domicilio</h4>
          <p>Comodidad absoluta. Voy a tu casa u oficina para realizar diagnósticos y mantenimientos.</p>
        </div>

        <div class="reason-item">
          <div class="icon-box">
            <i class="fa-solid fa-handshake-simple"></i>
          </div>
          <h4>Confianza y Transparencia</h4>
          <p>Diagnósticos honestos, precios claros y sin sorpresas. Te explico cada detalle del trabajo.</p>
        </div>

        <div class="reason-item">
          <div class="icon-box">
            <i class="fa-solid fa-screwdriver-wrench"></i>
          </div>
          <h4>Servicio a la Medida</h4>
          <p>Soluciones personalizadas para las necesidades específicas de tu auto y presupuesto.</p>
        </div>

        <div class="reason-item">
          <div class="icon-box">
            <i class="fa-solid fa-clock-rotate-left"></i>
          </div>
          <h4>Años de Experiencia</h4>
          <p>Trayectoria comprobada resolviendo todo tipo de fallas mecánicas con eficiencia.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-hire {
  background-color: var(--background-color); /* Light gray background */
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Mobile: 1 column */
  gap: 30px;
  margin-top: 50px;
}

/* Tablet */
@media (min-width: 768px) {
  .reasons-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 4 Columns -> 5 Columns */
@media (min-width: 1200px) {
  .reasons-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

.reason-item {
  text-align: center;
  padding: 30px 20px;
  background-color: var(--surface-color); /* White cards */
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); /* Subtle shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0,0,0,0.03);
}

.reason-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(153, 24, 24, 0.15); /* Red tinted shadow on hover */
}

.icon-box {
  width: 70px;
  height: 70px;
  background: rgba(153, 24, 24, 0.08);
  border-radius: 12px; /* Soft square instead of circle for modern card look */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 1.8rem;
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.reason-item:hover .icon-box {
  background: var(--primary-color);
  color: var(--white);
  transform: rotateY(180deg); /* Little playful interaction */
}

h4 {
  font-size: 1.25rem;
  margin-bottom: 12px;
  font-weight: 700;
  color: var(--text-color);
}

p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}
</style>
