<template>
  <section id="inicio" class="hero">
    <div class="container hero-content">
      <h1>Mecánica a <br><span>Domicilio</span></h1>
      <p>Servicio Experto y Certificado en Chevrolet y Volkswagen. Diagnósticos precisos y reparaciones donde estés.</p>
      <a href="#contacto" class="btn btn-primary">Agendar Visita</a>
      <a href="#servicios" class="btn btn-outline" style="margin-left: 15px;">Ver Servicios</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    padding-top: 80px; 
}

.hero-content h1 {
    font-size: 4rem;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.hero-content h1 span {
    color: var(--primary-color);
}

.hero-content p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto 40px;
    color: #dadada;
}

@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 2.5rem;
    }
}
</style>
