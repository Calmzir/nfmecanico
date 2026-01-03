<template>
  <section id="servicios" class="services-section">
    <h2 class="sr-only">Nuestros Servicios</h2>
    <div class="services-container">
      
      <!-- Service 1: Mantención General -->
      <div class="service-panel">
        <div class="bg-image" role="img" aria-label="Mecánico realizando mantención general al motor" style="background-image: url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');"></div>
        <div class="overlay"></div>
        <div class="vertical-border"></div>
        
        <div class="content">
          <i class="fa-solid fa-screwdriver-wrench icon"></i>
          <h3>Mantención General</h3>
          <p class="desc">Afinamiento, cambio de aceite y filtros para mantener tu motor impecable.</p>
        </div>
      </div>

      <!-- Service 2: Revisión y Diagnóstico -->
      <div class="service-panel">
        <div class="bg-image" role="img" aria-label="Diagnóstico computarizado de automóvil" style="background-image: url('https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');"></div>
        <div class="overlay"></div>
        <div class="vertical-border"></div>

        <div class="content">
          <i class="fa-solid fa-laptop-code icon"></i>
          <h3>Revisión y Diagnóstico</h3>
          <p class="desc">Evaluación completa con scanner para detectar y solucionar fallas a tiempo.</p>
        </div>
      </div>

      <!-- Service 3: Cambio de Embrague -->
      <div class="service-panel">
        <div class="bg-image" role="img" aria-label="Reparación de sistema de embrague" style="background-image: url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');"></div>
        <div class="overlay"></div>
        <div class="vertical-border"></div>
        
        <div class="content">
          <i class="fa-solid fa-circle-notch icon"></i>
          <h3>Cambio de Embrague</h3>
          <p class="desc">Sustitución de kit de embrague para recuperar la potencia y suavidad de marcha.</p>
        </div>
      </div>

      <!-- Service 4: Cambio de Distribución -->
      <div class="service-panel">
        <div class="bg-image" role="img" aria-label="Cambio de kit de distribución" style="background-image: url('/service-distribucion.png');"></div>
        <div class="overlay"></div>
        <div class="vertical-border"></div>
        
        <div class="content">
          <i class="fa-solid fa-link icon"></i>
          <h3>Cambio de Distribución</h3>
          <p class="desc">Reemplazo de correas y cadenas de distribución para evitar daños graves al motor.</p>
        </div>
      </div>

      <!-- Service 5: Tren Delantero y Frenos -->
      <div class="service-panel">
        <div class="bg-image" role="img" aria-label="Revisión de frenos delanteros" style="background-image: url('/service-frenos.png');"></div>
        <div class="overlay"></div>
        
        <div class="content">
          <i class="fa-solid fa-car-burst icon"></i>
          <h3>Tren Delantero y Frenos</h3>
          <p class="desc">Reparación de suspensión, dirección y frenos para tu total seguridad.</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.services-section {
    width: 100%;
    height: 70vh; /* Taller height to mimic hero */
    background-color: #000;
    overflow: hidden;
}

.services-container {
    display: flex;
    width: 100%;
    height: 100%;
}

.service-panel {
    flex: 1;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: flex 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0; /* allows flex shrinkage */
}

/* Expand on Hover */
.service-panel:hover {
    flex: 3; /* Grow effect */
}

.bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-size: cover;
    background-position: center;
    transition: transform 0.6s ease, filter 0.6s ease;
    filter: grayscale(60%) brightness(0.7); /* Lighter and clearer */
    will-change: transform, filter;
}

.service-panel:hover .bg-image {
    filter: grayscale(0%) brightness(1); /* Full color and brightness on hover */
    transform: scale(1.1);
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Lighter gradient to show more image */
    background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.7)); 
    pointer-events: none;
    z-index: 1;
}

/* Vertical Divider style matching Hero */
.vertical-border {
    position: absolute;
    right: 0;
    top: 15%;
    height: 70%;
    width: 1px;
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5), transparent);
    z-index: 10;
    pointer-events: none;
}

.service-panel:last-child .vertical-border {
    display: none;
}

.content {
    position: relative;
    z-index: 2;
    text-align: center;
    width: 100%;
    padding: 0 20px;
    opacity: 0.8;
    transform: translateY(20px);
    transition: all 0.5s ease;
}

.service-panel:hover .content {
    opacity: 1;
    transform: translateY(0);
}

.icon {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 20px;
    display: block;
    text-shadow: 0 4px 10px rgba(0,0,0,0.5);
}

h3 {
    font-size: 1.8rem;
    color: var(--white);
    margin-bottom: 15px;
    text-shadow: 0 2px 5px rgba(0,0,0,0.8);
    white-space: nowrap; /* Keep title on one line initially */
    overflow: hidden;
    text-overflow: ellipsis; 
}

.service-panel:hover h3 {
    white-space: normal; /* Allow wrap on expand */
    overflow: visible;
}

.desc {
    font-size: 1.1rem;
    color: #ddd;
    max-height: 0; /* Hide desc by default */
    opacity: 0;
    overflow: hidden;
    transition: all 0.5s ease;
}

.service-panel:hover .desc {
    max-height: 200px; /* Reveal on hover */
    opacity: 1;
    margin-top: 10px;
}

/* Mobile: Stack them instead of flex row */
@media (max-width: 768px) {
    .services-section {
        height: auto;
    }
    
    .services-container {
        flex-direction: column;
    }

    .service-panel {
        height: 300px; /* Fixed height per item */
        width: 100%;
        flex: none !important; /* Disable flex scaling */
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    
    .vertical-border {
        display: none;
    }

    .desc {
        max-height: none;
        opacity: 1;
    }
    
    .bg-image {
        filter: grayscale(0%) brightness(0.6);
    }
    
    .content {
        opacity: 1;
        transform: none;
    }
    
    h3 {
        white-space: normal;
    }
}
</style>
