<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activeIndex = ref(0);
let autoPlayInterval = null;

const slides = [
  {
    id: 1,
    title: "Mecánica a Domicilio",
    desc: "Servicio experto donde lo necesites. Sin filas ni esperas.",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: "Agendar Visita",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    ariaLabel: "Mecánico reparando un motor de automóvil en detalle",
    cta: "Agendar Visita",
    link: "#contacto"
  },
  {
    id: 2,
    title: "Confianza y Transparencia",
    desc: "Diagnósticos honestos y presupuestos claros. Solo reparamos lo que tu auto realmente necesita.",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Mechanic explaining transparently
    cta: "Ver Testimonios",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Mechanic explaining transparently
    ariaLabel: "Mecánico explicando pacientemente el diagnóstico a un cliente",
    cta: "Ver Testimonios",
    link: "#reseñas"
  },
  {
    id: 3,
    title: "Especialista Chevrolet y Volkswagen",
    desc: "Certificado en marcas líderes para un mantenimiento garantizado.",
    image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // VW Golf R
    image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // VW Golf R
    ariaLabel: "Primer plano de un vehículo Volkswagen moderno",
    // cta and link removed from data objects as they are now global
  }
];

const setActive = (index) => {
  activeIndex.value = index;
  resetAutoPlay();
};

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % slides.length;
};

const startAutoPlay = () => {
  autoPlayInterval = setInterval(nextSlide, 6000); 
};

const resetAutoPlay = () => {
  clearInterval(autoPlayInterval);
  startAutoPlay();
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  clearInterval(autoPlayInterval);
});
</script>

<template>
  <section id="inicio" class="hero-accordion">
    <div class="slides-container">
      <div 
        v-for="(slide, index) in slides" 
        :key="slide.id"
        class="slide"
        :class="{ active: activeIndex === index }"
        @click="setActive(index)"
      >
        <!-- Background Wrapper to counteract skew -->
        <div class="slide-bg" role="img" :aria-label="slide.ariaLabel" :style="{ backgroundImage: `url(${slide.image})` }"></div>
        <div class="overlay"></div>
        
        <!-- Vertical Border -->
        <div class="vertical-border" v-if="index !== slides.length - 1"></div>
        
        <div class="content">
          <!-- Content visible regardless of state -->
          <h2 class="vertical-title" v-show="activeIndex !== index">{{ slide.title }}</h2>

          <!-- Content visible ONLY when active -->
          <div class="active-content" v-show="activeIndex === index">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.desc }}</p>
            <!-- Individual button removed -->
          </div>
        </div>
      </div>
    </div>

    <!-- Global UI Overlay -->
    <div class="hero-overlay-ui">
        <!-- Navigation Dots -->
        <div class="slider-dots">
            <span 
                v-for="(slide, index) in slides" 
                :key="'dot-'+slide.id"
                class="dot"
                :class="{ active: activeIndex === index }"
                @click="setActive(index)"
            ></span>
        </div>

        <a href="https://wa.me/56950616848?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20tus%20servicios" class="btn btn-primary global-cta" target="_blank">
            <span class="desktop-text">Agenda tu visita ahora</span>
            <span class="mobile-text">Agendar Visita</span>
        </a>
        
        <div class="scroll-indicator">
            <i class="fa-solid fa-chevron-down"></i>
        </div>
    </div>
  </section>
</template>

<style scoped>
/* ... existing styles ... */
/* Add these rules at the end of the file or merge with existing media query */

.desktop-text { display: inline; }
.mobile-text { display: none; }

/* ... */

@media (max-width: 768px) {
  /* ... existing mobile styles ... */
  
  .desktop-text { display: none; }
  .mobile-text { display: inline; }
  
  .global-cta {
      width: auto;
      max-width: none;
      position: absolute;
      bottom: 20px; /* Align with WhatsApp bottom roughly */
      left: 20px;   /* Opposite side of WhatsApp (Right) */
      margin-bottom: 0;
      font-size: 0.9rem;
      padding: 12px 20px;
      z-index: 50; /* Ensure visibility */
  }
  
  /* Ensure Hero UI doesn't force center alignment on this absolute element if needed */
  .hero-overlay-ui {
      align-items: center; /* Keep other items centered if any */
  }
}
.hero-accordion {
  width: 100%;
  height: 90vh; 
  overflow: hidden;
  background-color: #000;
  padding-top: 80px; 
  position: relative;
}

