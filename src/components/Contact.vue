<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  const mailtoLink = `mailto:fereira.neiro@gmail.com?subject=Consulta Landing Page - ${form.value.name}&body=${form.value.message}%0D%0A%0D%0ADe: ${form.value.name} (${form.value.email})`;
  window.location.href = mailtoLink;
};
</script>

<template>
  <section id="contacto" class="contact-section section-padding">
    <div class="container">
      <div class="section-header text-center">
        <h2>Contáctame</h2>
        <p>¿Listo para programar tu visita?</p>
      </div>

      <div class="contact-grid">
        <div class="contact-info">
            <div class="contact-item">
            <i class="fa-solid fa-phone"></i>
            <span>+56 9 5061 6848</span>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-envelope"></i>
            <span>fereira.neiro@gmail.com</span>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-location-dot"></i>
            <span>Rancagua, Chile</span>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-clock"></i>
            <span>Lun - Sáb: 8:00am - 6:00pm</span>
          </div>
        </div>

        <form @submit.prevent="submitForm" class="contact-form">
          <input type="text" v-model="form.name" placeholder="Tu Nombre" required />
          <input type="email" v-model="form.email" placeholder="Tu Email" required />
          <textarea v-model="form.message" placeholder="¿En qué puedo ayudarte?" rows="5" required></textarea>
          <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
        </form>
      </div>
    </div>
    
    <Teleport to="body">
      <a href="https://wa.me/56950616848" class="whatsapp-float" target="_blank">
          <i class="fa-brands fa-whatsapp"></i>
          <span class="whatsapp-label">¡Contáctame ahora!</span>
      </a>
    </Teleport>
  </section>
</template>

<style scoped>
.contact-section {
    background-color: #1a1a1a; /* Dark Background */
    color: #ffffff;
}

.section-header h2 {
    color: #ffffff;
}

.section-header p {
    color: #a0a0a0;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Applied the responsive fix here too */
    gap: 40px;
    margin-top: 50px;
    align-items: stretch;
}

.contact-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    height: 100%; 
    gap: 15px;
}

.contact-item {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 10px;
    transition: var(--transition);
    flex: 1;
    margin-bottom: 0;
}

.contact-item:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
}

.contact-item i {
    color: var(--primary-color);
    margin-right: 15px;
    font-size: 1.5rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
}

input, textarea {
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #333;
    background: #2a2a2a;
    color: #fff;
    font-family: inherit;
    font-size: 1rem;
    transition: var(--transition);
    width: 100%;
}

textarea {
    resize: vertical;
    min-height: 150px;
    max-height: 300px;
}

input:focus, textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(153, 24, 24, 0.2);
}

.whatsapp-float {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #25d366;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    text-decoration: none;
    z-index: 100;
    transition: var(--transition);
    /* No shadow as requested previously, or maybe slight one for depth since it's a bubble now? 
       User said "quitale la sombra" before, but usually floating buttons have shadow. 
       I will stick to flat for the button but maybe shadow for the bubble? 
       Let's keep the button flat if they liked that, but circles usually need shadow to separate from bg.
       I'll keep it flat as per "quitale la sombra" instruction which might still apply to the button base. */
}

.whatsapp-float i {
    font-size: 30px;
}

.whatsapp-float:hover {
    transform: scale(1.1);
    background-color: #20b857;
}

/* Tooltip / Cloud Text */
.whatsapp-label {
    position: absolute;
    right: 70px; /* Position to the left of the button */
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    color: #333;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    white-space: nowrap;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    opacity: 0; /* Hidden by default or visible? User said "aparezca", maybe animation? */
    animation: fadeIn 0.5s ease-out 1s forwards; /* Delay appearance */
    pointer-events: none;
}

/* Arrow for the cloud */
.whatsapp-label::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid white;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translate(-10px, -50%); }
    to { opacity: 1; transform: translate(0, -50%); }
}

@media (max-width: 768px) {
    .whatsapp-float {
        width: 50px;
        height: 50px;
        bottom: 20px;
        right: 20px;
        font-size: 24px;
    }

    .whatsapp-float i {
        font-size: 24px;
    }

    .whatsapp-label {
        display: none;
    }
}
</style>
