<template>
  <section id="servicios" class="services-section">
    <div class="row">
      <!-- Service 1: Scanner -->
      <div class="service-item">
        <div class="bg-image" style="background-image: url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');"></div>
        <div class="overlay"></div>
        <div class="content">
          <i class="fa-solid fa-laptop-code icon"></i>
          <h3>Scanner Automotriz</h3>
          <p>Diagnóstico computarizado preciso.</p>
        </div>
      </div>

      <!-- Service 2: Revisión -->
      <div class="service-item">
        <div class="bg-image" style="background-image: url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');"></div>
        <div class="overlay"></div>
        <div class="content">
          <i class="fa-solid fa-car-battery icon"></i>
          <h3>Revisión y Diagnóstico</h3>
          <p>Evaluación general preventiva.</p>
        </div>
      </div>

      <!-- Service 3: Frenos -->
      <div class="service-item">
        <div class="bg-image" style="background-image: url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');"></div>
        <div class="overlay"></div>
        <div class="content">
          <i class="fa-solid fa-gears icon"></i>
          <h3>Frenos y Amortiguadores</h3>
          <p>Seguridad y control en cada ruta.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
    width: 100%;
    margin-top: 50px;
    /* Remove padding to support full-width visual */
}

.row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.service-item {
    position: relative;
    flex: 1 1 300px; /* Min width 300px, grow equally */
    height: 400px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-right: 1px solid rgba(255,255,255,0.1);
}

.bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 0;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Slightly darker for better contrast */
    backdrop-filter: blur(4px); /* Blur effect */
    transition: background 0.3s;
    z-index: 1;
}

.service-item:hover .bg-image {
    transform: scale(1.1); /* Zoom In Effect */
}

.service-item:hover .overlay {
    background: rgba(0, 0, 0, 0.3); /* Lighten slightly on hover */
}

.content {
    position: relative;
    z-index: 2;
    padding: 20px;
    color: var(--white);
    pointer-events: none;
    text-shadow: 0 4px 10px rgba(0,0,0,0.8); /* Stronger shadow */
}

.icon {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 20px;
    display: block;
}

h3 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    text-shadow: 0 2px 5px rgba(0,0,0,0.5);
}

p {
    color: #f0f0f0;
    font-size: 1.1rem;
    text-shadow: 0 2px 5px rgba(0,0,0,0.5);
}

@media (max-width: 768px) {
    .service-item {
        flex: 1 1 100%; /* Stack on mobile */
        height: 300px;
    }
}
</style>
