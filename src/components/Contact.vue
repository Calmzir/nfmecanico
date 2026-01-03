<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const btnText = ref('Enviar Mensaje');
const isSending = ref(false);

const handleSubmit = () => {
  isSending.value = true;
  btnText.value = 'Enviando...';

  setTimeout(() => {
    alert(`¡Gracias ${name.value}! Hemos recibido tu mensaje. Te contactaremos pronto a ${email.value}.`);
    name.value = '';
    email.value = '';
    message.value = '';
    btnText.value = 'Mensaje Enviado';
    
    setTimeout(() => {
      btnText.value = 'Enviar Mensaje';
      isSending.value = false;
    }, 3000);
  }, 1500);
};
</script>

<template>
  <section id="contacto" class="section-padding">
    <div class="container">
      <div class="contact-container">
        <div class="contact-info">
          <h2>Contáctanos</h2>
          <p style="margin-bottom: 30px;">Agenda tu visita técnica o reparacíon a domicilio hoy mismo.</p>
          
          <div class="contact-item">
            <i class="fa-brands fa-whatsapp"></i>
            <span>+56 9 5061 6848</span>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-envelope"></i>
            <span>fereira.neiro@gmail.com</span>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-location-dot"></i>
            <span>Servicio a Domicilio (Cobertura en la Zona)</span>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-clock"></i>
            <span>Lun - Sáb: 8:00am - 6:00pm</span>
          </div>
        </div>

        <div class="contact-form">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input type="text" v-model="name" class="form-control" placeholder="Tu Nombre" required>
            </div>
            <div class="form-group">
              <input type="email" v-model="email" class="form-control" placeholder="Tu Correo Electrónico" required>
            </div>
            <div class="form-group">
              <textarea v-model="message" class="form-control" placeholder="¿Qué servicio necesitas?" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="isSending" style="width: 100%;">{{ btnText }}</button>
          </form>
        </div>
      </div>
    </div>
    
    <!-- WhatsApp Float -->
    <a href="https://wa.me/56950616848?text=Hola%20Neiro,%20necesito%20un%20servicio%20mecánico." class="whatsapp-float" target="_blank">
        <i class="fa-brands fa-whatsapp"></i>
    </a>
  </section>
</template>

<style scoped>
.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: start;
}

.contact-info h3 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    font-size: 1.1rem;
}

.contact-item i {
    color: var(--primary-color);
    font-size: 1.2rem;
}

.contact-form {
    background: var(--surface-color);
    padding: 40px;
    border-radius: 16px;
    border: 1px solid var(--glass-border);
}

.form-group {
    margin-bottom: 20px;
}

.form-control {
    width: 100%;
    padding: 15px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    color: var(--white);
    font-family: inherit;
    font-size: 1rem;
    transition: var(--transition);
}

.form-control:focus {
    outline: none;
    border-color: var(--primary-color);
    background: rgba(255, 255, 255, 0.1);
}

textarea.form-control {
    resize: none;
    height: 150px;
}

/* WhatsApp Floating Button */
.whatsapp-float {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #25D366;
    color: #FFF;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
}

.whatsapp-float:hover {
    transform: scale(1.1);
    background-color: #128C7E;
}

@media (max-width: 768px) {
    .contact-container {
        grid-template-columns: 1fr;
    }
}
</style>
