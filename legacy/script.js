// Mobile Navigation
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple icon toggle animation can go here
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulate Sending
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            alert(`¡Gracias ${name}! Hemos recibido tu mensaje. Te contactaremos pronto a ${email}.`);
            contactForm.reset();
            btn.innerText = 'Mensaje Enviado';
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// WhatsApp Integration Helper
// This ensures the link is dynamic or tracks clicks if needed in future
const whatsappBtn = document.querySelector('.whatsapp-float');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
        console.log('WhatsApp contact initiated');
    });
}

// Scroll Reveal Animation (Simple intersection observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .review-card, .contact-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});
