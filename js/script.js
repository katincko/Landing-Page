const body = document.body;
      document.querySelectorAll('[data-tema]').forEach(botao => {
        botao.addEventListener('click', () => {
          body.classList.remove('tema-claro', 'tema-escuro', 'tema-neutro');
          body.classList.add(`tema-${botao.dataset.tema}`);
        });
});

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
document.getElementById('menu-btn').onclick = () => {
    document.getElementById('menu').classList.toggle('hidden');
};