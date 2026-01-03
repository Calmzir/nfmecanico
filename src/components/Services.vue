<template>
  <section id="servicios" class="section-padding services">
    <div class="container">
      <div class="section-header text-center">
        <h2>Mis Servicios</h2>
        <p>Soluciones mecánicas integrales a domicilio</p>
      </div>
      
      <div class="services-grid">
        <!-- Service 1 -->
        <div class="service-card featured">
          <div class="service-icon">
            <i class="fa-solid fa-laptop-code"></i>
          </div>
          <h3>Scanner Automotriz</h3>
          <p>Diagnóstico computarizado preciso para identificar fallas rápidamente. Tecnología de punta para tu vehículo.</p>
        </div>

        <!-- Service 2 -->
        <div class="service-card">
          <div class="service-icon">
            <i class="fa-solid fa-car-battery"></i>
          </div>
          <h3>Revisión y Diagnóstico</h3>
          <p>Evaluación general del estado de tu auto. Detección de problemas antes de que se conviertan en fallas graves.</p>
        </div>

        <!-- Service 3 -->
        <div class="service-card">
          <div class="service-icon">
            <i class="fa-solid fa-gears"></i>
          </div>
          <h3>Frenos y Amortiguadores</h3>
          <p>Mantenimiento y cambio de pastillas de freno, discos y amortiguadores para garantizar tu seguridad en la ruta.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services .section-header {
    margin-bottom: 60px;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.service-card {
    background: var(--surface-color);
    padding: 40px;
    border-radius: 16px;
    border: 1px solid var(--glass-border);
    transition: var(--transition);
    text-align: center;
}

.service-card.featured {
    border-color: var(--primary-color);
    box-shadow: 0 0 20px rgba(255, 87, 34, 0.2);
}

.service-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary-color);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.service-icon {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 20px;
}

.service-card h3 {
    margin-bottom: 15px;
    font-size: 1.5rem;
}
</style>
