
// Animação on-scroll
document.addEventListener('DOMContentLoaded', () => {
    const animated = document.querySelectorAll('.fade-scroll');
    const observer = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('animate-fadeInUp');
          observer.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.15 });
  
    animated.forEach(el => observer.observe(el));
  });

// Menu Hamburguer
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// [Opcional] Fecha o menu ao clicar em qualquer link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});
