<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import WhyHireMe from './components/WhyHireMe.vue'
import Reviews from './components/Reviews.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main>
    <Hero />
    <div v-scroll-reveal>
      <Services />
    </div>
    <div v-scroll-reveal>
      <WhyHireMe />
    </div>
    <div v-scroll-reveal>
      <Reviews />
    </div>
    <div v-scroll-reveal>
      <Contact />
    </div>
  </main>
  <Footer />
</template>

<style scoped>
/* Scoped styles for App.vue if needed */
</style>
