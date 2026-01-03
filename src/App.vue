<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import WhyHireMe from './components/WhyHireMe.vue'
import ServiceArea from './components/ServiceArea.vue'
import Reviews from './components/Reviews.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main>
    <Hero />
    <div>
      <WhyHireMe />
    </div>
    <div>
      <Services />
    </div>
    <div>
      <Reviews />
    </div>
    <div>
      <ServiceArea />
    </div>
    <div>
      <Contact />
    </div>
  </main>
  <Footer />
</template>

<style scoped>
/* Scoped styles for App.vue if needed */
</style>
