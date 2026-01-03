<template>
  <section id="reseñas" class="section-padding reviews">
    <div class="container">
      <div class="section-header text-center">
        <h2>Lo Que dicen Nuestros Clientes</h2>
        <p>La satisfacción de nuestros clientes es nuestra mejor garantía</p>
      </div>

      <div class="reviews-grid">
        <!-- Review 1 -->
        <div class="review-card">
          <div class="review-stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p class="review-text">"Excelente servicio. Repararon la transmisión de mi camión en tiempo récord y a un precio justo. Muy recomendados para flotas pesadas."</p>
          <div class="review-author">
            <span>Carlos M.</span>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="review-card">
          <div class="review-stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <p class="review-text">"Llevé mi auto para un servicio completo y quedé impresionada con la atención y la limpieza del taller. Se nota que son profesionales."</p>
          <div class="review-author">
            <span>Ana P.</span>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="review-card">
          <div class="review-stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p class="review-text">"IronWork me salvó en la carretera. Su servicio de diagnóstico es muy preciso. No cambio de mecánico nunca más."</p>
          <div class="review-author">
            <span>Roberto G.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews {
    background-color: #181818;
}

.reviews-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.review-card {
    background: var(--surface-color);
    padding: 30px;
    border-radius: 16px;
    position: relative;
}

.review-stars {
    color: #FFD700;
    margin-bottom: 15px;
}

.review-text {
    font-style: italic;
    margin-bottom: 20px;
    color: #ccc;
}

.review-author {
    font-weight: 700;
    color: var(--white);
    display: flex;
    align-items: center;
    gap: 10px;
}

.review-author img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #333;
}
</style>
