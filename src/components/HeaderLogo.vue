<template>
  <div class="header-logo"></div>
</template>

<style scoped>
.header-logo {
  /* Container Size - Adjusts the effective usage area */
  width: 340px; 
  height: 100px;
  
  /* Background Image Styling */
  background-image: url('/images/logo-full.png');
  background-size: contain; /* Ensures logo fits within container */
  background-position: left center; /* Aligns logo to the left */
  background-repeat: no-repeat;
  
  /* Optional: Add transition if size changes on scroll/media queries */
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
    .header-logo {
        width: 240px; /* Smaller on mobile */
        height: 70px;
    }
}
</style>
