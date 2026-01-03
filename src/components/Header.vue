<script setup>
import { ref, onMounted, onUnmounted, reactive, watch, nextTick } from 'vue';
import HeaderLogo from './HeaderLogo.vue';

const isMobileMenuOpen = ref(false);
const activeSection = ref('');
const indicatorStyle = reactive({
    left: '0px',
    width: '0px',
    opacity: 0
});

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMenu = () => {
    isMobileMenuOpen.value = false;
};

const updateIndicator = () => {
    const activeLink = document.querySelector('nav a.active');
    if (activeLink) {
        const navRect = document.querySelector('.nav-links').getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        
        // Calculate position relative to the ul container
        indicatorStyle.left = `${linkRect.left - navRect.left}px`;
        indicatorStyle.width = `${linkRect.width}px`;
        indicatorStyle.opacity = 1;
    } else {
        indicatorStyle.opacity = 0;
    }
};

// Scroll Spy Logic
let observer = null;

onMounted(() => {
    const sections = document.querySelectorAll('section');
    
    const options = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', 
        threshold: 0
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id;
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Initial update
    window.addEventListener('resize', updateIndicator);
    nextTick(updateIndicator);
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
    window.removeEventListener('resize', updateIndicator);
});

// Watch for section changes to move the line
watch(activeSection, () => {
    nextTick(updateIndicator);
});
</script>

<template>
  <header>
    <div class="container">
      <a href="#" class="logo">
        <HeaderLogo />
      </a>
      <div class="mobile-toggle" @click="toggleMenu">
        <i class="fa-solid fa-bars"></i>
      </div>
      <nav>
        <ul class="nav-links" :class="{ active: isMobileMenuOpen }">
          <li><a href="#inicio" :class="{ active: activeSection === 'inicio' }" @click="closeMenu">Inicio</a></li>
          <li><a href="#beneficios" :class="{ active: activeSection === 'beneficios' }" @click="closeMenu">Beneficios</a></li>
          <li><a href="#servicios" :class="{ active: activeSection === 'servicios' }" @click="closeMenu">Servicios</a></li>
          <li><a href="#reseñas" :class="{ active: activeSection === 'reseñas' }" @click="closeMenu">Reseñas</a></li>
          <li><a href="#cobertura" :class="{ active: activeSection === 'cobertura' }" @click="closeMenu">Cobertura</a></li>
          <li><a href="#contacto" :class="{ active: activeSection === 'contacto' }" @click="closeMenu">Contacto</a></li>
          <div class="nav-indicator" :style="indicatorStyle"></div>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--glass-border);
    padding: 5px 0;
    transition: var(--transition);
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--text-color); /* Updated for Light Theme */
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo span {
    color: var(--primary-color);
}

nav ul {
    display: flex;
    gap: 30px;
    position: relative; /* Context for indicator */
}

nav a {
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    padding-bottom: 5px;
    color: var(--text-color);
    transition: color 0.3s ease;
}

/* Active State Styles - Color Only */
nav a.active {
    color: var(--primary-color);
}

/* Sliding Indicator */
.nav-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background-color: var(--primary-color);
    border-radius: 2px;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    pointer-events: none;
}

nav a:hover {
    color: var(--primary-color);
}

.mobile-toggle {
    display: none;
    font-size: 1.5rem;
    color: var(--text-color);
    cursor: pointer;
}

@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        width: 70%;
        background: var(--surface-color);
        flex-direction: column;
        padding: 80px 40px;
        transition: var(--transition);
        box-shadow: -5px 0 15px rgba(0,0,0,0.5);
    }
    
    .nav-links.active {
        right: 0;
    }

    .mobile-toggle {
        display: block;
        z-index: 1001;
    }
}
</style>
