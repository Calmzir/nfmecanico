<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const reviews = ref([
  {
    id: 1,
    name: "Carlos M.",
    text: "Excelente servicio. Repararon la transmisión de mi camión en tiempo récord y a un precio justo. Muy recomendados para flotas pesadas.",
    stars: 5,
    role: "Transportista"
  },
  {
    id: 2,
    name: "Ana P.",
    text: "Llevé mi auto para un servicio completo y quedé impresionada con la atención y la limpieza del taller. Se nota que son profesionales.",
    stars: 4.5,
    role: "Cliente Particular"
  },
  {
    id: 3,
    name: "Roberto G.",
    text: "IronWork me salvó en la carretera. Su servicio de diagnóstico es muy preciso. No cambio de mecánico nunca más.",
    stars: 5,
    role: "Viajero Frecuente"
  },
  {
    id: 4,
    name: "María F.",
    text: "Transparencia total. Me explicaron cada repuesto que cambiaron. Es difícil encontrar mecánicos tan honestos hoy en día.",
    stars: 5,
    role: "Cliente Particular"
  },
  {
    id: 5,
    name: "Jorge L.",
    text: "El servicio a domicilio es una maravilla. Me ahorraron la grúa y solucionaron el problema de encendido en mi propia casa.",
    stars: 5,
    role: "Empresario"
  }
]);

const currentIndex = ref(0);
const autoplayInterval = ref(null);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % reviews.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + reviews.value.length) % reviews.value.length;
};

const setSlide = (index) => {
  currentIndex.value = index;
  resetAutoplay();
};

const startAutoplay = () => {
  autoplayInterval.value = setInterval(nextSlide, 5000); // 5 seconds
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval.value);
};

const resetAutoplay = () => {
  stopAutoplay();
  startAutoplay();
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<template>
  <section id="reseñas" class="section-padding reviews">
    <div class="container">
      <div class="section-header text-center">
        <h2>Lo Que dicen Nuestros Clientes</h2>
        <p>La satisfacción y confianza son nuestra mejor garantía</p>
      </div>

      <div class="reviews-slider" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
        <!-- Arrow Controls -->
        <button class="nav-btn prev" @click="prevSlide"><i class="fa-solid fa-chevron-left"></i></button>
        
        <!-- Slides Window -->
        <div class="slider-window">
          <div 
            class="slider-track" 
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div 
              v-for="review in reviews" 
              :key="review.id" 
              class="review-slide"
            >
              <div class="review-card">
                <div class="review-stars">
                  <i 
                    v-for="n in 5" 
                    :key="n" 
                    class="fa-solid" 
                    :class="n <= Math.floor(review.stars) ? 'fa-star' : (n === Math.ceil(review.stars) ? 'fa-star-half-stroke' : '')"
                  ></i>
                </div>
                <p class="review-text">"{{ review.text }}"</p>
                <div class="review-author">
                  <div class="author-info">
                    <span class="name">{{ review.name }}</span>
                    <span class="role">{{ review.role }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="nav-btn next" @click="nextSlide"><i class="fa-solid fa-chevron-right"></i></button>
      </div>

      <!-- Dots Indicators -->
      <div class="slider-dots">
        <span 
          v-for="(review, index) in reviews" 
          :key="'dot-'+index"
          class="dot"
          :class="{ active: currentIndex === index }"
          @click="setSlide(index)"
        ></span>
      </div>

    </div>
  </section>
</template>

<style scoped>
.reviews {
    background-color: var(--background-color); /* Light Theme */
    color: var(--text-color);
}

.reviews-slider {
    position: relative;
    max-width: 800px;
    margin: 50px auto 30px; /* Centered with max width */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 40px; /* Space for arrows */
}

.slider-window {
    width: 100%;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.slider-track {
    display: flex;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    width: 100%;
}

.review-slide {
    min-width: 100%;
    box-sizing: border-box;
}

.review-card {
    background: var(--surface-color); /* White */
    padding: 40px;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.review-stars {
    color: #FFD700;
    margin-bottom: 20px;
    font-size: 1.2rem;
}

.review-text {
    font-style: italic;
    font-size: 1.1rem;
    margin-bottom: 30px;
    color: #555; /* Darker grey for light theme */
    line-height: 1.8;
}

.review-author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.author-info {
    text-align: center;
}

.name {
    display: block;
    font-weight: 700;
    color: var(--primary-color);
    font-size: 1.1rem;
}

.role {
    display: block;
    font-size: 0.9rem;
    color: #888;
}

/* Controls */
.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: var(--primary-color);
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
    transition: transform 0.2s;
}

.nav-btn:hover {
    transform: translateY(-50%) scale(1.2);
}

.prev { left: 0; }
.next { right: 0; }

.slider-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

.dot {
    width: 10px;
    height: 10px;
    background-color: #ddd;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
}

.dot.active {
    background-color: var(--primary-color);
    width: 12px;
    height: 12px;
}

@media (max-width: 768px) {
    .review-card {
        padding: 30px 20px;
    }
    
    .review-text {
        font-size: 1rem;
    }
    
    .reviews-slider {
        padding: 0;
    }
    
    .nav-btn {
        display: none; /* Hide arrows on mobile, use dots/swipe (swipe not impl but dots work) */
    }
}
</style>