.slides-container {
  display: flex;
  width: 100%; /* Back to 100% as no skew to hide */
  height: 100%;
  margin-left: 0;
}

/* Global UI Styles */
.hero-overlay-ui {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Allow clicks to pass through to slides */
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 30px;
}

.slider-dots {
    position: absolute;
    top: 30px;
    display: flex;
    gap: 15px;
    pointer-events: auto;
    z-index: 30;
}

.dot {
    width: 12px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.dot.active {
    background-color: var(--primary-color);
    transform: scale(1.3);
    border-color: var(--primary-color);
}

.global-cta {
    pointer-events: auto; /* Re-enable clicks */
    font-size: 1.3rem;
    padding: 15px 40px;
    box-shadow: 0 4px 20px rgba(153, 24, 24, 0.5);
    margin-bottom: 60px; /* Space above arrow */
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    /* Uses global btn-primary style now */
}

.scroll-indicator {
    color: rgba(255, 255, 255, 0.7);
    font-size: 2rem;
    animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-10px);}
  60% {transform: translateY(-5px);}
}

.slide {
  flex: 1;
  position: relative;
  cursor: pointer;
  
  /* Optimized: Faster (0.6s) and ease-out for responsiveness */
  transition: flex 0.6s cubic-bezier(0.2, 0.6, 0.2, 1);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: flex;
  
  /* Removed skew transform */
}

.slide:last-child {
  /* No special border handling needed for last child as v-if handles the div */
}

/* Vertical Divider Line */
.vertical-border {
    position: absolute;
    right: 0;
    top: 15%; /* Spacing from top */
    height: 70%; /* Spacing from bottom */
    width: 2px; /* Standard elegant thickness */
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5), transparent); /* Fading ends */
    z-index: 10;
    pointer-events: none;
}

/* Background Image - Standard scaling */
.slide-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  /* Removed skew and reduce scale slightly as rotation logic is gone */
  transition: filter 0.4s ease;
  
  /* Filter only on background now */
  filter: grayscale(80%) blur(2px) brightness(0.6);
  will-change: filter;
}

.slide.active .slide-bg {
  filter: grayscale(0%) blur(0) brightness(1);
}

.slide.active {
  flex: 5; 
  cursor: default;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8));
  pointer-events: none;
  /* Removed skew */
}

.content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* Removed skew correction */
}

.vertical-title {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  color: rgba(255, 255, 255, 0.9); 
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: nowrap;
  text-shadow: 0 2px 4px rgba(0,0,0,0.9);
  transition: opacity 0.3s;
}

.active-content {
  max-width: 600px;
  padding: 0 20px;
  animation: fadeInUp 0.5s ease-out forwards;
}

.active-content h1 {
  font-size: 3.5rem;
  color: var(--white);
  margin-bottom: 20px;
  text-transform: uppercase;
  text-shadow: 0 2px 10px rgba(0,0,0,0.8);
}

.active-content p {
  font-size: 1.5rem;
  color: #f0f0f0;
  margin-bottom: 30px;
  text-shadow: 0 2px 5px rgba(0,0,0,0.8);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-accordion {
    height: 100vh;
  }
  
  .slides-container {
    width: 100%;
    margin-left: 0;
    flex-direction: column;
  }
  
  .slide {
    width: 100%;
    flex: 1; 
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .slide.active {
    flex: 4; 
  }

  .vertical-title {
    writing-mode: horizontal-tb;
    transform: rotate(0deg);
    font-size: 1.0rem; /* Slightly smaller to fit better */
    white-space: normal;
    text-align: center;
    width: 100%;
    padding: 0 10px;
    line-height: 1.2;
  }

  .active-content h1 {
    font-size: 2rem;
  }
  
  .active-content p {
    font-size: 1rem;
  }

  .active-content p {
    font-size: 1rem;
  }

  .vertical-border {
      display: none;
  }
  
  .desktop-text { display: none; }
  .mobile-text { display: inline; }

  .global-cta {
      display: none;
  }

  .scroll-indicator {
    display: none;
  }
}


</style>
