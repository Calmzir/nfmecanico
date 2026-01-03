<template>
  <svg 
    width="120" 
    height="40" 
    viewBox="0 0 120 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    class="brand-logo"
  >
    <!-- Car Body Line -->
    <path 
        d="M10 25 L15 18 L35 15 L55 15 L75 18 L100 18 L105 20 L105 25 M30 15 L40 10 L65 10 L80 18" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
    />
    
    <!-- Wheels -->
    <circle cx="25" cy="25" r="8" stroke="currentColor" stroke-width="2" />
    <circle cx="85" cy="25" r="8" stroke="currentColor" stroke-width="2" />
    
    <!-- Underbody -->
    <path d="M33 25 L77 25" stroke="currentColor" stroke-width="2" />
    
    <!-- Spoiler/Back Detail -->
    <path d="M100 18 L110 16 L110 22" stroke="currentColor" stroke-width="2" />
  </svg>
</template>

<style scoped>
.brand-logo {
    display: block;
    color: var(--primary-color);
}
</style>
