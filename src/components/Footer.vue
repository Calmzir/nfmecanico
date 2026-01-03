<script setup>
import BrandLogo from './BrandLogo.vue';
</script>

<template>
  <footer>
    <div class="container footer-content">
      <div class="logo">
        <img src="/images/logo-full.png" alt="Neiro Fereira Mecánico" style="height: 40px; width: auto; margin-right: 10px;" />
      </div>
      <div class="copyright">
        &copy; 2024 Neiro Fereira. Todos los derechos reservados.
      </div>
      <div class="socials" style="font-size: 1.5rem; display: flex; gap: 15px;">
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
    background: #0a0a0a;
    padding: 40px 0;
    border-top: 1px solid #333;
    color: var(--text-muted);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
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
</style>
