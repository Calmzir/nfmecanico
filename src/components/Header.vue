<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMenu = () => {
    isMobileMenuOpen.value = false;
};
</script>

<template>
  <header>
    <div class="container">
      <a href="#" class="logo">
        <i class="fa-solid fa-screwdriver-wrench"></i>
        NF<span>MECÁNICO</span>
      </a>
      <div class="mobile-toggle" @click="toggleMenu">
        <i class="fa-solid fa-bars"></i>
      </div>
      <nav>
        <ul class="nav-links" :class="{ active: isMobileMenuOpen }">
          <li><a href="#inicio" @click="closeMenu">Inicio</a></li>
          <li><a href="#servicios" @click="closeMenu">Servicios</a></li>
          <li><a href="#reseñas" @click="closeMenu">Reseñas</a></li>
          <li><a href="#contacto" @click="closeMenu">Contacto</a></li>
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
    padding: 20px 0;
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
    color: var(--white);
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
}

nav a {
    font-weight: 500;
    font-size: 1rem;
}

nav a:hover {
    color: var(--primary-color);
}

.mobile-toggle {
    display: none;
    font-size: 1.5rem;
    color: var(--white);
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
