import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

const app = createApp(App)

// Global Scroll Directive
app.directive('scroll-reveal', {
    mounted(el) {
        el.classList.add('reveal-on-scroll');

        // Slight delay to allow layout to settle
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    // Add visible class
                    entry.target.classList.add('is-visible');

                    // Optional: Stop observing once visible
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        observer.observe(el);
    }
});

app.mount('#app')
