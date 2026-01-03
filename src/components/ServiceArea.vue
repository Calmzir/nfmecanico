<script setup>
import { onMounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

onMounted(() => {
    // Center between Rancagua and Machali
    const map = L.map('map-container', {
        dragging: false,
        touchZoom: false,
        scrollWheelZoom: false,
        zoomControl: false, // Fully static as requested "fijo"
        doubleClickZoom: false,
        boxZoom: false
    }).setView([-34.173, -70.696], window.innerWidth < 768 ? 11 : 12); // Tweaked to 11 per user request

    // CartoDB Light (Positron) Tiles for Contrast
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Coverage Circle with Primary Color
    L.circle([-34.173, -70.696], {
        color: '#991818',
        fillColor: '#991818',
        fillOpacity: 0.2, /* Slightly more transparent on light map */
        radius: 7500 // Increased to cover all Rancagua
    }).addTo(map);
});
</script>

<template>
  <section id="cobertura" class="section-padding service-area">
    <div class="container">
      <div class="service-area-grid">
        <!-- Left Content -->
        <div class="area-text">
          <h2>Zona de Cobertura</h2>
          <div class="divider"></div>
          <h3>Ofrecemos servicios en Rancagua, Machalí y sus alrededores</h3>
          <p class="extra-info">Contáctenos para otras localidades.</p>
          <a href="https://wa.me/56950616848?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20tus%20servicios" class="btn btn-primary mt-4" target="_blank">Consultar Disponibilidad</a>
        </div>

        <!-- Right Map -->
        <div class="area-map">
            <div id="map-container"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-area {
    background-color: #1a1a1a; /* Dark Background matching Contact */
    color: #ffffff;
    /* Remove bottom padding to merge visually if needed, but section-padding handles spacing */
    border-bottom: 1px solid rgba(255,255,255,0.05); /* Subtle separator or remove nicely */
}

.service-area-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.area-text {
    padding-right: 20px;
}

.area-text h2 {
    text-align: left;
    margin-bottom: 20px;
    color: #ffffff;
}

.area-text h3 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--primary-color);
}

.area-text .extra-info {
    font-size: 1.2rem;
    color: #cccccc;
}

.divider {
    width: 60px;
    height: 4px;
    background-color: var(--primary-color);
    margin-bottom: 30px;
}

.mt-4 {
    margin-top: 1.5rem;
}

#map-container {
    height: 400px;
    width: 100%;
    border-radius: 16px;
    /* Clean light border for contrast against dark bg */
    border: 4px solid rgba(255,255,255,0.1); 
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 1;
}

:deep(.leaflet-popup-content-wrapper) {
    background: var(--surface-color);
    color: var(--text-color);
    border: 1px solid var(--primary-color);
}

@media (max-width: 768px) {
    .service-area-grid {
        grid-template-columns: 1fr;
    }
    
    .area-text {
        text-align: center;
        padding-right: 0;
        margin-bottom: 30px;
    }

    .area-text h2 {
        text-align: center;
    }
    
    .divider {
        margin: 0 auto 30px;
    }
}
</style>
